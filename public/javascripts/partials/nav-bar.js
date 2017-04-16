$(document).ready(function(){
  $('#loginModal').modal();
  $('#profilePic').dropdown();
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
			ShowSearchResults(results);
		}
		else {
			HideSearchResults();
		}
	});
	var con = parseFloat($('#navBar .container').width()) - 40;
//	console.log(con);
	$('#searchInput').focus(function() {
		$('#profilePic').css({'display': 'none'});
		$('#hamburger').css({'display': 'none'});
		$('#navBarLinkDiv').css({'float': 'left'});
		$(this).width(con);
	});
	$('#searchInput').focusout(function() {
		$('#profilePic').css({'display': 'block'});
		$('#hamburger').css({'display': 'inline-block'});
		$('#navBarLinkDiv').css({'float': 'right'});
		$(this).width(180);
	});
});

function ShowSearchResults(results) {
	$('#searchResults').css({'max-height': '500px'});
	for (var i = 0; i < results.length; i++) {
		$('#searchResults').append(
			`<a href="/stadium/${results[i].sport[0]}/${results[i].league[0]}/${results[i]._id}" class="searchResultsLink">${results[i].name}</a>`
		);
	}
}

function HideSearchResults() {
	$('#searchResults').css({'max-height': '0'});
}
