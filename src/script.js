// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get all section elements
  const sections = {
    about: document.getElementById('about'),
    experience: document.getElementById('experience'),
    projects: document.getElementById('projects')
  };

  // Get all section buttons
  const sectionButtons = document.querySelectorAll('[data-section]');

  // Function to set active section
  const setSection = (sectionName) => {
    // Hide all sections
    Object.values(sections).forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = sections[sectionName];
    if (selectedSection) {
      selectedSection.style.display = '';
    }

    // Update button states
    sectionButtons.forEach(button => {
      if (button.dataset.section === sectionName) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  };

  // Add click event listeners to all section buttons
  sectionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const sectionName = e.target.dataset.section;
      setSection(sectionName);
    });
  });

  // Initialize with the first section (about)
  setSection('about');
});
