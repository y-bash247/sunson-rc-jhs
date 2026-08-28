document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("authForm");
    const name = document.getElementById("name");
    const staffId = document.getElementById("staffId");
    const scode = document.getElementById("scode");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    

    form.addEventListener("submit", (event) => {
        // Prevent default browser form processing
        event.preventDefault(); 
        
        let isValid = true;

         // 1. name field processing
         if (!name.value.trim()) {
            showError(name, "nameError", "Name is required.");
            isValid = false;
        } else if (!validateName(name.value)) {
            showError(name, "nameError", "Please enter your fullname");
            isValid = false;
        } else {
            clearError(name, "nameError");
        }

         // 2. Staff id field processing
         if (!staffId.value.trim()) {
            showError(staffId, "staffIdError", "Staff Id is required.");
            isValid = false;
        } else if (!validateStaffId(staffId.value)) {
            showError(staffId, "staffIdError", "Please enter a valid staff Id");
            isValid = false;
        } else {
            clearError(staffId, "staffIdError");
        }

        // 3. school code field processing
         if (!scode.value.trim()) {
            showError(scode, "scodeError", "Code is required.");
            isValid = false;
        } else if (!validateScode(scode.value)) {
            showError(scode, "scodeError", "Please enter a valid school code from the headteacher.");
            isValid = false;
        } else {
            clearError(scode, "scodeError");
        }

        // 4. Email field processing
        if (!email.value.trim()) {
            showError(email, "emailError", "Email is required.");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "emailError", "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(email, "emailError");
        }

        // 5. Password field processing
        if (!password.value) {
            showError(password, "passwordError", "Password is required.");
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, "passwordError", "Password must be at least 6 characters.");
            isValid = false;
        } else {
            clearError(password, "passwordError");
        }

        // 6. Confirm Password structural parity processing
        if (!confirmPassword.value) {
            showError(confirmPassword, "confirmPasswordError", "Please confirm your password.");
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "confirmPasswordError", "Passwords do not match.");
            isValid = false;
        } else {
            clearError(confirmPassword, "confirmPasswordError");
        }

        // Action when form validation checks pass
        if (isValid) {
            alert("Your Form has been submitted successfully, Thank You!");
            name.value= ""; staffId.value=""; email.value=""; password.value=""; confirmPassword.value="";
            // execution block here for background transmission processing

        
        }
    });

    // Helper: Show targeted error text and classes
    function showError(inputElement, errorId, message) {
        inputElement.classList.add("invalid");
        document.getElementById(errorId).textContent = message;
    }

    // Helper: Clear targeted error text and classes
    function clearError(inputElement, errorId) {
        inputElement.classList.remove("invalid");
        document.getElementById(errorId).textContent = "";
    }

    // Helper: Regex validation test context
    function validateEmail(emailValue) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailValue);
    }
})
