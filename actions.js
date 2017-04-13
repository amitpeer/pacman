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
    var d = new Date();
    var n = d.getFullYear();
    for (var i = n; i >= 1900; i--) {
        var opt = new Option();
        opt.value = opt.text = i;
        $('[name="year"]')[0].add(opt);
    }
    //Month:
    for (var i = 12; i >= 1; i--) {
        var opt = new Option();
        opt.value = opt.text = i;
        $('[name="month"]')[0].add(opt);
    }
    //Day:
    for (var i = 31; i >= 1; i--) {
        var opt = new Option();
        opt.value = opt.text = i;
        $('[name="day"]')[0].add(opt);
    }
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