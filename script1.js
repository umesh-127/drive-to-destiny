// Get modal, close button and body
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var body = document.body;

// Open the modal (for example, by clicking a button)
function openModal() {
    modal.classList.add("open");
    body.classList.add("modal-open");
}

// Close the modal when the user clicks on the close button
closeBtn.onclick = function() {
    closeModal();
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Close the modal when the user presses the Escape key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

// Function to close the modal and reset styles
function closeModal() {
    modal.classList.remove("open");
    body.classList.remove("modal-open");
}
