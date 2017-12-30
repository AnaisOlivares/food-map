// seleccion
$(document).ready(function() {
  $('#filterInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#ul li').filter(function() {
      $(this).toggle($(this).html().toLowerCase().indexOf(value) > -1);
    });
  });
});
