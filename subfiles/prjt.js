fetch('project.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('project-section-placeholder');
    container.innerHTML = html;

    // Select the projects **after** the HTML is injected
  const items = document.querySelectorAll('.project-item');
  let current = 0;
  let interval;

  function cycleHover() {
    items.forEach((item, index) => {
      item.classList.remove('active');
      if (index === current) item.classList.add('active');
    });
    current = (current + 1) % items.length;
  }

  function startAutoCycle() {
    interval = setInterval(cycleHover, 2500);
  }

  function stopAutoCycle() {
    clearInterval(interval);
  }

  // Start the cycle initially
  cycleHover();
  startAutoCycle();

  // Pause auto cycle on hover, resume on mouse leave
  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      stopAutoCycle();
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active'); // manual hover becomes active
    });

    item.addEventListener('mouseleave', () => {
      current = index + 1; // continue from next
      startAutoCycle();
    });
  });
  });
