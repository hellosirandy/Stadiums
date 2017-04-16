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
		var results = [];
		for (var i = 0; i < allStadiums.length; i++) {
			if (allStadiums[i].name.toLowerCase().search(val.toLowerCase()) > -1) {
				results.push(allStadiums[i]);
			}
		}
		for (var i = 0; i < results.length; i++) {
			$('#searchResults').append(`<a href="#" class="searchResultsLink">${results[i].name}</a>`);
		}
	});
	
//	console.log($('#allStadiums').html());
	var s = allStadiums[0];
//	console.log(s.name.toLowerCase().search('met'));
//	$('#searchResults').append(`<a href="#" class="searchResultsLink">${s.name}</a>`);
});
