$(document).ready(function() {
  var $albumCell = $('.albumCell');
  $albumCell.height(parseInt($albumCell.eq(0).width()) / 1.414);

  var cellWidth = parseFloat($albumCell.eq(0).width());
  var cellHeight = parseFloat($albumCell.eq(0).height());

  $('.cellContent').each(function(index) {
    var width = $(this).width(), height = $(this).height();
    if (width < height * 1.414) {
      $(this).width('auto');
      $(this).height(cellHeight);
      $(this).css('margin-left', (cellWidth - parseFloat($(this).width())) / 2);
    }
    else {
      $(this).width(cellWidth);
      $(this).height('auto');
      $(this).css('margin-top', (cellHeight - parseFloat($(this).height())) / 2);
    }
    // console.log(height);
  });
});
