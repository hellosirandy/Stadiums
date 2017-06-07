$(document).ready(function() {
  $('#wanted-form').submit(function(e) {
    var href = $(this).data('href');
    $.ajax({
      type: $(this).attr('method'),
      // url: `${href}/wanted`,
      url: '/user/wanted',
      data: {hi: 'hi', _csrf: $(this).data('csrf')},
      success: function(data) {
        $('#wanted-btn').addClass('disabled');
        Materialize.toast('Added to wanted list.', 4000);
      },
      error: function(err) {
        console.log('no');
        console.log(err);
      }
    });
    return false;
  });
});
