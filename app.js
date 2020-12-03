$(document).ready(function() {
    // Navbar interactivity - probably a way to simplify this by writing a function
    // to pass into click()
    $("#C-dropdown").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#C-info").slideUp();
            $("#C-info").slideToggle("slow", function () {
            });
    });

    $("#Python-dropdown").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#Python-info").slideUp();
            $("#Python-info").slideToggle("slow", function () {
            });
    });

    $("#JavaScript-dropdown").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#JavaScript-info").slideUp();
            $("#JavaScript-info").slideToggle("slow", function () {
            });
    });
    
    // Toggle Show/Hide for Multiple Divs
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