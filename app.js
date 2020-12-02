$(document).ready(function() {
    // all custom jQuery will go here
    $("#C-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#C-info").slideUp();
            $("#C-info").slideToggle("slow", function () {
            });
    });

    $("#Python-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#Python-info").slideUp();
            $("#Python-info").slideToggle("slow", function () {
            });
    });

    $("#JavaScript-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#JavaScript-info").slideUp();
            $("#JavaScript-info").slideToggle("slow", function () {
            });
    });
});