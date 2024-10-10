// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  const isExpanded = hamburger.classList.contains('active');
  navMenu.style.display = isExpanded ? 'flex' : 'none';
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close the menu when clicking outside
window.addEventListener('click', (e) => {
  if (!header.contains(e.target) && navMenu.style.display === 'flex') {
    hamburger.classList.remove('active');
    navMenu.style.display = 'none';
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Allow toggling the hamburger menu with keyboard
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});

// OTP Functionality (Placeholder)
function sendOTP() {
  const phoneInput = document.getElementById('phone').value;
  if (!phoneInput) {
    alert('Please enter your phone number first.');
    return;
  }
  // Implement your OTP sending logic here
  alert(`OTP sent to ${phoneInput}`);
}
