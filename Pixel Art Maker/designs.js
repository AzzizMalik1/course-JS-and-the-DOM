// Select color input
// Select size input

document.ready(function() {
  console.log('ready');
  $('#sizePicker').submit(function makeGrid(graph) {
    $('table tr').remove();

    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
      graph.preventDefault();
      for (var s = 1; s <= height; ++s) {
        $('table').append('<tr></tr>');
        for (var t = 1; t <= width; ++t) {
          $('tr').append('<td></td>');

        }
      }



      $('td').click(function addPaint() {
        const color = $('#colorPicker').val();

        if ($('td').attr('style')) {
            $('td').removeAttr('style')
        } else {
            $('td').attr('style', 'background-color:', color);
        }



      });
  });
});
