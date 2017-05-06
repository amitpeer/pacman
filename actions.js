var userName;

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
                $("#menuGame").show();
                stopGame();
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

        else if (clicked.is('#menuGame')) {
            $("#gameDiv").show();
        }
    });
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
    userName = $("#loginUser")[0].value;
    var password = $("#loginPass")[0].value;
    if (users[userName] == password) {
        alert("Logged in successfully");
        $("#loginDiv").hide();
        loggedIn();
    }
    else {
        alert("Bad user name or password");
    }
}

function pressedDisconnect() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        $("#welcomeLogin").show();
        $("#welcomeRegister").show();
        $("#menuRegister").show();
        $("#menuLogin").show();
        $("#welcomeDisconnect").hide();
        $("#menuGame").hide();
        $("#gameDiv").hide();
        $("#welcomeDiv").show();
        userName = "";
        $("#helloUserName").remove();
        stopGame();
    }
}


function showAbout() {
    document.getElementById("aboutModal").showModal();
    stopGame();
}

function closeAbout() {
    document.getElementById("aboutModal").close();
    if(isLoggedIn) {
        $("#gameDiv").show();
    }
    else {
        $("#welcomeDiv").show();
    }
}

function loggedIn() {
    isLoggedIn = true;
    $("#gameDiv").show();
    $("#gameSettings").show();
    $("#gameContent").hide();
    $("#menuGame").show();
    $("#menuRegister").hide();
    $("#menuLogin").hide();
    $("#helloDiv").append("<div id='helloUserName'><b> Hello " + userName + ".</b> <a id='logoutHref'" +
        " onClick='pressedDisconnect();'>     Disconnect</a></div>");
}