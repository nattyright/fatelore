
$( function() {

  if (localStorage.getItem('disclaimer') != 1) {
    $( function() {
        $( "#dialog-message" ).dialog({
          modal: true,
          buttons: {
            Ok: function() {
              $( this ).dialog( "close" );
              localStorage.setItem('disclaimer', 1)
            }
          }
        });
      } );    
  }



});





