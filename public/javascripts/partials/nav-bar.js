$(document).ready(function(){
  $('#loginModal').modal();
  $('#profilePic').dropdown();
  $('#profilePic').click(function() {
    console.log('hi');
    $('#profilePic').dropdown('open');
  });
});
