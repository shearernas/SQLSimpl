document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('short-answer');
    const checkButton = document.getElementById('check-btn');
    const feedbackText = document.getElementById('feedback-text');
    const nextButton = document.getElementById('next-btn_4');
    
    checkButton.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = 'mysql';
        
        feedbackText.style.display = 'block';
        
        if (userAnswer === correctAnswer) {
            feedbackText.textContent = 'Correct! mysql tells your computer to log you into MySQL prompt, after you enter in your password for your root account. This was made possible because of the alias you created in Topic 5 Page 3.';
            feedbackText.className = 'feedback mt-2 text-success';
            nextButton.removeAttribute('disabled');
            nextButton.classList.remove('disabled');
        } else {
            feedbackText.textContent = 'Not quite right. Try again!';
            feedbackText.className = 'feedback mt-2 text-danger';
            nextButton.setAttribute('disabled', true);
            nextButton.classList.add('disabled');
        }
    });
});

//For future use: See if the formatting below could be applied to the feedback box text

/*<strong>Correct!</strong><br><code class="inline">mysql</code> tells your computer to log you into MySQL command line, after you enter in your password for your root account. This was made possible because of the alias you created in <a href="topic_5_2.htm">Topic 5 Page 3</a>.*/