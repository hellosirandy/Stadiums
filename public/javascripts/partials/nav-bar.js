$(document).ready(function() {
  console.log($('.breadcrumb:last-child').html());
  $('.breadcrumb').each(function() {
    console.log($(this).html());
  });
  $('.add-to-list-form').submit(function(e) {
    var stadiumId = $(this).data('stadiumid');
    var csrf = $(this).data('csrf');
    var listName = $(this).data('listname');
    $.ajax({
      type: $(this).attr('method'),
      url: `/user/${listName}/${stadiumId}`,
      data: {_csrf: csrf},
      success: function(data) {
        $(`#${listName}-btn`).addClass('disabled');
        Materialize.toast(`Added to ${listName} list.`, 4000);
      },
      error: function(err) {
        Materialize.toast(`Failed to add to ${listName} list.`, 4000);
      }
    });
    return false;
  });
});
