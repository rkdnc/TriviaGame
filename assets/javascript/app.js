//These objects are the questions to be inserted into the DOM
$(document).ready(function () {
    var questionOne = {
        question: 'You are approached by a frenzied Vault scientist, who yells, "I am going to put my quantum harmonizer in your photonic resonation chamber!" What is your response?',
        a: ["A: But doctor, wouldn't that cause a parabolic destabilization of the fission singularity?", true],
        b: ["B: Yeah? Up yours too, buddy!", false],
        c: ["C: Say nothing, grab a nearby pipe and hit the scientist in the head to knock him out. For all you knew, he was planning to blow up the vault.", false],
        d: ["D: Say nothing, but slip away before the scientist can continue his rant.", false],
        quizImg: "assets/images/scientist.jpg"
    };
    var questionTwo = {
        question: "While working as an intern in the Clinic, a patient with a strange infection on his foot stumbles through the door. The infection is spreading at an alarming rate, but the doctor has stepped out for a while. What do you do?",
        a: ["A: Amputate the foot before the infection spreads.", false],
        b: ["B: Scream for help.", false],
        c: ["C: Medicate the infected area to the best of your abilities.", false],
        d: ["D: Restrain the patient, and merely observe as the infection spreads.", true],
        quizImg: "assets/images/doctor.jpg"
    };

    var questionThree = {
        question: "You discover a young boy lost in the lower levels of the Vault. He's hungry and frightened, but also appears to be in possession of stolen property. What do you do?",
        a: ["A: Give the boy a hug and tell him everything will be okay.", false],
        b: ["B: Confiscate the property by force, and leave him there as punishment.", false],
        c: ["C: Pick the boy's pocket to take the stolen property for yourself, and leave the boy to his fate.", false],
        d: ["D: Lead the boy to safety, then turn him over to the overseer.", true],
        quizImg: "assets/images/lost.jpg"
    };

    var questionFour = {
        question: "Congratulations! You made one of the Vault 101 baseball teams! Which position do you prefer?",
        a: ["A: Pitcher.", false],
        b: ["B: Catcher.", false],
        c: ["C: Designated Hitter.", true],
        d: ["D: None, you wish the vault had a soccer team.", false],
        quizImg: "assets/images/baseball.jpg"
    };

    var questionFive = {
        question: "Your grandmother invites you to tea, but you're surprised when she gives you a pistol and orders you to kill another Vault resident. What do you do?",
        a: ["A: Obey your elder and kill the Vault resident with the pistol.", true],
        b: ["B: Offer your most prized possession for the resident's life.", false],
        c: ["C: Ask granny for a minigun instead. After all, you don't want to miss.", false],
        d: ["D: Throw your tea in granny's face.", false],
        quizImg: "assets/images/granny.jpg"

    };

    var questionSix = {
        question: "Who is indisputably the most important person in Vault 101: He who shelters us from the harshness of the atomic wasteland, and to whom we owe everything we have, including our lives?",
        a: ["A: The Overseer", true],
        b: ["B: The Overseer", true],
        c: ["C: The Overseer", true],
        d: ["D: The Overseer", true],
        quizImg: "assets/images/overseer.jpg"
    };

    var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
    var currQuestion = 0
    //Make the button begin the function that runs the quiz.
    $("#startGame").on("click", function () {
        $("#titleScreen").empty(); //empties the title screen div to make room for the questions
        quizGame(questionArray[currQuestion]); //this function starts the quiz with the first question in the array
        $(".questionContainer").addClass("active").removeClass("inactive");
        currQuestion++
    })
    $("#nextQuestion").on("click", function () {
        quizGame(questionArray[currQuestion]);
        // $("#nextQuestion").toggleClass("inactive");
        $("#result").text("")
        $(".questionContainer").addClass("active").removeClass("inactive");
        $("#nextQuestion").addClass("inactive").removeClass("active");
        currQuestion++
        if(currQuestion >= 6){
            alert("end");
        }
        

    })
    var wrongAnswers = 0;
    var correctAnswers = 0;
    //When the game begins, javascript should clear the DOM's title page and add the first question to the existing div's.
    function quizGame(question) {
        $("#questionHeader").text(question.question);
        $("#questionImg").attr("src", question.quizImg);
        $("#questionImg").addClass("active").removeClass("inactive");
        var answerA = question.a;
        var answerB = question.b;
        var answerC = question.c;
        var answerD = question.d;
        $("#answer1").text(question.a[0]).attr("data-arrayId", question.a[1].toString());
        $("#answer2").text(question.b[0]).attr("data-arrayId", question.b[1].toString());
        $("#answer3").text(question.c[0]).attr("data-arrayId", question.c[1].toString());
        $("#answer4").text(question.d[0]).attr("data-arrayId", question.d[1].toString());
        // setInterval(timer, 1000);
        $(".answers").on("click", function () {
            var playerChoice = $(this).attr("data-arrayId");
            $(".questionContainer").addClass("inactive").removeClass("active");
            if (playerChoice == "false") {
                $("#result").text("You're wrong");
            };
            if (playerChoice == "true") {
                $("#result").text("You're right");
            };
            $("#nextQuestion").addClass("active").removeClass("inactive");
            console.log(currQuestion);
        });

    };
    var timeLeft = 30;
    //After the question is displayed, a timer should appear that counts down from 30 to 0
    function timer() {
        if (timeLeft > 1) {
            timeLeft--
            $("#timer").html(timeLeft);
        } else
            $("#timer").html("Time's Up!");
    }
})

//If the player has not clicked an answer before the timer reaches 0 or selects the wrong answer, add one to wrong answers

//If the player selects the correct answer, add one to right answers.

//Once the player selects an answer, the next question should load.

//After all questions have been answered, the DOM should change to a final screen that shows how many correct answers the player had.