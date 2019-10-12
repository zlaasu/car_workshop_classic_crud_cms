
$( document ).ajaxError(function( event, jqxhr, settings, exception ) {
    if ( jqxhr.status== 401 ) {
        console.log("supa2");
        window.location.href = 'login.html';
    }
});