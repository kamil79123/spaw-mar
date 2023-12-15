$( "#values-button1" ).on( "click", function() {
    $('#values-button1').addClass('values-button1');
    $('#values-button2').removeClass('values-button2');
    $('#values-button3').removeClass('values-button3');
  } );
  $( "#values-button2" ).on( "click", function() {
    $('#values-button1').removeClass('values-button1');
    $('#values-button2').addClass('values-button2');
    $('#values-button3').removeClass('values-button3');
  } );
  $( "#values-button3" ).on( "click", function() {
    $('#values-button1').removeClass('values-button1');
    $('#values-button2').removeClass('values-button2');
    $('#values-button3').addClass('values-button3');
  } );