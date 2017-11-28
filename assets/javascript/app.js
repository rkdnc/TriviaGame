//These objects are the questions to be inserted into the DOM
$(document).ready(function () {
    var questionOne = {
        question: 'You are approached by a frenzied Vault scientist, who yells, "I am going to put my quantum harmonizer in your photonic resonation chamber!" What is your response?',
        a: ["But doctor, wouldn't that cause a parabolic destabilization of the fission singularity?", true],
        b: ["Yeah? Up yours too, buddy!", false],
        c: ["Say nothing, grab a nearby pipe and hit the scientist in the head to knock him out. For all you knew, he was planning to blow up the vault.", false],
        d: ["Say nothing, but slip away before the scientist can continue his rant.", false],
        quizImg: "assets/images/scientist.jpg"
    };
    var questionTwo = {
        question: "While working as an intern in the Clinic, a patient with a strange infection on his foot stumbles through the door. The infection is spreading at an alarming rate, but the doctor has stepped out for a while. What do you do?",
        a: ["Amputate the foot before the infection spreads.", false],
        b: ["Scream for help.", false],
        c: ["Medicate the infected area to the best of your abilities.", false],
        d: ["Restrain the patient, and merely observe as the infection spreads.", true],
        quizImg: "assets/images/doctor.jpg"
    };

    var questionThree = {
        question: "You discover a young boy lost in the lower levels of the Vault. He's hungry and frightened, but also appears to be in possession of stolen property. What do you do?",
        a: ["Give the boy a hug and tell him everything will be okay.", false],
        b: ["Confiscate the property by force, and leave him there as punishment.", false],
        c: ["Pick the boy's pocket to take the stolen property for yourself, and leave the boy to his fate.", false],
        d: ["Lead the boy to safety, then turn him over to the overseer.", true],
        quizImg: "assets/images/lost.jpg"
    };

    var questionFour = {
        question: "Congratulations! You made one of the Vault 101 baseball teams! Which position do you prefer?",
        a: ["Pitcher.", false],
        b: ["Catcher.", false],
        c: ["Designated Hitter.", true],
        d: ["None, you wish the vault had a soccer team.", false],
        quizImg: "assets/images/baseball.jpg"
    };

    var questionFive = {
        question: "Your grandmother invites you to tea, but you're surprised when she gives you a pistol and orders you to kill another Vault resident. What do you do?",
        a: ["Obey your elder and kill the Vault resident with the pistol.", true],
        b: ["Offer your most prized possession for the resident's life.", false],
        c: ["Ask granny for a minigun instead. After all, you don't want to miss.", false],
        d: ["Throw your tea in granny's face.", false],
        quizImg: "assets/images/granny.jpg"

    };
    var questionSix = {
        question: "Old Mr. Abernathy has locked himself in his quarters again, and you've been ordered to get him out. How do you proceed?",
        a: ["Use a bobby pin to pick the lock on the door.", false],
        b: ["Trade a Vault hoodlum for his cherry bomb and blow open the lock.", false],
        c: ["Go to the armory, retrieve a laser pistol, and blow the lock off.", true],
        d: ["Walk away and let the old coot rot.", false],
        quizImg: "assets/images/door.jpg"
    };
    var questionSeven = {
        question: "Oh, no! You've been exposed to radiation, and a mutated hand has grown out of your stomach! What's the best course of treatment?",
        a: ["A bullet to the brain", false],
        b: ["Large doses of anti-mutagen agent.", false],
        c: ["Prayer.", false],
        d: ["Removal of the mutated tissue with a precision laser.", true],
        quizImg: "assets/images/hand.jpg"
    };
    var questionEight = {
        question: "A fellow Vault 101 resident is in possession of a Grognak the Barbarian comic book, issue number 1. You want it. What's the best way to obtain it?",
        a: ["Trade the comic book for one of your own valuable possessions", true],
        b: ["Steal the comic book at gunpoint.", false],
        c: ["Sneak into the resident's quarters, and steal the comic book from his desk.", false],
        d: ["Slip some knock out drops into the resident's Nuka-Cola, and then take the book when he's asleep.", false],
        quizImg: "assets/images/comic.jpg"
    };
    var questionNine = {
        question: "You decide it would be fun to play a prank on your father. You enter his private restroom when no one is looking, and....",
        a: ["Loosen some bolts on some pipes. When the sink is turned on, the room will flood.", false],
        b: ["Put a firecracker in the toilet.", false],
        c: ["Break into the locked medicine cabinet and replace his high blood pressure medication with sugar pills.", false],
        d: ["Manipulate the wattage on his razor, so he'll get an electric shock next time he shaves.", true],
        quizimg: "assets/images/prank.jpg"
    }
    var questionTen = {
        question: "Who is indisputably the most important person in Vault 101: He who shelters us from the harshness of the atomic wasteland, and to whom we owe everything we have, including our lives?",
        a: ["The Overseer", true],
        b: ["The Overseer", true],
        c: ["The Overseer", true],
        d: ["The Overseer", true],
        quizImg: "assets/images/overseer.jpg"
    };

    var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
    var currQuestion = 0
    var timer;
    //Make the button begin the function that runs the quiz.
    $("#startGame").on("click", function () {
        $("#titleScreen").empty(); //empties the title screen div to make room for the questions
        quizGame(questionArray[currQuestion]); //this function starts the quiz with the first question in the array
        $(".questionContainer").addClass("active").removeClass("inactive");
        currQuestion++
        $("#timer").removeClass("inactive").addClass("active");
        
    })
    $("#nextQuestion").on("click", function () {
        quizGame(questionArray[currQuestion]);
        // $("#nextQuestion").toggleClass("inactive");
        $("#result").text("")
        $(".questionContainer").addClass("active").removeClass("inactive");
        $("#nextQuestion").addClass("inactive").removeClass("active");
        $("#timer").removeClass("inactive").addClass("active");        
        currQuestion++;
        timeLeft = 15;


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
        $("#answer4").text(question.d[0]).attr("data-arrayId", question.d[1].toString())
        timer = setInterval(timerStart, 1000);


    }


    // };
    var timeLeft = 15;
    var playerChoice;
    //After the question is displayed, a timer should appear that counts down from 15 to 0
    function timerStart() {
        
        if (timeLeft > 0) {
            timeLeft--
            $("#timer").html(timeLeft);
            
        }
            if(timeLeft === 0){
                clearInterval(timer);
                $("#result").text("You're out of time!");
                wrongAnswers++;
                console.log("Wrong: " + wrongAnswers);
                console.log("Right: " + correctAnswers);
                $(".questionContainer").addClass("inactive").removeClass("active");
                $("#nextQuestion").addClass("active").removeClass("inactive");
                $("#timer").removeClass("active").addClass("inactive");
                
                
            }
            
        
    };
    $(".answers").on("click", function () {
        $("#timer").text("");
        clearInterval(timer);
        setInterval(timerStart, 1000);
        timeLeft = 15;
        $("#timer").addClass("inactive").removeClass("active");        
        if (currQuestion < 11) {
            $("#timer").removeClass("inactive").addClass("active");
            playerChoice = $(this).attr("data-arrayId");
            $(".questionContainer").addClass("inactive").removeClass("active");
            if (playerChoice == "false") {
                $("#result").text("You're wrong");
                wrongAnswers++;
                console.log("Wrong: " + wrongAnswers);
                console.log("Right: " + correctAnswers);
            };
            if (playerChoice == "true") {
                $("#result").text("You're right");
                correctAnswers++;
                console.log("Right: " + correctAnswers);
                console.log("Wrong: " + wrongAnswers);


            };
            $("#nextQuestion").addClass("active").removeClass("inactive");
            if (currQuestion === 10) {
                $(".questionContainer").addClass("inactive").removeClass("active");
                $("#questionImg").attr("src", "assets/images/goat.jpg");
                $("#result").text("You got " + wrongAnswers + " incorrect.");
                console.log("Wrong: " + wrongAnswers);
                console.log("Right: " + correctAnswers);
                $("#nextQuestion").addClass("inactive").removeClass("active");
            };
        }
        else {
            $(".questionContainer").addClass("inactive").removeClass("active");
            $("#questionImg").attr("src", "assets/images/goat.jpg");
            $("#result").text("You got " + wrongAnswers + " incorrect.");
            console.log("Wrong: " + wrongAnswers);
            console.log("Right: " + correctAnswers);
        }
    })
})

//If the player has not clicked an answer before the timer reaches 0 or selects the wrong answer, add one to wrong answers

//If the player selects the correct answer, add one to right answers.

//Once the player selects an answer, the next question should load.

//After all questions have been answered, the DOM should change to a final screen that shows how many correct answers the player had.