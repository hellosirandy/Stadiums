$(document).ready(function() {

  $('#storyModal').modal();
  $('.story').click(function() {
    // var title = $(this).find('.storyTitle').html();
    // var content = $(this).data('content');
    // $('#storyModal').find('h4').html(title);
    // $('#storyModal').find('p').html(content);
    // $('#storyModal').modal('open');
  });
	
	$('#storyTab').click(function() {
		
	});
	
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
    var quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Waiting for your precious content',
    });
    var form = document.querySelector('form');
    form.onsubmit = function() {
      var about = document.querySelector('input[name=about]');
      about.value = quill.root.innerHTML;
    }
  }

});
