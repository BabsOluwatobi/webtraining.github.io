// Show the alert when the page loads
window.onload = function() {
    document.getElementById("customAlert").classList.add("show");
};

// Function to close the alert
function closeAlert() {
    document.getElementById("customAlert").classList.remove("show");
}
