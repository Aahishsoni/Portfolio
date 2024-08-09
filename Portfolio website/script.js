document.addEventListener('DOMContentLoaded', function () {
    // Get all links inside the .lowerSection
    const links = document.querySelectorAll('.lowerSection .link a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function () {
            // Uncheck the checkbox when a link is clicked to hide the menu
            document.getElementById('checkBox').checked = false;
        });
    });
});
