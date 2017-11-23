//These objects are the questions to be inserted into the DOM

var questionOne = {
    question: "You are approached by a frenzied Vault scientist, who yells, 'I'm going to put my quantum harmonizer in your photonic resonation chamber!' What's your response?",
    a:"A: But doctor, wouldn't that cause a parabolic destabilization of the fission singularity?",
    b:"B: Yeah? Up yours too, buddy!",
    c:"C: Say nothing, grab a nearby pipe and hit the scientist in the head to knock him out. For all you knew, he was planning to blow up the vault.",
    d:"D: Say nothing, but slip away before the scientist can continue his rant.",
    quizImg : "assets/images/scientist.jpg"
};
var questionTwo = {
    question: "While working as an intern in the Clinic, a patient with a strange infection on his foot stumbles through the door. The infection is spreading at an alarming rate, but the doctor has stepped out for a while. What do you do?",
    a:"A: Amputate the foot before the infection spreads.",
    b: "B: Scream for help.",
    c: "C: Medicate the infected area to the best of your abilities.",
    d: "D: Restrain the patient, and merely observe as the infection spreads."
};

var questionThree = {
    question: "You discover a young boy lost in the lower levels of the Vault. He's hungry and frightened, but also appears to be in possession of stolen property. What do you do?",
    a: "A: Give the boy a hug and tell him everything will be okay.",
    b: "B: Confiscate the property by force, and leave him there as punishment.",
    c:"C: Pick the boy's pocket to take the stolen property for yourself, and leave the boy to his fate.",
    d: "D: Lead the boy to safety, then turn him over to the overseer."
};

var questionFour = {
    question:"Congratulations! You made one of the Vault 101 baseball teams! Which position do you prefer?",
    a:"A: Pitcher.",
    b:"B: Catcher.",
    c:"C: Designated Hitter.",
    d:"D: None, you wish the vault had a soccer team."
};

var questionFive = {
    question: "Your grandmother invites you to tea, but you're surprised when she gives you a pistol and orders you to kill another Vault resident. What do you do?",
    a: "A: Obey your elder and kill the Vault resident with the pistol.",
    b: "B: Offer your most prized possession for the resident's life.",
    c: "C: Ask granny for a minigun instead. After all, you don't want to miss.",
    d: "D: Throw your tea in granny's face."
};

var questionSix = {
    question: "Who is indisputably the most important person in Vault 101: He who shelters us from the harshness of the atomic wasteland, and to whom we owe everything we have, including our lives?",
    a: "A: The Overseer",
    b: "B: The Overseer",
    c: "C: The Overseer",
    d: "D: The Overseer"
};

var questionArray = [ questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
var currQuestion = 0
//Make the button begin the function that runs the quiz.
$(".startGame").on("click", function() {
    $("#titleScreen").empty(); //empties the title screen div to make room for the questions
    quizGame(questionArray[currQuestion]); //this function starts the quiz with the first question in the array
    $(".questionContainer").css("display", "inline");
})

//When the game begins, javascript should clear the DOM's title page and add the first question to the existing div's.
function quizGame (question) {
    $("#questionHeader").append(question.question);
    $("#questionImg").attr("src", question.quizImg);
    $("#questionImg").css("display", "inline");
    $("#answer1").append(question.a);
    $("#answer2").append(question.b);
    $("#answer3").append(question.c);
    $("#answer4").append(question.d);

}

//After the question is displayed, a timer should appear that counts down from 30 to 0

//If the player has not clicked an answer before the timer reaches 0 or selects the wrong answer, add one to wrong answers

//If the player selects the correct answer, add one to right answers.

//Once the player selects an answer, the next question should load.

//After all questions have been answered, the DOM should change to a final screen that shows how many correct answers the player had.