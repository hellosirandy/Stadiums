$(document).ready(function() {
  $('.recommandationPic').each(function() {
    $(this).click(function() {
      window.location.href= $(this).data('href');
    });
  });
});
