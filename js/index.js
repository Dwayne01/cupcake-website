
    var x = $('#mobileBtn').click(() => {
        if ( $( "#myLinks" ).first().is( ":hidden" ) ) {
            $( "#myLinks" ).slideDown( "slow" );
          } else {
            $( "#myLinks" ).slideUp( "slow" );
          }
    })


    var x = $('form > input[type="button"').click(() => {
        alert('Message sent successfully')
    })