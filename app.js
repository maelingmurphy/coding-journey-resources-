$(document).ready(function() {
    // Navbar interactivity - probably a way to simplify this by writing a function
    // to pass into click()
    $("#C-dropdown").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#C-info").hide();
            $("#C-info").show();
    });
    
    $("#Python-dropdown").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#Python-info").hide();
            $("#Python-info").show();
    });

    $("#JavaScript-dropdown").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#JavaScript-info").hide();
            $("#JavaScript-info").show();
    });
    
    // Toggle Show/Hide for Multiple Divs
    $("#C-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#C-info").hide();
            $("#C-info").show();
    });

    $("#Python-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#Python-info").hide();
            $("#Python-info").show();
    });

    $("#JavaScript-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#JavaScript-info").hide();
            $("#JavaScript-info").show();
    });

    /* EXAMPLE OF TOGGLE ANIMATION

    $("#JavaScript-button").click(function(e) {
        e.preventDefault();
            $(".options-info").not("#JavaScript-info").slideUp();
            $("#JavaScript-info").slideToggle("slow", function () {
            });
    });
    */
});
