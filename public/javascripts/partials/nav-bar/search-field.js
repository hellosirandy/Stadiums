$(document).ready(function() {
  var allStadiums = $('#search-result').data('stadiums')
  $('#search-input').focus(function() {
    $('#account-li').hide();
  });
  $('#search-input').focusout(function() {
    $('#account-li').show();
    // $('#search-result').hide();
  });
  $('#search-input').keyup(function() {
    $('#search-result ul').html('');
		var val = $(this).val();
		if (val != '') {
			for (var i = 0; i < allStadiums.length; i++) {
				if (allStadiums[i].name.toLowerCase().search(val.toLowerCase()) > -1) {
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
  });
  // $(document).mouseup(function(e) {
  //   var trigger = $('#search-input');
  //   var container = $('#search-result');
  //   if (!trigger.is(e.target) && !container.is(e.target) && trigger.has(e.target).length === 0){
  //       container.hide();
  //   }
  // });
});
