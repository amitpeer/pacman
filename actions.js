$(document).ready(function () {
    $("#welcomeDiv").show();

    //Click event for menu items
    //Hides and shows different DIV's according to the clicked item
    $(".menuItem").click(function (e) {
        var clicked = $(e.target);
        $(".contentDiv").hide();
        if (clicked.is('#menuWelcome')) {
            $("#welcomeDiv").show();
            if (isLoggedIn) {
                $("#welcomeDisconnect").show();
                $("#welcomeLogin").hide();
                $("#welcomeRegister").hide();
            }
            else {
                $("#welcomeDisconnect").hide();
                $("#welcomeLogin").show();
                $("#welcomeRegister").show();
            }
        }
        else if (clicked.is('#menuRegister')) {
            if (!isLoggedIn) {
                $("#registerDiv").show();
            }
            else {
                $("#gameDiv").show();
            }
        }
        else if (clicked.is('#menuLogin')) {
            if (!isLoggedIn) {
                $("#loginDiv").show();
            }
            else {
                $("#gameDiv").show();
            }
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
});

var isLoggedIn = false;

//initialize users dictionary (key: user name, value: password)
var users = {};
users["a"] = "a";
users["test2017"] = "test2017";

function get(k) {
    return users[k];
}

function pressedRegister() {
    $(".contentDiv").hide();
    $("#registerDiv").show();
}

function pressedLogin() {
    $(".contentDiv").hide();
    $("#loginDiv").show();
}

function checkLogin() {
    var userName = $("#loginUser")[0].value;
    var password = $("#loginPass")[0].value;
    if (users[userName] == password) {
        isLoggedIn = true;
        alert("Logged in successfully");
        $("#loginDiv").hide();
        $("#gameDiv").show();
    }
    else {
        alert("Bad user name or password");
    }
}

function pressedDisconnect() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        $("#welcomeDisconnect").hide();
        $("#welcomeLogin").show();
        $("#welcomeRegister").show();
    }
}


function showAbout() {
    document.getElementById("aboutModal").showModal();
}

function closeAbout() {
    document.getElementById("aboutModal").close();
}