document.addEventListener('DOMContentLoaded', function () {
  const moonIcon = document.getElementById('moonIcon');
  const toggleDarkMode = document.getElementById('toggleDarkMode');
  const body = document.body;

  toggleDarkMode.addEventListener('click', function () {
    if (body.classList.contains('dark')) {
      // Switch to light mode
      body.classList.remove('dark');
      moonIcon.setAttribute('name', 'moon');
    } else {
      // Switch to dark mode
      body.classList.add('dark');
      moonIcon.setAttribute('name', 'sunny');
    }
  });
});
