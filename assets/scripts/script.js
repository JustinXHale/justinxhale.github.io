// Check for saved user preference in localStorage
const savedTheme = localStorage.getItem('theme');
const body = document.body;

// Apply saved theme or default to system preference
if (savedTheme) {
  body.classList.add(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
} else {
  body.classList.add('light-mode');
}

// Toggle button functionality
document.getElementById('toggle-button').addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode'); // Save preference
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode'); // Save preference
  }
});
