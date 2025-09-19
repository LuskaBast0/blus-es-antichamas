      document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        menuButton.addEventListener('click', function() {
          const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
          menuButton.setAttribute('aria-expanded', !isExpanded);
          mobileMenu.classList.toggle('hidden');
          hamburgerIcon.classList.toggle('hidden');
          closeIcon.classList.toggle('hidden');
        });

        // Optional: Close mobile menu when a link is clicked
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    menuButton.click();
                }
            });
        });

        // Update copyright year dynamically
        const copyright = document.querySelector('.copyright');
        if (copyright) {
            copyright.innerHTML = `&copy; ${new Date().getFullYear()} BrandName, Inc. All rights reserved.`;
        }
      });

      