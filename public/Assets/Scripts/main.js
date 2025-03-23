document.addEventListener('DOMContentLoaded', function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelectorAll('aside a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - headerHeight - 28; // Adjust 10px as needed
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }); 
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("sidebar-toggle");
    const toggleIcon = toggleButton.querySelector("i");

    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-collapsed");

      if (sidebar.classList.contains("sidebar-collapsed")) {
        toggleIcon.classList.remove("fa-chevron-right");
        toggleIcon.classList.add("fa-chevron-left");
      } else {
        toggleIcon.classList.remove("fa-chevron-left");
        toggleIcon.classList.add("fa-chevron-right");
      }
    });
    