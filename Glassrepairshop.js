document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      // Close all other open dropdowns
      document.querySelectorAll('.dropdown-content.open').forEach(openContent => {
        if (openContent !== button.nextElementSibling) {
          openContent.classList.remove('open');
          const arrow = openContent.previousElementSibling.querySelector('.arrow');
          if (arrow) arrow.textContent = '▶';
        }
      });
  
      // Toggle the clicked dropdown
      const content = button.nextElementSibling;
      content.classList.toggle('open');
      const arrow = button.querySelector('.arrow');
      arrow.textContent = content.classList.contains('open') ? '▼' : '▶';
    });
  });


