/**
 * Function to check the user's selected answer and display feedback.
 */
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the user's answer with the correct answer and update feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button to invoke checkAnswer on click
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
