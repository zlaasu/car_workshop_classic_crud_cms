var API_URL = "https://workshopsimplecrud-uat.zlasu.org/backend/";
//var API_URL = "http://localhost:8080/backend/";
//var API_URL = "http://localhost/backend/";

jQuery.support.cors = true;

// $.ajaxSetup({
//     beforeSend: function (xhr)
//     {
//         xhr.setRequestHeader("Authorization",localStorage.getItem('token'));
//     }
// });


$( document ).ajaxError(function( event, jqxhr, settings, exception ) {
    if ( jqxhr.status== 401 ) {
        console.log("supa2");
        window.location.href = 'index.html';
    }
});

$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}