document.addEventListener('DOMContentLoaded', function() {
    // Select all radio buttons
    const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
    
    // Create a modal for feedback
    const createFeedbackModal = () => {
        const modalHTML = `
        <div class="modal fade" id="feedbackModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitle"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                    </div>
                </div>
            </div>
        </div>
        `;
        
        // Append modal to body if it doesn't exist
        if (!document.getElementById('feedbackModal')) {
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalHTML;
            document.body.appendChild(modalContainer);
        }
    };

    // Show modal with feedback
    const showFeedback = (isCorrect) => {
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        if (isCorrect) {
            modalTitle.textContent = 'Correct!';
            modalBody.textContent = 'Great job! SQL stands for Structured Query Language.';
            modalTitle.classList.remove('text-danger');
            modalTitle.classList.add('text-success');
        } else {
            modalTitle.textContent = 'Incorrect';
            modalBody.textContent = 'The correct answer is: Structured Query Language (SQL).';
            modalTitle.classList.remove('text-success');
            modalTitle.classList.add('text-danger');
        }

        // Use Bootstrap's modal method to show
        const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
        feedbackModal.show();
    };

    // Add event listeners to radio buttons
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            // Check if the correct answer is selected
            const isCorrect = this.id === 'question1_3';
            
            // Show feedback modal
            createFeedbackModal();
            showFeedback(isCorrect);
        });
    });
});