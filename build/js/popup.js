window.onload = function () {
    var firstHour,
        firstMinute,
        secondHour,
        secondMinute,
        result,
        submit,
        copied;
    firstHour = document.getElementById('1');
    firstMinute = document.getElementById('2');
    secondHour = document.getElementById('3');
    secondMinute = document.getElementById('4');

    submit = document.getElementById('submit');
    result = document.getElementById('result');
    copied = document.getElementById('copied');


    submit.addEventListener('click', function () {
        var firstTime = (+firstHour.value * 60) + +firstMinute.value;
        var secondTime = (+secondHour.value * 60) + +secondMinute.value;
        result.value = +firstTime - +secondTime;

        result.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            copied.value = 'Copied';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    }, false);
};
