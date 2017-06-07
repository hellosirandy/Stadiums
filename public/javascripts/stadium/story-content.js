$(document).ready(function() {
  $('.continueBtn').click(function() {
    var storyContent = $(this).parent().find('.storyContent');
    if ($(this).data('status') == 'hidden') {
      storyContent.css({maxHeight: '2000px'});
      $(this).html('Hide');
      $(this).data('status', 'show');
    }
    else if ($(this).data('status') == 'show') {
      storyContent.css({maxHeight: '150px'});
      $(this).html('... Full article');
      $(this).data('status', 'hidden');
    }
  });
  $('.continueBtn').each(function() {
    var storyContent = $(this).parent().find('.storyContent');
    var height = parseFloat(storyContent.height());
    if (height < 150) {
      $(this).css({display: 'none'});
    } else {
      $(this).css({display: 'block'});
    }
  });
});
