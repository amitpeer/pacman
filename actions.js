$(document).ready(function () {
    $("#welcomeDiv").show();

    $(".menuItem").click(function (e) {
        var clicked = $(e.target);
        $(".contentDiv").hide();
        if (clicked.is('#menuWelcome')) {
            $("#welcomeDiv").show();
        }
        else if (clicked.is('#menuRegister')) {
            $("#registerDiv").show();
        }
        else if (clicked.is('#menuLogin')) {
            $("#loginDiv").show();
        }
    });
});