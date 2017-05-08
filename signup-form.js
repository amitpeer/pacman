$().ready(function () {
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
                required: true,
                userNameTaken: true
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

    // add methods to the validator
    jQuery.validator.addMethod("password", function (value, element) {
        return this.optional(element) || /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(value);
    }, "password should be at least 8 digit and contains letter and numbers");

    jQuery.validator.addMethod("firstLastName", function (value, element) {
        return this.optional(element) || /^[a-zA-Z]*$/.test(value);
    }, "Name should contain only letters");

    jQuery.validator.addMethod("userNameTaken", function (user) {
        return (user in users) == false;
    }, "username already taken.");

    $("#signupForm").submit(function (event) {
        if ($("#signupForm").valid()) {
            users[$("#userName")[0].value] = $("#password")[0].value;
            $("#registerDiv").hide();
            userName = $("#userName")[0].value;
            loggedIn();
        }
    });

    $(function () {
        //populate our years select box
        for (i = new Date().getFullYear(); i > 1900; i--) {
            $('#years').append($('<option />').val(i).html(i));
        }

        //"listen" for change events
        $('#years').change(function () {
            updateNumberOfMonths();
        });
    });

    function updateNumberOfMonths() {
        //populate our months select box
        for (i = 1; i < 13; i++) {
            $('#months').append($('<option />').val(i).html(i));
        }

        $('#months').change(function () {
            updateNumberOfDays();
        });
    }

//function to update the days based on the current values of month and year
    function updateNumberOfDays() {
        month = $('#months').val();
        year = $('#years').val();
        days = daysInMonth(month, year);

        for (i = 1; i < days + 1; i++) {
            $('#days').append($('<option />').val(i).html(i));
        }
    }

//helper function
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

});

