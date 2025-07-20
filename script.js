// Load skills.html into the placeholder
fetch('subfiles/skills.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('skills-section-placeholder').innerHTML = html;
  });
// Animate .skill elements on scroll


  // Load Experience section
fetch('subfiles/experience.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('experience-section-placeholder').innerHTML = html;
  });

// sidebar for phone 
  const toggleBtn = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');

  let hideTimeout;

  // Show/hide sidebar on toggle
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    resetHideTimer();
  });

  // Hide if clicked outside sidebar
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
      sidebar.classList.remove('active');
    } else {
      resetHideTimer();
    }
  });

  // Hide if no interaction for 2 sec
  function resetHideTimer() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      sidebar.classList.remove('active');
    }, 2000);
  }

const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".sidebar-nav a");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    }, {
      threshold: 0.6 // Trigger when 60% of section is visible
    });

    sections.forEach(section => {
      observer.observe(section);
    });



