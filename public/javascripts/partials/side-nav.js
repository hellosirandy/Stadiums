$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('#sportSelect').material_select();
  $('#leagueSelect').material_select();

  $('#sportSelect').change(function() {
    var url = '/stadium/' + $('#sportSelect option:selected').val();
    window.location.href = url;
  });
  $('#leagueSelect').change(function() {
    var url = '/stadium/' + $('#sportSelect').data('selected') + '/' + $('#leagueSelect option:selected').val();
    window.location.href = url;
  });

  DefaultSelect('#sportSelect');
  DefaultSelect('#leagueSelect');
});

function DefaultSelect(selector) {
  var select = $(selector).data('selected');
  if (select) $(`${selector} option:contains(${select})`).prop('selected', true);
  else $(`${selector} option:contains("None")`).prop('selected', true);
  $(selector).material_select();
}
