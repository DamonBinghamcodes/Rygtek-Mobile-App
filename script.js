// Apple-style welcome page interactions
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
      
      // Get Started button with Apple-style feedback
      const getStartedBtn = document.querySelector('.get-started-btn');
      if (getStartedBtn) {
          getStartedBtn.addEventListener('click', function () {
              // Add Apple-style loading state
              this.style.opacity = '0.7';
              this.textContent = 'Loading...';
              
              // Navigate after brief delay for feedback
              setTimeout(() => {
                  window.location.href = 'disclaimer.html';
              }, 200);
          });
      }
      
      // Logo interaction
      const logo = document.querySelector('.logo');
      if (logo) {
          logo.addEventListener('click', function() {
              // Apple-style bounce feedback
              this.style.transform = 'scale(0.95)';
              setTimeout(() => {
                  this.style.transform = 'scale(1)';
              }, 150);
          });
      }
      
      // Apple-style reduced motion support
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          // Disable animations for users who prefer reduced motion
          const style = document.createElement('style');
          style.textContent = `
              *, *::before, *::after {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
              }
          `;
          document.head.appendChild(style);
      }
  }
});

// Disclaimer page functionality
document.addEventListener('DOMContentLoaded', function () {
  // Check if we're on the disclaimer page
  if (window.location.pathname.includes('disclaimer.html')) {
      
      // Logo click functionality
      const logo = document.querySelector('.logo');
      if (logo) {
          logo.addEventListener('click', function() {
              // Return to welcome page
              window.location.href = 'index.html';
          });
      }
      
      // Add loading states to buttons for better UX
      const agreeBtn = document.querySelector('.agree-btn');
      const disagreeBtn = document.querySelector('.disagree-btn');
      
      if (agreeBtn) {
          agreeBtn.addEventListener('click', function() {
              // Add loading state
              this.style.opacity = '0.7';
              this.textContent = 'Loading...';
          });
      }
      
      if (disagreeBtn) {
          disagreeBtn.addEventListener('click', function() {
              this.style.opacity = '0.7';
              this.textContent = 'Going back...';
          });
      }
  }
});

// Navigation functions for disclaimer page
function goBack() {
  // Apple-style smooth transition back to welcome
  window.location.href = 'index.html';
}

function proceedToApp() {
  // Proceed to main menu with smooth transition
  window.location.href = 'main-menu.html';
}

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
  if (window.location.pathname.includes('disclaimer.html')) {
      // ESC key goes back
      if (event.key === 'Escape') {
          goBack();
      }
      // Enter key agrees (only if agree button is focused)
      if (event.key === 'Enter' && document.activeElement.classList.contains('agree-btn')) {
          proceedToApp();
      }
  }
});

// Main Menu functionality
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('main-menu.html')) {
      
      // Logo click functionality
      const logo = document.querySelector('.logo');
      if (logo) {
          logo.addEventListener('click', function() {
              // Apple-style feedback
              this.style.transform = 'scale(0.95)';
              setTimeout(() => {
                  this.style.transform = 'scale(1)';
              }, 150);
          });
      }
      
      // Add loading states to feature cards
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
          card.addEventListener('click', function() {
              // Add loading state
              this.style.opacity = '0.7';
              const cardContent = this.querySelector('.card-content h3');
              const originalText = cardContent.textContent;
              cardContent.textContent = 'Loading...';
              
              // Restore after short delay if navigation fails
              setTimeout(() => {
                  this.style.opacity = '1';
                  cardContent.textContent = originalText;
              }, 2000);
          });
      });
  }
});

// Navigation functions
function goBack() {
  window.location.href = 'disclaimer.html';
}

function goHome() {
  window.location.href = 'index.html';
}

function navigateTo(page) {
  window.location.href = page;
}

