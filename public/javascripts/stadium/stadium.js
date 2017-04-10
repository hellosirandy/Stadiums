$(document).ready(function() {
  var quill = new Quill('#editor', {
    theme: 'snow'
  });
  $('#storyModal').modal();
  $('.storyContent').click(function() {
    console.log($(this).find('.storyTitle').html());
    var title = $(this).find('.storyTitle').html();
    $('#storyModal').find('h4').html(title);
    $('#storyModal').modal('open');
  });
});
