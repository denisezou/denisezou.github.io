//Define Variables

//hold random number picked by computer (held steady until a Win or Lose)
var computerChoice;
//hold user sum
var userSum;
//hold wins
var wins;
//hold losses
var losses;

//Array to hold crystal values
var crystalArray= [];

//Define function to push random values into the crystal array
function crystalpush() {
    for (var i =0; i < 4; i++) {
        var crystalValue = Math.floor(Math.random()*11+1);
        crystalArray.push(crystalValue);
    } 
}

//Call this function
crystalpush();

//Grabs the text to display on the page.
var computerChoice= $("#computer-number");
var userSum= $("#user-sum-total");
var wins = $("#wins");
var losses = $("#losses");

// initializeGame to add values only until Win or Lose, at which point you reset.
$( document ).ready(function() {
    console.log("ready!");

    function initializeGame() {

    //setting up start up scores
    let userSum=0;
    let wins=0;
    let losses=0;

    //Generate random computer number with Math.floor.math.random()
    let computerChoice = Math.floor(Math.random() * 101 + 19);

    //on clicking each crystal button, add the crystal's value to the user's score
    $("#button-1").on("click", function(){
        //each crystal value is stored in the array
            userSum += crystalArray[0];
            $("#user-sum-total").text(userSum);
                //check
                console.log("In the function, computer picks: " + computerChoice);
                console.log("In the function, user is at: " + userSum);
            //win or lose?
                if (userSum === computerChoice){
                    youWin();
                }
                else if (userSum > computerChoice){
                    youLose();
                }
})
        $("#button-2").on("click", function(){
            userSum += crystalArray[1];
            $("#user-sum-total").text(userSum);
                //check
                console.log("In the function, computer picks: " + computerChoice);
                console.log("In the function, user is at: " + userSum);
            //win/lose?
                if (userSum === computerChoice){
                    youWin();
                }
                else if (userSum > computerChoice){
                    youLose();
                }
})
        $("#button-3").on("click", function(){
            userSum += crystalArray[2];
            $("#user-sum-total").text(userSum);
                //check
                console.log("In the function, computer picks: " + computerChoice);
                console.log("In the function, user is at: " + userSum);
            //win/lose?
                if (userSum === computerChoice){
                    youWin();
                }
                else if (userSum > computerChoice){
                    youLose();
                }
})
        $("#button-4").on("click", function(){
            userSum += crystalArray[3];
            $("#user-sum-total").text(userSum);
                //check
                console.log("In the function, computer picks: " + computerChoice);
                console.log("In the function, user is at: " + userSum);
            //win/lose?
                if (userSum === computerChoice){
                    youWin();
                }
                else if (userSum > computerChoice){
                    youLose();
                }
        })

//Put the text on the screen
$("#computer-number").text(computerChoice);
$("#user-sum-total").text(userSum);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);


//Define function of winning
function youWin(){
        wins++;
//a) Display "You win!!"
        $("#wins").text("Wins: " + wins + "- You win!!");
//b) call reset
        reset();
}

//Define function of losing
function youLose(){
        losses++;
//a) Display "You lose!!"
        $("#losses").text("Losses: " + losses + "- You lose!!");
//b) call reset
        reset();
}

//Define the reset function
//when you reset, set user sum to 0, set crystal array to blank, set computer random number to new random number.

function reset () {
    crystalArray=[];
    userSum=0;

    //display the user sum
    $("#user-sum-total").text(userSum);

    //Generate random computer number with Math.floor math.random()
    var computerChoice = Math.floor(Math.random() * 101 + 19);
    //check
    console.log("In the function, computer picks: " + computerChoice);
    console.log("The user sum is " + userSum);

    //display the new computer number
    $("#computer-number").text(computerChoice);

    //call the crystal function to push random values in to the array
    crystalpush();
    }
}

initializeGame();

});