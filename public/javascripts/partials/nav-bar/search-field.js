$(document).ready(function() {
  up = 38;
  down = 40;
  enter = 13;
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
          if ($cur.next().length) {
            $cur.toggleClass('grey lighten-2');
            $cur = $cur.next();
            $cur.toggleClass('grey lighten-2');
            if ($cur.position().top + $cur.outerHeight() > $('#search-result').height() + $('#search-result').scrollTop()) {
              $('#search-result').animate({
                scrollTop: $cur.position().top + $cur.outerHeight() - $('#search-result').height()
              }, 100);
            }
          }
        }
        break;
      case up:
        e.preventDefault();
        if ($('#search-result').is(':visible')) {
          if ($cur.prev().length) {
            $cur.toggleClass('grey lighten-2');
            $cur = $cur.prev();
            $cur.toggleClass('grey lighten-2');
            if ($cur.position().top < $('#search-result').scrollTop()) {
              $('#search-result').animate({
                scrollTop: $cur.position().top
              }, 100);
            }
          }
        }
        break;
      case enter:
        if ($cur.length && $cur.attr('href')) {
          window.location = $cur.attr('href');
        }
        break;
      default:
    		var val = $(this).val();
        if (val != inputText) {
          search(val, allStadiums);
          $cur = $('#search-result a').first();
          $cur.toggleClass('grey lighten-2');
        }
    }
  });

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
  $(document).on("mouseenter", "#search-result a", function() {
    $cur.toggleClass('grey lighten-2');
    $cur = $(this);
    $cur.toggleClass('grey lighten-2');
  });
});

function search(inputText, allStadiums) {
  if (inputText != '') {
    $('#search-result ul').html('');
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
