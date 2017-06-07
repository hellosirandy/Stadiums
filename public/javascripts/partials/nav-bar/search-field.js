$(document).ready(function() {
  up = 38;
  down = 40;
  searchResultHighlight = -1;
  var allStadiums = $('#search-result').data('stadiums');
  $('#search-wrapper').click(function() {
    if (!$('#search-input').hasClass('focus')) {
      $('#account-li').hide();
      $('#search-input').addClass('focus');
      val = $('#search-input').val();
      search(val, allStadiums);
    }
  });
  var selecting = false;
  var $cur;
  $('#search-input').keyup(function(e) {
    $('#search-result ul').html('');
		var val = $(this).val();
    search(val, allStadiums);
    if ($('#search-result').is(':visible')) {
      selecting = true;
      if (!selecting) {
        $cur = $('#search-result a').first();
      }
      $cur.toggleClass('grey lighten-2');
      switch (e.which) {
        case down:
          console.log($cur.html());
          // $cur.toggleClass('grey lighten-2');
          $cur = $cur.next();
          // $cur.toggleClass('grey lighten-2');
          // console.log($('#search-result a').first().html());
          // searchResultHighlight += 1;
          // $('#search-result a').eq(searchResultHighlight).toggleClass('grey lighten-2');
          break;
        case up:
          console.log($cur.html());
          $cur.toggleClass('grey lighten-2');
          $cur = $cur.prev();
          $cur.toggleClass('grey lighten-2');
          break
        default:
          return;
      }
      e.preventDefault();
    }
  });
  // $('#search-result ul a').hover(function() {
  //   $('#search-result a').eq(searchResultHighlight).toggleClass('grey lighten-2');
  //   searchResultHighlight =
  // });
  $(document).mouseup(function(e) {
    var trigger = $('#search-input');
    var container = $('#search-wrapper');
    if (container.has(e.target).length === 0) {
      if ($('#search-input').hasClass('focus')) {
        $('#account-li').show();
        $('#search-input').removeClass('focus');
        $('#search-result').hide();
      }
    }
  });
});

function search(inputText, allStadiums) {
  if (inputText != '') {
    for (var i = 0; i < allStadiums.length; i++) {
      if (allStadiums[i].name.toLowerCase().search(inputText.toLowerCase()) > -1) {
        $('#search-result ul').append(
          `<a href="${allStadiums[i].url}" class="collection-item">${allStadiums[i].name}</a>`
        );
      }
    }
    $('#search-result').show();
  }
  else {
    $('#search-result').hide();
  }
}
