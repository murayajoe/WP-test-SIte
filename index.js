window.addEventListener('resize', adjustFormLayout);

function adjustFormLayout() {
    const form = document.getElementById('survey-form');

    if (window.innerWidth <= 600) {
        // Adjust the form layout for smaller screens
        form.style.padding = '10px';
    } else {
        // Restore the original form layout for larger screens
        form.style.padding = '20px';
    }
}

// Call the function to set the initial layout based on the window width
adjustFormLayout();