// Hamburger menu functionality
function toggleMenu() {
  const menu = document.getElementById('hamburgerMenu');
  const isOpen = menu.classList.contains('open');
  
  if (isOpen) {
      menu.classList.remove('open');
  } else {
      menu.classList.add('open');
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('hamburgerMenu');
  const menuBtn = document.querySelector('.menu-btn');
  
  if (menu && !menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove('open');
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
  if (window.location.pathname.includes('main-menu.html')) {
      // ESC key closes menu or goes back
      if (event.key === 'Escape') {
          const menu = document.getElementById('hamburgerMenu');
          if (menu.classList.contains('open')) {
              toggleMenu();
          } else {
              goBack();
          }
      }
  }
});

// Working Load Limit Calculator functionality
document.addEventListener('DOMContentLoaded', function () {
  // Only run WLL logic on the WLL page
  if (window.location.pathname.includes('working-load-limit.html')) {
      initializeWLLCalculator();
  }
});

function initializeWLLCalculator() {
  const slingType = document.getElementById('sling-type');
  const config = document.getElementById('configuration');
  const size = document.getElementById('chain-size');
  const output = document.getElementById('wll-output');

  // Configuration options for each sling type
  const configOptions = {
      chain: ['Straight', 'Adjustable', 'Reeved', '2 Leg @ 60°', '2 Leg @ 90°', '2 Leg @ 120°', 'Basket 1 Leg', 'Basket 2 Leg'],
      wire: ['Straight', 'Choke', 'Basket'],
      round: ['Vertical', 'Choke', 'Basket']
  };

  // WLL data structure (same as your existing data)
  const wllData = {
      chain: {
          6: { "Straight": 1.4, "Adjustable": 1.4, "Reeved": 1.1, "2 Leg @ 60°": 2.4, "2 Leg @ 90°": 2.0, "2 Leg @ 120°": 1.4, "Basket 1 Leg": 1.8, "Basket 2 Leg": 3.2 },
          7: { "Straight": 1.9, "Adjustable": 1.9, "Reeved": 1.4, "2 Leg @ 60°": 3.3, "2 Leg @ 90°": 2.7, "2 Leg @ 120°": 1.9, "Basket 1 Leg": 2.5, "Basket 2 Leg": 4.3 },
          8: { "Straight": 2.5, "Adjustable": 2.5, "Reeved": 1.9, "2 Leg @ 60°": 4.3, "2 Leg @ 90°": 3.5, "2 Leg @ 120°": 2.5, "Basket 1 Leg": 3.3, "Basket 2 Leg": 5.6 },
          10: { "Straight": 4.0, "Adjustable": 4.0, "Reeved": 3.0, "2 Leg @ 60°": 6.9, "2 Leg @ 90°": 5.6, "2 Leg @ 120°": 4.0, "Basket 1 Leg": 5.6, "Basket 2 Leg": 9.0 },
          13: { "Straight": 6.7, "Adjustable": 6.7, "Reeved": 5.0, "2 Leg @ 60°": 11.6, "2 Leg @ 90°": 9.4, "2 Leg @ 120°": 6.7, "Basket 1 Leg": 8.7, "Basket 2 Leg": 15.1 },
          16: { "Straight": 10.0, "Adjustable": 10.0, "Reeved": 7.5, "2 Leg @ 60°": 17.3, "2 Leg @ 90°": 14.0, "2 Leg @ 120°": 10.0, "Basket 1 Leg": 13.0, "Basket 2 Leg": 22.5 },
          20: { "Straight": 16.0, "Adjustable": 16.0, "Reeved": 12.0, "2 Leg @ 60°": 27.7, "2 Leg @ 90°": 22.6, "2 Leg @ 120°": 16.0, "Basket 1 Leg": 20.8, "Basket 2 Leg": 36.0 },
          22: { "Straight": 19.0, "Adjustable": 19.0, "Reeved": 14.0, "2 Leg @ 60°": 32.9, "2 Leg @ 90°": 26.8, "2 Leg @ 120°": 19.0, "Basket 1 Leg": 24.7, "Basket 2 Leg": 42.8 },
          26: { "Straight": 26.5, "Adjustable": 26.5, "Reeved": 20.0, "2 Leg @ 60°": 45.8, "2 Leg @ 90°": 37.4, "2 Leg @ 120°": 26.5, "Basket 1 Leg": 34.5, "Basket 2 Leg": 59.6 },
          32: { "Straight": 40.0, "Adjustable": 40.0, "Reeved": 30.0, "2 Leg @ 60°": 69.2, "2 Leg @ 90°": 56.4, "2 Leg @ 120°": 40.0, "Basket 1 Leg": 52.0, "Basket 2 Leg": 90.0 }
      },
      wire: {
          6: { "Straight": 1.2, "Choke": 1.0, "Basket": 2.4 },
          8: { "Straight": 1.6, "Choke": 1.3, "Basket": 3.2 },
          10: { "Straight": 2.5, "Choke": 2.0, "Basket": 5.0 },
          13: { "Straight": 4.0, "Choke": 3.2, "Basket": 8.0 },
          16: { "Straight": 6.3, "Choke": 5.0, "Basket": 12.6 },
          20: { "Straight": 9.8, "Choke": 7.8, "Basket": 19.6 },
          22: { "Straight": 12.5, "Choke": 10.0, "Basket": 25.0 },
          26: { "Straight": 16.0, "Choke": 13.0, "Basket": 32.0 },
          32: { "Straight": 25.0, "Choke": 20.0, "Basket": 50.0 }
      },
      round: {
          "violet (1t)": { "Vertical": 1.0, "Choke": 0.8, "Basket": 2.0 },
          "green (2t)": { "Vertical": 2.0, "Choke": 1.6, "Basket": 4.0 },
          "yellow (3t)": { "Vertical": 3.0, "Choke": 2.4, "Basket": 6.0 },
          "grey (4t)": { "Vertical": 4.0, "Choke": 3.2, "Basket": 8.0 },
          "red (5t)": { "Vertical": 5.0, "Choke": 4.0, "Basket": 10.0 },
          "brown (6t)": { "Vertical": 6.0, "Choke": 4.8, "Basket": 12.0 },
          "blue (8t)": { "Vertical": 8.0, "Choke": 6.4, "Basket": 16.0 },
          "orange (10t)": { "Vertical": 10.0, "Choke": 8.0, "Basket": 20.0 }
      }
  };

  // Event listeners for the dropdowns
  slingType.addEventListener('change', function() {
      resetDownstream(config, size, output);
      const type = this.value;

      if (configOptions[type]) {
          populateDropdown(config, configOptions[type]);
          config.disabled = false;
      }
  });

  config.addEventListener('change', function() {
      resetDownstream(size, output);
      const type = slingType.value;
      const typeData = wllData[type];

      if (typeData) {
          const sizeOptions = Object.keys(typeData);
          populateDropdown(size, sizeOptions, type === 'round');
          size.disabled = false;
      }
  });

  size.addEventListener('change', function() {
      calculateWLL();
  });

  // Helper functions
  function resetDownstream(...elements) {
      elements.forEach(element => {
          if (element.tagName === 'SELECT') {
              element.innerHTML = '<option value="">Select an option</option>';
              element.disabled = true;
          } else {
              element.textContent = '--';
              element.classList.remove('loading');
          }
      });
  }

  function populateDropdown(dropdown, options, isRound = false) {
      dropdown.innerHTML = '<option value="">Select an option</option>';
      
      options.forEach(option => {
          const optElement = document.createElement('option');
          optElement.value = option;
          optElement.textContent = isRound ? option : `${option}${typeof option === 'number' ? ' mm' : ''}`;
          dropdown.appendChild(optElement);
      });
  }

  function calculateWLL() {
      const type = slingType.value;
      const conf = config.value;
      const sz = size.value;

      // Add loading state
      output.classList.add('loading');
      output.textContent = '...';

      // Simulate brief calculation delay for better UX
      setTimeout(() => {
          const result = wllData[type]?.[sz]?.[conf];
          output.classList.remove('loading');
          
          if (result) {
              output.textContent = result.toString();
              // Add slight animation
              output.style.transform = 'scale(1.1)';
              setTimeout(() => {
                  output.style.transform = 'scale(1)';
              }, 200);
          } else {
              output.textContent = 'N/A';
          }
      }, 300);
  }
}

// Navigation functions for WLL page
function goBack() {
  window.location.href = 'main-menu.html';
}

function goHome() {
  window.location.href = 'index.html';
}