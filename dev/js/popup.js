$(document).ready(function () {
    var firstHour = $('#first_hour'),
        firstMinute = $('#first_minute'),
        secondHour = $('#second_hour'),
        secondMinute = $('#second_minute'),
        submit = $('#submit'),
        result = $('#result'),
        successConfirm = $('.result-hidden');

    $('#timer').keypress(function (e) {
        if (e.which == 13) {
            console.log(true);
            var firstTime = (+firstHour.val() * 60) + +firstMinute.val();
            var secondTime = (+secondHour.val() * 60) + +secondMinute.val();
            result.val(+firstTime - +secondTime);

            result.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                successConfirm.fadeIn().delay(400).fadeOut();
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
            e.preventDefault();
        }
    });
});