$(document).ready(function() {

  $('#storyModal').modal();
  $('.story').click(function() {
    var title = $(this).find('.storyTitle').html();
    var content = $(this).data('content');
    console.log(content);
    $('#storyModal').find('h4').html(title);
    $('#storyModal').find('p').html(content);
    $('#storyModal').modal('open');
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
