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
  var $cur;
  var inputText = '';
  $('#search-input').keyup(function(e) {
    switch (e.which) {
      case down:
        e.preventDefault();
        if ($('#search-result').is(':visible')) {
          $cur.toggleClass('grey lighten-2');
          $cur = $cur.next();
          $cur.toggleClass('grey lighten-2');
        }
        break;
      case up:
        e.preventDefault();
        if ($('#search-result').is(':visible')) {
          $cur.toggleClass('grey lighten-2');
          $cur = $cur.prev();
          $cur.toggleClass('grey lighten-2');
        }
        break;
      default:
    		var val = $(this).val();
        if (val != inputText) {
          $('#search-result ul').html('');
          console.log(val);
          search(val, allStadiums);
          $cur = $('#search-result a').first();
          $cur.toggleClass('grey lighten-2');
        }
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
