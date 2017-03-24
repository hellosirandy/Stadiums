$(document).ready(function() {
  $('#sportSelect').material_select();
  $('#leagueSelect').material_select();

  $('#sportSelect').change(function() {
    var url = $('#sportSelect option:selected').val();
    window.location = url;
  });
  $('#leagueSelect').change(function() {
    var url = $('#leagueSelect option:selected').val();
    console.log(url);
    window.location = url;
  });

  DefaultSelect('#sportSelect');
  DefaultSelect('#leagueSelect');
  // var selectSport = $('#sportSelect').data('selected');
  // console.log(selectSport);
  // if (selectSport) $(`#sportSelect option:contains(${selectSport})`).prop('selected', true);
  // else $(`#sportSelect option:contains("None")`).prop('selected', true);
  // $('#sportSelect').material_select();
});

function DefaultSelect(selector) {
  var select = $(selector).data('selected');
  console.log(select);
  if (select) $(`${selector} option:contains(${select})`).prop('selected', true);
  else $(`${selector} option:contains("None")`).prop('selected', true);
  $(selector).material_select();
}
