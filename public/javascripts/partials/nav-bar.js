$(document).ready(function(){
  $('#loginModal').modal();
  $('#profilePic').dropdown();
  $('#profilePic').click(function() {
    $(this).dropdown('open');
  });
	$( "#searchInput" ).keypress(function() {
		
	});
});
