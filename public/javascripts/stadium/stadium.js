$(document).ready(function() {

  $('#storyModal').modal();

	$('ul.tabs').tabs({
		onShow: function(el) {
			if (el.attr('id') == 'stadiumStoryWall') {
				$('.continueBtn').each(function() {
					var storyContent = $(this).parent().find('.storyContent');
					var height = parseFloat(storyContent.height());
					if (height < 150) {
						$(this).css({display: 'none'});
					} else {
            $(this).css({display: 'block'});
          }
				});
			}
		},
	});

  $('.albumCell').click(function() {
    var index = $('.albumCell').index( this );
    var $image = $('.cellContent').eq(index);
    $image.click();
  });



  if ($('#stadiumStoryWall').data('user')) {
    var socket = io.connect();
    var quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Waiting for your precious content',
    });
    var form = document.querySelector('form');
    form.onsubmit = function() {
      var storyContent = document.querySelector('input[name=storyContent]');
      var storyEvaluation = document.querySelector('input[name=storyEvaluation]');
      storyContent.value = quill.root.innerHTML;
      storyEvaluation.value = parseFloat($('#evaluationScore').html());
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
