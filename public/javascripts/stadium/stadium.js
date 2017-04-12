$(document).ready(function() {

  $('#storyModal').modal();
  $('.story').click(function() {
    var title = $(this).find('.storyTitle').html();
    $('#storyModal').find('h4').html(title);
    $('#storyModal').modal('open');
  });

  if ($('#stadiumStoryWall').data('user')) {
    var quill = new Quill('#editor', {
      theme: 'snow'
    });
    var form = document.querySelector('form');
    form.onsubmit = function() {
      var about = document.querySelector('input[name=about]');
      about.value = JSON.stringify(quill.getContents());
    }
  }

});
