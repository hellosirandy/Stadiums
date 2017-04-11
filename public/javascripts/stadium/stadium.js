$(document).ready(function() {
  var quill = new Quill('#editor', {
    theme: 'snow'
  });
  $('#storyModal').modal();
  $('.story').click(function() {
    var title = $(this).find('.storyTitle').html();
    $('#storyModal').find('h4').html(title);
    $('#storyModal').modal('open');
  });

  var form = document.querySelector('form');
  form.onsubmit = function() {
    var about = document.querySelector('input[name=about]');
    about.value = JSON.stringify(quill.getContents());
  }
});
