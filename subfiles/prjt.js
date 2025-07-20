fetch('project.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('project-section-placeholder');
    container.innerHTML = html;

    // Select the projects **after** the HTML is injected
  const projects = document.querySelectorAll('.project');

  let hoverLoopTimeout;
  let isPaused = false;
  let resumeTimer;
  const idleDelay = 3000; // 3 seconds of inactivity

  function applyHoverEffect(project, index) {
    setTimeout(() => {
      if (isPaused) return;
      project.classList.add('hover-effect');
      setTimeout(() => {
        project.classList.remove('hover-effect');
      }, 2000);
    }, 1500 * index);
  }

  function runHoverEffectLoop() {
    if (isPaused) return;

    projects.forEach((project, index) => {
      applyHoverEffect(project, index);
    });

    const totalCycleTime = 1500 * projects.length;
    hoverLoopTimeout = setTimeout(runHoverEffectLoop, totalCycleTime);
  }

  // Start the loop
  runHoverEffectLoop();

  function pauseAutoLoop() {
    clearTimeout(hoverLoopTimeout);
    clearTimeout(resumeTimer);
    isPaused = true;

    resumeTimer = setTimeout(() => {
      isPaused = false;
      runHoverEffectLoop();
    }, idleDelay);
  }

  // When hovering over a project, pause auto and let real hover take over
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      pauseAutoLoop();
      project.classList.add('hover-effect');
    });

    project.addEventListener('mouseleave', () => {
      project.classList.remove('hover-effect');
    });

    project.addEventListener('mousemove', pauseAutoLoop);
  });

  // Resume auto if mouse is inactive globally
  let lastMouseMove = Date.now();
  document.addEventListener('mousemove', () => {
    lastMouseMove = Date.now();
    pauseAutoLoop();
  });
  });
