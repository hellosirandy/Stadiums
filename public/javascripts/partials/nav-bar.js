$(document).ready(function() {
  $('#wanted-form').submit(function(e) {
    var stadiumId = $(this).data('stadiumid');
    var csrf = $(this).data('csrf')
    $.ajax({
      type: $(this).attr('method'),
      url: `/user/wanted/${stadiumId}`,
      data: {_csrf: csrf},
      success: function(data) {
        $('#wanted-btn').addClass('disabled');
        Materialize.toast('Added to wanted list.', 4000);
      },
      error: function(err) {
        Materialize.toast('Failed to add to wanted list.', 4000);
      }
    });
    return false;
  });
});
