"use strict";

let scores = [];
let scoreStrings = [];

const displayScores = (scores, scoreStrings) => {
// Calculate average score
let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
totalScore += scores[i];
}
const averageScore = scores.length === 0 ? 0 : totalScore / scores.length;
// Display average score
$("#avr_score").text(averageScore.toFixed(2));

// Display student scores
let output = "";
for (let i = 0; i < scoreStrings.length; i++) {
    output += scoreStrings[i] + "\n";
}
$("#scores").text(output);
};

$(document).ready(() => {
$("#add_button").click(() => {
// Get input values
const firstName = $("#first_name").val().trim();
const lastName = $("#last_name").val().trim();
const score = parseFloat($("#score").val().trim());
    // Validate input
    if (firstName === "" || lastName === "" || isNaN(score)) {
        alert("Please enter valid data for all fields.");
        return;
    }

    // Add student score to arrays
    scores.push(score);
    scoreStrings.push(lastName + ", " + firstName + ": " + score);

    // Redisplay updated data
    displayScores(scores, scoreStrings);

    // Clear input fields and set focus
    $("#first_name").val("");
    $("#last_name").val("");
    $("#score").val("");
    $("#first_name").focus();
});

$("#clear_button").click(() => {
    // Clear arrays and redisplay updated data
    scores = [];
    scoreStrings = [];
    displayScores(scores, scoreStrings);

    // Set focus on first name field
    $("#first_name").focus();
});

$("#sort_button").click(() => {
    // Sort scores and scoreStrings arrays by last name
    for (let i = 0; i < scoreStrings.length - 1; i++) {
        for (let j = i + 1; j < scoreStrings.length; j++) {
            const lastName1 = scoreStrings[i].split(", ")[0];
            const lastName2 = scoreStrings[j].split(", ")[0];
            if (lastName1.localeCompare(lastName2) > 0) {
                const tempString = scoreStrings[i];
                scoreStrings[i] = scoreStrings[j];
                scoreStrings[j] = tempString;

                const tempScore = scores[i];
                scores[i] = scores[j];
                scores[j] = tempScore;
            }
        }
    }

    // Redisplay updated data
    displayScores(scores, scoreStrings);
});

// Set focus on first name field
$("#first_name").focus();
});