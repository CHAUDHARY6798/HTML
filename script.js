document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const answers = {
            q1: quizForm.querySelector('input[name="q1"]:checked'),
            // Add more answers for other questions
            q2: quizForm.querySelector('input[name="q2"]:checked'),
            // Add more answers for other questions
        };

        let numCorrect = 0;

        // Check answers
        Object.keys(answers).forEach(function(question) {
            if (answers[question] && answers[question].value === 'a') {
                answers[question].parentElement.classList.add('correct');
                numCorrect++;
            } else if (answers[question]) {
                answers[question].parentElement.classList.add('error');
            }
        });

        // Retrieve student information
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;

        // Display results with student details
        const percentage = ((numCorrect / Object.keys(answers).length) * 100).toFixed(2);
        resultsDiv.innerHTML = `
            <p>Name: ${name}</p>
            <p>Gender: ${gender}</p>
            <p>Age: ${age}</p>
            <p>Number of correct answers: ${numCorrect}</p>
            <p>Percentage of correct answers: ${percentage}%</p>
        `;
    });
});
