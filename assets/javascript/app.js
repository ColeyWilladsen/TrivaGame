// Make our variables global to the runtime of our application
var time = 300;
var userScore = 0;
var clockRunning = false;



$(document).ready(function () {
    $(".followup").hide();

    $('input[type=radio][name=optradio]').change(function () {
        start();

        if (typeof $('.quest1 input:radio:checked').val() != 'undefined') {
            $(".quest2").show();
        }
        if (typeof $('.quest2 input:radio:checked').val() != 'undefined') {
            $(".quest3").show();
        }
        if (typeof $('.quest3 input:radio:checked').val() != 'undefined') {
            $(".quest4").show();
        }
        if (typeof $('.quest4 input:radio:checked').val() != 'undefined') {
            $(".quest5").show();
        }
        if (typeof $('.quest5 input:radio:checked').val() != 'undefined') {
            $(".quest6").show();
        }
        if (typeof $('.quest6 input:radio:checked').val() != 'undefined') {
            $(".quest7").show();
        }
        if (typeof $('.quest7 input:radio:checked').val() != 'undefined') {
            $(".quest8").show();
        }
        if (typeof $('.quest8 input:radio:checked').val() != 'undefined') {
            $(".quest9").show();
        }
        if (typeof $('.quest9 input:radio:checked').val() != 'undefined') {
            $(".quest10").show();
        }
       
    });
    
    $(".btn").click(function () {
        gradeQuiz();
    });
});



//functions that start and stop clock 
function start() {

    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function stop() {

    clearInterval(intervalId);

}

function count() {

    time--;
    var converted = timeConverter(time);
    $(".card-title").text(converted);

    if (time == 0){
        gradeQuiz()
    }

}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function gradeQuiz() {

    $(".text-center").hide();
    $(".card-text").hide();
    stop();

    if (typeof $('.quest1 input:radio:checked').val() != 'undefined') {
        userScore = parseInt($('.quest1 input:radio:checked').val())
    }

    if (typeof $('.quest2 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest2 input:radio:checked').val())
    }

    if (typeof $('.quest3 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest3 input:radio:checked').val())
    }

    if (typeof $('.quest4 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest4 input:radio:checked').val())
    }

    if (typeof $('.quest5 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest5 input:radio:checked').val())
    }

    if (typeof $('.quest6 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest6 input:radio:checked').val())
    }

    if (typeof $('.quest7 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest7 input:radio:checked').val())
    }

    if (typeof $('.quest8 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest8 input:radio:checked').val())
    }

    if (typeof $('.quest9 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest9 input:radio:checked').val())
    }

    if (typeof $('.quest10 input:radio:checked').val() != 'undefined') {
        userScore = userScore + parseInt($('.quest10 input:radio:checked').val())
    }


    $(".card-title").text("You scored " + userScore + " out of 10")
    $(".btn").text("Play Again")

}
