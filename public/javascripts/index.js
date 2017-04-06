$(document).ready(function(){
  var width = parseFloat($('.slider').width())
  $('.slider').slider(
    {height: width * 0.5}
  );
});
