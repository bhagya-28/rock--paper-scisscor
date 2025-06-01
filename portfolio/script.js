document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  if (name && email && message) {
    status.textContent = "Message sent! I'll get back to you soon.";
    status.style.color = 'green';
    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = 'red';
  }
});
