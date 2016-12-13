function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

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

    firstHour.onkeyup = function () {
        if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
            firstMinute.focus();
        }
    };

    firstMinute.onkeyup = function () {
        if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
            secondHour.focus();
        }
    };
    secondHour.onkeyup = function () {
        if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
            secondMinute.focus();
        }
    };


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
