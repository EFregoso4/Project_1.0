document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let feedback = document.getElementById("feedback");
    
    if (name && email && password.length >= 6) {
        feedback.style.color = "green";
        feedback.textContent = "Welcome to the White Sox Fan Club!";
    } else {
        feedback.style.color = "red";
        feedback.textContent = "Please complete all fields correctly.";
    }
});
