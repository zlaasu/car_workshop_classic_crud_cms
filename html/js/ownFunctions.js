

$(document).ready(function(){
    $.get("sections/header.html", function(data) {
        $("#header").html(data);
    });
});

$(document).ready(function(){
    $.get("sections/footer.html", function(data) {
        $("#header").html(data);
    });
});

$(document).ready(function () {
    $("div[data-includeHTML]").each(function () {
        $(this).load($(this).attr("data-includeHTML"));
    });
});