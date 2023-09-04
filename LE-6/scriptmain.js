function validateForm() {

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const password1 = document.getElementById("exampleInputPassword1").value;
    const password2 = document.getElementById("exampleInputPassword2").value;
    const dob = document.getElementById("dob").value;

    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;


    
    if (!nameRegex.test(fullName)) {
        window.alert("Full Name is invalid. It should contain alphabetic characters and spaces only, with a minimum length of 3 characters.");
        return;
    }

    if (!emailRegex.test(email)) {
        window.alert("Email Address is invalid. Please enter a valid email format (e.g., 'user@example.com').");
        return;
    }

    if (!passwordRegex.test(password1)) {
        window.alert("Password is invalid. It must be at least 8 characters long and contain a mix of letters and numbers.");
        return;
    }

    if (password1 !== password2) {
        window.alert("Passwords do not match. Please confirm your password.");
        return;
    }

    if (!dobRegex.test(dob)) {
        window.alert("Date of Birth is invalid. Please enter a valid date in the format 'YYYY-MM-DD'.");
        return;
    }

    //age validation.
    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();
    if (age < 18) {
        alert("You must be at least 18 years old to sign up.");
        return;
    }

    //form submission.
    alert("Form submitted successfully!");
}