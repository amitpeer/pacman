$().ready(function () {

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


    //Form validation

    $("#signupForm").validate({
        rules: {
            firstName: {
                required: true,
                firstLastName: true
            },
            lastName: {
                required: true,
                firstLastName: true
            },
            day: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            },
            userName: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                password: true
            }
        }
    });

    $("#signupForm").submit(function (event) {
        if($("#signupForm").valid()) {
            users[$("#userName")[0].value] = $("#password")[0].value;
            $("#registerDiv").hide();
            userName = $("#userName")[0].value;
            loggedIn();
        }
    });

    // add methods to the validator
    jQuery.validator.addMethod("password", function (value, element) {
        return this.optional(element) || /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(value);
    }, "password should be at least 8 digit and contains letter and numbers");

    jQuery.validator.addMethod("firstLastName", function (value, element) {
        return this.optional(element) || /^[a-zA-Z]*$/.test(value);
    }, "Name should contain only letters");
});

