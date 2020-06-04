

$('.hidden').slideDown(1000);



$(':input[type="submit"]').prop('disabled', true);
$('input[type="text"]').keyup(function() {
   if($(this).val().length !== 0) {
      $(':input[type="submit"]').prop('disabled', false);
   }
});

