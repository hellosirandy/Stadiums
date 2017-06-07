$(document).ready(function(){
  $('#loginModal').modal();
  $('#profilePic').dropdown({
    alignment: 'right',
  });
  $('#profilePic').click(function() {
    $(this).dropdown('open');
  });

	var allStadiums = JSON.parse($('#allStadiums').html());
	$('#searchInput').keyup(function() {
		$('#searchResults').html('');
		var val = $(this).val();
		if (val != '') {
			var results = [];
			for (var i = 0; i < allStadiums.length; i++) {
				if (allStadiums[i].name.toLowerCase().search(val.toLowerCase()) > -1) {
					results.push(allStadiums[i]);
				}
			}
			LoadSearchResults(results);
      $('#searchResults').show();
		}
		else {
      $('#searchResults').hide();
		}
	});
	var con = parseFloat($('#navBar .container').width()) - 40;
	$('#searchInput').focus(function() {
		$('#profilePic').css({'display': 'none'});
		$('.navBarLinks').css({'display': 'none'});
    $('#searchResults').show();
		$(this).width(200);
	});
	$('#searchInput').focusout(function() {
		$('#profilePic').css({'display': 'block'});
		$('.navBarLinks').css({'display': 'block'});
		$(this).width(100);
	});
  $(document).mouseup(function(e) {
    var trigger = $('#searchInput');
    var container = $('#searchResults');
    if (!trigger.is(e.target) && trigger.has(e.target).length === 0){
        container.hide();
    }
  });
});

function LoadSearchResults(results) {
	for (var i = 0; i < results.length; i++) {
    $('#searchResults').append(
			`<a href="${results[i].url}" class="searchResultsLink">${results[i].name}</a>`
		);
	}
}

function HideSearchResults() {
	$('#searchResults').css({'max-height': '0'});
}
