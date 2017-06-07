$(document).ready(function() {
  $('#wanted-form').submit(function(e) {
    var href = $(this).data('href');
    $.ajax({
      type: $(this).attr('method'),
      url: `${href}/wanted`,
      data: {hi: 'hi'},
      success: function(data) {
        console.log('ya');
        console.log(data);
      },
      error: function(err) {
        console.log('no');
        console.log(err);
      }
    });
    return false;
  });
});
