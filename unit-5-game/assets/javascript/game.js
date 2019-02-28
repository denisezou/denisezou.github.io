
//rude audio
var audio = new Audio("smelly.mp3");

let wins=0;
let losses=0;

//QUIZ QUESTIONS!!!!
let myQuestions = [
    {
    question: "Which of these Friends characters are siblings?",

    answers:
        ["Ross and Rachel", "Monica and Ross", "Joey and Chandler","Phoebe and Joey"],
    
    correctAnswer: "Monica"
    },

    {
    question: "Who had an accidental pregnancy?",

    answers: ["Phoebe","Monica", "Rachel", "Janice"],

    correctAnswer: "Rachel"
    },
    {
    question: "What medical problem does Chandler Bing suffer from?",
    
    answers: ["Social anxiety", "Incontinence", "A Third Nipple", "Cancer"],

    correctAnswer: "A"
    },
    {
    question: "Where do the Friends hangout every day?",

    answers: ["Philz Coffee", "NYCoffee", "Urbanisippy", "Central Perk"],

    correctAnswer: "Central"
    },
    {
    question: "Why does Phoebe get into family-related drama in Season 1?",

    answers: ["Evil Twin", "Comedian Uncle", "Dead Wife", "Actress Daughter"],

    correctAnswer: "Evil"
    }
];

//THE RADIO BUTTONS!!!
//loop in a loop.. big thanks to my tutor, Leah Nelson.
function questions(){
    //for loop for every question
    for (i=0; i<myQuestions.length; i++){
        $("#quiz").append("<h5> " + myQuestions[i].question + "</h5>");

        //for loop for every answer option for every question
        for (j=0; j<myQuestions[i].answers.length; j++){
        $("#quiz").append("<label> <input type='radio' name= " 
        + myQuestions[i].question + " value=" + myQuestions[i].answers[j] 
        +  " </input>" + myQuestions[i].answers[j] + "</label>");
        
        }}
    }

//check how many Qs user got right
function results(){

    placeholderCorrect= $("myQuestions[i].correctAnswer").val();
    placeholderUser= $("radioReader[i]").val();

    console.log(radioReader);
    console.log(placeholderCorrect);
    console.log(placeholderUser);
//OOPS!! My arrays holding the correct answers and the user's answers are undefined- my game doesn't completely work!

    for (i=0; i<myQuestions.length; i++){
        if (placeholderCorrect = placeholderUser){
            wins++
        }else{
            losses++
        }
        }
        $("#results").show();
        $("#results").append("<h5> Correct: " + wins + " / Incorrect: " + losses + "</h5>");
    }


//empty array to push in the answers selected by user
let radioReader = [];

//the names of the radio buttons for each Q
let nameArray = ["Which", "Who", "What", "Where", "Why"];

//push the answers in the radio buttons checked off by user into the radioReader array
function pushtoArray(){

    let placeholder= $( "input[type=radio][name="+ nameArray[i] +"]:checked" ).val();
    for (i=0; i<nameArray.length; i++){
    radioReader.push(placeholder);
    }
    //call the function that checks the results
    results();
}



//start it up!!
start();


// set timer to off
let timerRunning = false;
let time=0;

//define start function
function start() {
        //quiz starts off hidden
        $("#quiz").hide();
        //on click event
        $("#start").on("click", function(){
            //hide the start button
            $("#start").hide();
            //show the quiz container
            $("#quiz").show();
            //call the function that makes the radio buttons
            questions();

            //set interval
            if (!timerRunning) {
                intervalId = setInterval(count, 1000);
                timerRunning = true;
            }
            //start the timer
            count();
        })
        //on clicking the submit button
        $("#submit").click(function(){
            //stop the app
            stop();
            })
    }


function stop() {
        //clear out quiz
        $("#quiz").hide();
        //show the wins/losses div
        $("#results").show();

        pushtoArray();

        //play rude music
        audio.play();

        //clearInterval stops the count here and set the timer to not be running.
        clearInterval(intervalId);
        timerRunning = false;
}

//timer for 30 seconds
//  Variable that will hold our setInterval that runs the timer
var intervalId;

//set timer (count, 1000) <- 1 sec
// Use setInterval to start the count here and set the clock to running.


function count() {

//increment time by 1sec
    time++;

    // Use the variable you just created to show the converted time in the "timer" div.
    $("#timer").text(time + " sec");

    //end it
    if (time ==30) {
        stop();

    }
}
