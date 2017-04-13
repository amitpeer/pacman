$(document).ready(function () {
    $("#welcomeDiv").show();

    //initialize users dictionary (key: user name, value: password)
    var users = [];
    users.push({
        key: "a", value: "a"
    });
    users.push({
        key: "test2017", value:"test2017"
    });

    //Click event for menu items
    //Hides and shows different DIV's according to the clicked item
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
    

/*

    $(".welcomeButton").click(function (e) {
        var clicked = $(e.target);
        $(".contentDiv").hide();
         if (clicked.is('#regButton')) {
            $("#registerDiv").show();
        }
        else if (clicked.is('#LoginButton')) {
            $("#loginDiv").show();
        }
    });*/
    //initialize birthday input in the register form

    //Year:
});

function pressedRegister(){
    $(".contentDiv").hide();
    $("#registerDiv").show();
}
function pressedLogin(){
    $(".contentDiv").hide();
    $("#loginDiv").show();
}
function checkLogin(){

}