
// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission for demo purposes

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && subject && message) {
        alert("Thank you for your message!");
        // Here, you could add actual form submission logic (e.g., sending data to a server)
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});
  function showSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('.section-content').forEach(section => {
      section.classList.remove('animate');
      section.style.opacity = 0;
    });

    // Show the selected section with animation
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add('animate');
      section.style.opacity = 1;
    }
  }

