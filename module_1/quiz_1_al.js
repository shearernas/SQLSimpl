document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
    console.log("Radio buttons found:", radioButtons.length);

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            console.log("Radio button clicked:", this.id);
            
            const isCorrect = this.id === 'question1_3';
            console.log("Is correct:", isCorrect);
            
            showFeedback(isCorrect);
        });
    });
    // Ensure modal exists in the DOM
    const ensureModalExists = () => {
        // Check if modal already exists
        if (document.getElementById('feedbackModal')) return;

        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = `
        <div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitle"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        // Append to body
        document.body.appendChild(modalDiv);
    };

    // Show modal with feedback
    const showFeedback = (isCorrect) => {
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        if (isCorrect) {
            modalTitle.textContent = 'Correct!';
            modalTitle.className = 'modal-title text-success';
            modalBody.textContent = 'Great job! SQL stands for Structured Query Language.';
        } else {
            modalTitle.textContent = 'Incorrect';
            modalTitle.className = 'modal-title text-danger';
            modalBody.textContent = 'The correct answer is: Structured Query Language (SQL).';
        }

        // Ensure modal is in the DOM
        ensureModalExists();

        // Create and show modal
        const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
        feedbackModal.show();
    };

    // Add event listeners to radio buttons
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            // Check if the correct answer is selected
            const isCorrect = this.id === 'question1_3';
            
            // Show feedback modal
            showFeedback(isCorrect);
        });
    });
});