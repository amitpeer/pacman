jQuery(document).ready(function () {

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
        },
        messages: {}
    });
    
});