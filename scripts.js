document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    let errorMessage = "";

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === "") {
        isValid = false;
        errorMessage += "Name is required.<br>";
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Invalid email format.<br>";
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        errorMessage += "Invalid phone number format. Use 123-456-7890.<br>";
    }

    // Validate course selection
    const course = document.getElementById('course').value;
    if (course === "") {
        isValid = false;
        errorMessage += "Course selection is required.<br>";
    }

    const errorMessageElement = document.getElementById('errorMessage');
    if (isValid) {
        errorMessageElement.style.display = 'none';
        alert('Form submitted successfully!');
        // Here, you can add code to handle the form submission (e.g., send data to a server)
    } else {
        errorMessageElement.style.display = 'block';
        errorMessageElement.innerHTML = errorMessage;
    }
});
