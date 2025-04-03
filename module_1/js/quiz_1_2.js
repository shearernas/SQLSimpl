document.addEventListener('DOMContentLoaded', function() {
    // Get all radio buttons and feedback elements
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const feedbacks = document.querySelectorAll('.feedback');
    const nextButton = document.getElementById('next-btn_3');
    
    // The correct answer ID
    const correctAnswerId = 'question3_1'; // This is the ID for "Structured Query Language"
    
    // Add event listeners to each radio button
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            // Hide all feedback messages first
            feedbacks.forEach(feedback => {
                feedback.style.display = 'none';
            });
            
            // Show the feedback for the selected option
            // Get the index of the clicked radio button
            const index = Array.from(radioButtons).indexOf(this);
            feedbacks[index].style.display = 'block';
            
            // Enable the next button if the correct answer is selected
            if (this.id === correctAnswerId) {
                nextButton.removeAttribute('disabled');
                nextButton.classList.remove('disabled');
            } else {
                nextButton.setAttribute('disabled', true);
                nextButton.classList.add('disabled');
            }
        });
    });
});