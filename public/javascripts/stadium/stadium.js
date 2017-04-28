$(document).ready(function() {

  $('#storyModal').modal();

	$('ul.tabs').tabs({
		onShow: function(el) {
			console.log(el.attr('id'));
			if (el.attr('id') == 'stadiumStoryWall') {
				$('.continueBtn').each(function() {
					var storyContent = $(this).parent().find('.storyContent');
					var height = parseFloat(storyContent.height());
					if (height < 150) {
						$(this).css({display: 'none'});
					}
				});
			}
		},
	});

  $('.continueBtn').click(function() {
    var storyContent = $(this).parent().find('.storyContent');
    if ($(this).data('status') == 'hidden') {
      storyContent.css({maxHeight: '2000px'});
      $(this).html('Hidden');
      $(this).data('status', 'show');
    }
    else if ($(this).data('status') == 'show') {
      storyContent.css({maxHeight: '150px'});
      $(this).html('... Full article');
      $(this).data('status', 'hidden');
    }
  });

  if ($('#stadiumStoryWall').data('user')) {
    var socket = io.connect();
    var quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Waiting for your precious content',
    });
    var form = document.querySelector('form');
    form.onsubmit = function() {
      var about = document.querySelector('input[name=about]');
      about.value = quill.root.innerHTML;
    }
    var sentences = []
    quill.on('text-change', function(delta, source) {
      var text = quill.getText()
      var tempSentences = text.match( /[^\.!\?]+[\.!\?]+/g );
      if (sentences.length == 0 && tempSentences != null) {
        sentences = tempSentences;
        socket.emit('text change', sentences);
      }
      else if (tempSentences != null && sentences.join(' ') != tempSentences.join(' ')) {
        sentences = tempSentences;
        socket.emit('text change', sentences);
      }
    });
    socket.on('update score', function(newScore, callback) {
      newScore = Math.round(newScore * 10) / 10;
      if (newScore > 0) {
        $('#evaluation').css('color', '#81c784');
      }
      else if (newScore < 0) {
        $('#evaluation').css('color', '#e57373');
      }
      else {
        $('#evaluation').css('color', '#bdbdbd');
      }
      $('#evaluationScore').html(newScore);
    });
  }
});
