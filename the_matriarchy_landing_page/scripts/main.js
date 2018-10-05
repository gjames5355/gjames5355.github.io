$(document).ready(function () {
    $('.required').prop('required', true);
    $(".valid-email").blur(function() {
        if (isEmail($(this).val())) {
            $(this).addClass("valid-input");
        }
        if (!isEmail($(this).val())) {
            $(this).removeClass("valid-input");
        }
    });

});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
