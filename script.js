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
      chainGrade80: ['Straight Sling', 'Adjustable Sling', 'Reeved Sling', '2-Leg @ 60°', '2-Leg @ 90°', '2-Leg @ 120°', 'Reeved Sling Max 60°', 'Basket 1 Leg Max 60°', 'Basket 2 Leg Max 60°'],
      chainGrade100: ['Straight Sling', 'Adjustable Sling', 'Reeved Sling', '2-Leg @ 60°', '2-Leg @ 90°', '2-Leg @ 120°', 'Reeved Sling Max 60°', 'Basket 1 Leg Max 60°', 'Basket 2 Leg Max 60°'],
      wire: ['Straight', 'Choke', 'Basket'],
      round: ['Vertical', 'Choke', 'Basket', '30°', '60°', '90°', '120°', '60° 2-Leg', '60° Choke']
  };

  // Complete WLL data from your industry charts
  const wllData = {
      // Grade 80 Chain data from first image
      chainGrade80: {
          6: { "Straight Sling": 1.1, "Adjustable Sling": 1.1, "Reeved Sling": 0.8, "2-Leg @ 60°": 1.9, "2-Leg @ 90°": 1.6, "2-Leg @ 120°": 1.1, "Reeved Sling Max 60°": 1.4, "Basket 1 Leg Max 60°": 1.4, "Basket 2 Leg Max 60°": 2.5 },
          7: { "Straight Sling": 1.5, "Adjustable Sling": 1.5, "Reeved Sling": 1.1, "2-Leg @ 60°": 2.6, "2-Leg @ 90°": 2.1, "2-Leg @ 120°": 1.5, "Reeved Sling Max 60°": 2.0, "Basket 1 Leg Max 60°": 2.0, "Basket 2 Leg Max 60°": 3.4 },
          8: { "Straight Sling": 2.0, "Adjustable Sling": 2.0, "Reeved Sling": 1.5, "2-Leg @ 60°": 3.5, "2-Leg @ 90°": 2.8, "2-Leg @ 120°": 2.0, "Reeved Sling Max 60°": 2.6, "Basket 1 Leg Max 60°": 2.6, "Basket 2 Leg Max 60°": 4.5 },
          10: { "Straight Sling": 3.2, "Adjustable Sling": 3.2, "Reeved Sling": 2.4, "2-Leg @ 60°": 5.5, "2-Leg @ 90°": 4.5, "2-Leg @ 120°": 3.2, "Reeved Sling Max 60°": 4.2, "Basket 1 Leg Max 60°": 4.2, "Basket 2 Leg Max 60°": 7.2 },
          13: { "Straight Sling": 5.3, "Adjustable Sling": 5.3, "Reeved Sling": 4.0, "2-Leg @ 60°": 9.2, "2-Leg @ 90°": 7.5, "2-Leg @ 120°": 5.3, "Reeved Sling Max 60°": 6.9, "Basket 1 Leg Max 60°": 6.9, "Basket 2 Leg Max 60°": 11.9 },
          16: { "Straight Sling": 8.0, "Adjustable Sling": 8.0, "Reeved Sling": 6.0, "2-Leg @ 60°": 13.8, "2-Leg @ 90°": 11.3, "2-Leg @ 120°": 8.0, "Reeved Sling Max 60°": 10.4, "Basket 1 Leg Max 60°": 10.4, "Basket 2 Leg Max 60°": 18.0 },
          20: { "Straight Sling": 12.5, "Adjustable Sling": 12.5, "Reeved Sling": 9.4, "2-Leg @ 60°": 21.6, "2-Leg @ 90°": 17.6, "2-Leg @ 120°": 12.5, "Reeved Sling Max 60°": 16.3, "Basket 1 Leg Max 60°": 16.3, "Basket 2 Leg Max 60°": 28.1 },
          22: { "Straight Sling": 15.0, "Adjustable Sling": 15.0, "Reeved Sling": 11.3, "2-Leg @ 60°": 26.0, "2-Leg @ 90°": 21.2, "2-Leg @ 120°": 15.0, "Reeved Sling Max 60°": 19.5, "Basket 1 Leg Max 60°": 19.5, "Basket 2 Leg Max 60°": 33.8 },
          26: { "Straight Sling": 21.2, "Adjustable Sling": 21.2, "Reeved Sling": 15.9, "2-Leg @ 60°": 36.7, "2-Leg @ 90°": 29.9, "2-Leg @ 120°": 21.2, "Reeved Sling Max 60°": 27.6, "Basket 1 Leg Max 60°": 27.6, "Basket 2 Leg Max 60°": 47.7 },
          32: { "Straight Sling": 31.5, "Adjustable Sling": 31.5, "Reeved Sling": 23.6, "2-Leg @ 60°": 54.5, "2-Leg @ 90°": 44.4, "2-Leg @ 120°": 31.5, "Reeved Sling Max 60°": 41.0, "Basket 1 Leg Max 60°": 41.0, "Basket 2 Leg Max 60°": 70.9 }
      },
      
      // Grade 100 Chain data from second image
      chainGrade100: {
          6: { "Straight Sling": 1.4, "Adjustable Sling": 1.4, "Reeved Sling": 1.1, "2-Leg @ 60°": 2.4, "2-Leg @ 90°": 2.0, "2-Leg @ 120°": 1.4, "Reeved Sling Max 60°": 1.8, "Basket 1 Leg Max 60°": 1.8, "Basket 2 Leg Max 60°": 3.2 },
          7: { "Straight Sling": 1.9, "Adjustable Sling": 1.9, "Reeved Sling": 1.4, "2-Leg @ 60°": 3.3, "2-Leg @ 90°": 2.7, "2-Leg @ 120°": 1.9, "Reeved Sling Max 60°": 2.5, "Basket 1 Leg Max 60°": 2.5, "Basket 2 Leg Max 60°": 4.3 },
          8: { "Straight Sling": 2.5, "Adjustable Sling": 2.5, "Reeved Sling": 1.9, "2-Leg @ 60°": 4.3, "2-Leg @ 90°": 3.5, "2-Leg @ 120°": 2.5, "Reeved Sling Max 60°": 3.3, "Basket 1 Leg Max 60°": 3.3, "Basket 2 Leg Max 60°": 5.6 },
          10: { "Straight Sling": 4.0, "Adjustable Sling": 4.0, "Reeved Sling": 3.0, "2-Leg @ 60°": 6.9, "2-Leg @ 90°": 5.6, "2-Leg @ 120°": 4.0, "Reeved Sling Max 60°": 5.2, "Basket 1 Leg Max 60°": 5.2, "Basket 2 Leg Max 60°": 9.0 },
          13: { "Straight Sling": 6.7, "Adjustable Sling": 6.7, "Reeved Sling": 5.0, "2-Leg @ 60°": 11.6, "2-Leg @ 90°": 9.4, "2-Leg @ 120°": 6.7, "Reeved Sling Max 60°": 8.7, "Basket 1 Leg Max 60°": 8.7, "Basket 2 Leg Max 60°": 15.1 },
          16: { "Straight Sling": 10.0, "Adjustable Sling": 10.0, "Reeved Sling": 7.5, "2-Leg @ 60°": 17.3, "2-Leg @ 90°": 14.1, "2-Leg @ 120°": 10.0, "Reeved Sling Max 60°": 13.0, "Basket 1 Leg Max 60°": 13.0, "Basket 2 Leg Max 60°": 22.5 },
          20: { "Straight Sling": 16.0, "Adjustable Sling": 16.0, "Reeved Sling": 12.0, "2-Leg @ 60°": 27.7, "2-Leg @ 90°": 22.6, "2-Leg @ 120°": 16.0, "Reeved Sling Max 60°": 20.8, "Basket 1 Leg Max 60°": 20.8, "Basket 2 Leg Max 60°": 36.0 },
          22: { "Straight Sling": 19.0, "Adjustable Sling": 19.0, "Reeved Sling": 14.3, "2-Leg @ 60°": 32.9, "2-Leg @ 90°": 26.8, "2-Leg @ 120°": 19.0, "Reeved Sling Max 60°": 24.7, "Basket 1 Leg Max 60°": 24.7, "Basket 2 Leg Max 60°": 42.8 },
          26: { "Straight Sling": 26.5, "Adjustable Sling": 26.5, "Reeved Sling": 19.9, "2-Leg @ 60°": 45.8, "2-Leg @ 90°": 37.4, "2-Leg @ 120°": 26.5, "Reeved Sling Max 60°": 34.5, "Basket 1 Leg Max 60°": 34.5, "Basket 2 Leg Max 60°": 59.6 },
          32: { "Straight Sling": 40.0, "Adjustable Sling": 40.0, "Reeved Sling": 30.0, "2-Leg @ 60°": 69.2, "2-Leg @ 90°": 56.4, "2-Leg @ 120°": 40.0, "Reeved Sling Max 60°": 52.0, "Basket 1 Leg Max 60°": 52.0, "Basket 2 Leg Max 60°": 90.0 }
      },

      // Wire rope data (existing data)
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

      // Round sling data from third image - expanded with all configurations
      round: {
          "Violet (1t)": { "Vertical": 1.0, "Choke": 0.8, "Basket": 2.0, "30°": 1.9, "60°": 1.7, "90°": 1.4, "120°": 1.0, "60° 2-Leg": 1.7, "60° Choke": 1.4 },
          "Green (2t)": { "Vertical": 2.0, "Choke": 1.6, "Basket": 4.0, "30°": 3.8, "60°": 3.4, "90°": 2.8, "120°": 2.0, "60° 2-Leg": 3.4, "60° Choke": 2.8 },
          "Yellow (3t)": { "Vertical": 3.0, "Choke": 2.4, "Basket": 6.0, "30°": 5.7, "60°": 5.1, "90°": 4.2, "120°": 3.0, "60° 2-Leg": 5.1, "60° Choke": 4.2 },
          "Grey (4t)": { "Vertical": 4.0, "Choke": 3.2, "Basket": 8.0, "30°": 7.6, "60°": 6.9, "90°": 5.6, "120°": 4.0, "60° 2-Leg": 6.8, "60° Choke": 5.6 },
          "Red (5t)": { "Vertical": 5.0, "Choke": 4.0, "Basket": 10.0, "30°": 9.5, "60°": 8.6, "90°": 7.0, "120°": 5.0, "60° 2-Leg": 8.5, "60° Choke": 7.0 },
          "Brown (6t)": { "Vertical": 6.0, "Choke": 4.8, "Basket": 12.0, "30°": 11.4, "60°": 10.3, "90°": 8.4, "120°": 6.0, "60° 2-Leg": 10.2, "60° Choke": 8.4 },
          "Blue (8t)": { "Vertical": 8.0, "Choke": 6.4, "Basket": 16.0, "30°": 15.2, "60°": 13.8, "90°": 11.2, "120°": 8.0, "60° 2-Leg": 13.6, "60° Choke": 11.2 },
          "Orange (10t)": { "Vertical": 10.0, "Choke": 8.0, "Basket": 20.0, "30°": 19.0, "60°": 17.3, "90°": 14.1, "120°": 10.0, "60° 2-Leg": 17.0, "60° Choke": 14.0 }
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
          
          if (isRound) {
              optElement.textContent = option;
          } else {
              optElement.textContent = typeof option === 'number' ? `${option} mm` : option;
          }
          
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

// AU/NZ Rigging Standards Tips - Fixed Randomization
const quickReferenceTips = [
  // Set 1 - Safety Standards
  [
      { title: "AS/NZS 4991", content: "Follow Australian lifting standards" },
      { title: "Pre-Use Inspection", content: "Daily visual check mandatory" },
      { title: "Competent Person", content: "RIIHAN301A qualification required" },
      { title: "SWL vs WLL", content: "WLL is preferred AU/NZ term" }
  ],
  
  // Set 2 - Chain Standards
  [
      { title: "Grade T(8) vs V(10)", content: "V(10) = 25% higher than T(8)" },
      { title: "AS 2321 Standard", content: "Australian chain sling standard" },
      { title: "Proof Load Test", content: "2x WLL Grade T, 2.5x WLL Grade V" },
      { title: "Chain Marking", content: "Grade, size, maker must be visible" }
  ],
  
  // Set 3 - Angle Factors
  [
      { title: "60° Sling Angle", content: "Load factor 1.15 (87% efficient)" },
      { title: "45° Sling Angle", content: "Load factor 1.41 (71% efficient)" },
      { title: "30° Minimum", content: "Never less than 30° included angle" },
      { title: "Basket Advantage", content: "Doubles capacity if radius OK" }
  ],
  
  // Set 4 - Wire Rope
  [
      { title: "AS 3775 Standard", content: "Wire rope sling requirements" },
      { title: "Safety Factor", content: "Minimum 5:1 for wire rope" },
      { title: "D/d Ratio", content: "Min 6:1 for eye splices" },
      { title: "Discard Rule", content: "10% broken wires in one lay" }
  ],
  
  // Set 5 - Synthetic Slings
  [
      { title: "AS 4497 Standard", content: "Synthetic sling requirements" },
      { title: "Temperature Range", content: "Polyester: -40°C to +100°C" },
      { title: "UV Protection", content: "Cover protects core from sun" },
      { title: "Chemical Check", content: "Verify compatibility first" }
  ],
  
  // Set 6 - Testing
  [
      { title: "Annual Testing", content: "AS 2550 requires yearly test" },
      { title: "NATA Approved", content: "Use accredited test facilities" },
      { title: "Test Certificate", content: "Must be available on site" },
      { title: "Failed Equipment", content: "Red quarantine tags mandatory" }
  ]
];

// Simple, reliable randomization
function getRandomTips() {
  // Generate a truly random index
  const randomIndex = Math.floor(Math.random() * quickReferenceTips.length);
  console.log('Selected tip set:', randomIndex); // Debug log
  return quickReferenceTips[randomIndex];
}

// Populate tips function
function populateQuickReference() {
  const referenceGrid = document.querySelector('.reference-grid');
  if (!referenceGrid) {
      console.log('Reference grid not found'); // Debug log
      return;
  }
  
  // Get random tips
  const selectedTips = getRandomTips();
  console.log('Populating tips:', selectedTips); // Debug log
  
  // Clear existing content
  referenceGrid.innerHTML = '';
  
  // Add new tips
  selectedTips.forEach((tip, index) => {
      const tipElement = document.createElement('div');
      tipElement.className = 'reference-item';
      tipElement.innerHTML = `
          <strong>${tip.title}</strong>
          <span>${tip.content}</span>
      `;
      referenceGrid.appendChild(tipElement);
  });
  
  // Add refresh button
  addRefreshButton();
}

// Add refresh button
function addRefreshButton() {
  const quickRefContainer = document.querySelector('.quick-reference');
  if (!quickRefContainer) return;
  
  // Remove existing button
  const existingButton = quickRefContainer.querySelector('.refresh-btn');
  if (existingButton) existingButton.remove();
  
  const refreshButton = document.createElement('button');
  refreshButton.className = 'refresh-btn';
  refreshButton.innerHTML = `
      <i class="fas fa-sync-alt"></i>
      Show Different Tips
  `;
  
  refreshButton.addEventListener('click', () => {
      console.log('Refresh button clicked'); // Debug log
      const icon = refreshButton.querySelector('i');
      icon.style.animation = 'spin 0.6s ease';
      
      setTimeout(() => {
          populateQuickReference();
          icon.style.animation = '';
      }, 300);
  });
  
  quickRefContainer.appendChild(refreshButton);
}

// Initialize tips when WLL calculator loads
function initializeWLLCalculator() {
  console.log('Initializing WLL calculator with tips'); // Debug log
  
  // Populate tips first
  populateQuickReference();
  
  // Your existing WLL calculator code here...
  const slingType = document.getElementById('sling-type');
  // ... rest of your existing code
}

// Angle & Dimensions Calculator functionality
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('angle-dimensions.html')) {
      initializeAngleCalculator();
  }
});

function initializeAngleCalculator() {
  console.log('Initializing Angle & Dimensions calculator');
  
  const lengthInput = document.getElementById('length');
  const heightInput = document.getElementById('height');
  const diagonalInput = document.getElementById('diagonal');
  const angleResult = document.getElementById('angle-result');
  const loadFactorResult = document.getElementById('load-factor');
  const angleSafety = document.getElementById('angle-safety');

  // Track which field the user is currently editing
  let activeField = null;
  let isCalculating = false;

  // Add focus/blur listeners to track active field
  [lengthInput, heightInput, diagonalInput].forEach(input => {
      input.addEventListener('focus', () => {
          activeField = input.id;
      });
      
      input.addEventListener('blur', () => {
          activeField = null;
      });
      
      // Use 'input' event for real-time updates, but be smart about it
      input.addEventListener('input', debounce(calculateAnglesAndDimensions, 300));
      
      // Use 'change' event for when user finishes editing
      input.addEventListener('change', calculateAnglesAndDimensions);
  });

  // Debounce function to prevent too frequent calculations
  function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
          const later = () => {
              clearTimeout(timeout);
              func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      };
  }

  function calculateAnglesAndDimensions() {
      // Prevent recursive calculations
      if (isCalculating) return;
      isCalculating = true;

      // Get current values - only use non-empty values
      let length = lengthInput.value !== '' ? parseFloat(lengthInput.value) : null;
      let height = heightInput.value !== '' ? parseFloat(heightInput.value) : null;
      let diagonal = diagonalInput.value !== '' ? parseFloat(diagonalInput.value) : null;

      // Count non-null values
      const validValues = [length, height, diagonal].filter(val => val !== null && val > 0).length;

      // Need at least 2 values to calculate
      if (validValues < 2) {
          resetResults();
          isCalculating = false;
          return;
      }

      // Only auto-calculate the missing field if user isn't actively editing it
      // and if we have exactly 2 values
      if (validValues === 2) {
          
          if (length !== null && height !== null && (diagonal === null || activeField !== 'diagonal')) {
              // Calculate diagonal (sling length) from length and height
              const halfBase = length / 2;
              const calculatedDiagonal = Math.sqrt((halfBase * halfBase) + (height * height));
              
              // Only update if user isn't editing diagonal field
              if (activeField !== 'diagonal') {
                  diagonalInput.value = calculatedDiagonal.toFixed(2);
                  diagonal = calculatedDiagonal;
              }
              
          } else if (diagonal !== null && height !== null && (length === null || activeField !== 'length')) {
              // Calculate length from diagonal and height
              if (diagonal > height) { // Validation: diagonal must be longer than height
                  const halfBase = Math.sqrt((diagonal * diagonal) - (height * height));
                  const calculatedLength = halfBase * 2;
                  
                  // Only update if user isn't editing length field
                  if (activeField !== 'length') {
                      lengthInput.value = calculatedLength.toFixed(2);
                      length = calculatedLength;
                  }
              }
              
          } else if (diagonal !== null && length !== null && (height === null || activeField !== 'height')) {
              // Calculate height from diagonal and length
              const halfBase = length / 2;
              if (diagonal > halfBase) { // Validation: diagonal must be longer than half base
                  const calculatedHeight = Math.sqrt((diagonal * diagonal) - (halfBase * halfBase));
                  
                  // Only update if user isn't editing height field
                  if (activeField !== 'height') {
                      heightInput.value = calculatedHeight.toFixed(2);
                      height = calculatedHeight;
                  }
              }
          }
      }

      // Calculate angles and load factors if we have length and height
      if (length !== null && length > 0 && height !== null && height > 0) {
          const halfBase = length / 2;
          
          // Calculate the angle from vertical for each sling leg
          const angleFromVerticalRad = Math.atan(halfBase / height);
          
          // The included angle between the two slings
          const includedAngleRad = 2 * angleFromVerticalRad;
          const includedAngleDeg = includedAngleRad * (180 / Math.PI);
          
          // Display the angle
          angleResult.textContent = includedAngleDeg.toFixed(1);
          
          // Calculate load factor based on angle
          const loadFactor = calculateLoadFactor(includedAngleDeg);
          loadFactorResult.textContent = loadFactor.toFixed(2);
          
          // Update safety indicator
          updateSafetyIndicator(includedAngleDeg);
          
          // Add animation effect
          if (activeField === null) { // Only animate when not actively typing
              angleResult.style.transform = 'scale(1.1)';
              setTimeout(() => {
                  angleResult.style.transform = 'scale(1)';
              }, 200);
          }
          
      } else {
          resetResults();
      }

      isCalculating = false;
  }

  function calculateLoadFactor(angleDegrees) {
      // Load factor calculation based on sling angle
      const angleRad = angleDegrees * (Math.PI / 180);
      const halfAngleRad = angleRad / 2;
      
      // Load factor = 1 / cos(half angle from vertical)
      const loadFactor = 1 / Math.cos(halfAngleRad);
      
      return loadFactor;
  }

  function updateSafetyIndicator(angleDegrees) {
      const safetyElement = document.getElementById('angle-safety');
      
      // Clear existing classes
      safetyElement.className = 'angle-safety';
      
      if (angleDegrees >= 60 && angleDegrees <= 90) {
          safetyElement.classList.add('safe');
          safetyElement.innerHTML = '<i class="fas fa-check-circle"></i> SAFE - Optimal angle range';
      } else if (angleDegrees >= 45 && angleDegrees < 60) {
          safetyElement.classList.add('caution');
          safetyElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> CAUTION - Higher sling loads';
      } else if (angleDegrees >= 30 && angleDegrees < 45) {
          safetyElement.classList.add('warning');
          safetyElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> WARNING - Very high sling loads';
      } else if (angleDegrees < 30 && angleDegrees > 0) {
          safetyElement.classList.add('danger');
          safetyElement.innerHTML = '<i class="fas fa-times-circle"></i> DANGER - Never use below 30°';
      } else if (angleDegrees > 120) {
          safetyElement.classList.add('warning');
          safetyElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> WARNING - Angle too wide';
      } else {
          safetyElement.classList.remove('safe', 'caution', 'warning', 'danger');
          safetyElement.innerHTML = '<span class="safety-indicator">Enter values to check safety</span>';
      }
  }

  function resetResults() {
      angleResult.textContent = '--';
      loadFactorResult.textContent = '--';
      
      const safetyElement = document.getElementById('angle-safety');
      safetyElement.className = 'angle-safety';
      safetyElement.innerHTML = '<span class="safety-indicator">Enter values to check safety</span>';
  }

  // Enhanced clear button
  function addClearButton() {
      const calculatorContainer = document.querySelector('.calculator-container');
      if (!calculatorContainer || calculatorContainer.querySelector('.clear-btn')) return;

      const clearButton = document.createElement('button');
      clearButton.className = 'clear-btn';
      clearButton.innerHTML = '<i class="fas fa-eraser"></i> Clear All';
      
      clearButton.addEventListener('click', () => {
          // Clear all inputs
          lengthInput.value = '';
          heightInput.value = '';
          diagonalInput.value = '';
          
          // Reset active field tracking
          activeField = null;
          
          // Reset results
          resetResults();
          
          // Focus on first input
          lengthInput.focus();
      });

      calculatorContainer.appendChild(clearButton);
  }

  // Add clear button
  addClearButton();

  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
      // Clear all with Ctrl+R or Cmd+R (prevent default page refresh)
      if ((e.ctrlKey || e.metaKey) && e.key === 'r' && window.location.pathname.includes('angle-dimensions.html')) {
          e.preventDefault();
          document.querySelector('.clear-btn').click();
      }
  });
}

// Load Weight Calculator functionality
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('load-weight.html')) {
      initializeLoadWeightCalculator();
  }
});

function initializeLoadWeightCalculator() {
  console.log('Initializing Load Weight calculator');
  
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const lengthInput = document.getElementById('length');
  const materialSelect = document.getElementById('material');
  const weightResult = document.getElementById('weight-result');
  const weightKg = document.getElementById('weight-kg');
  const volumeResult = document.getElementById('volume-result');
  const densityDisplay = document.getElementById('density-display');
  const materialInfo = document.getElementById('materialInfo');
  
  let currentUnit = 'm'; // Default unit

  // Material density database (kg/m³)
  const materialDatabase = {
      // Metals
      'steel-mild': {
          density: 7850,
          name: 'Mild Steel',
          properties: 'High strength, magnetic, corrosive',
          notes: 'Most common structural steel. Check for sharp edges and coating.'
      },
      'steel-stainless': {
          density: 8000,
          name: 'Stainless Steel 316',
          properties: 'Corrosion resistant, non-magnetic',
          notes: 'Heavier than mild steel. Often used in marine/food applications.'
      },
      'aluminium': {
          density: 2700,
          name: 'Aluminium',
          properties: 'Lightweight, corrosion resistant',
          notes: 'Light but can be brittle. Check for sharp edges from machining.'
      },
      'copper': {
          density: 8960,
          name: 'Copper',
          properties: 'Excellent conductor, malleable',
          notes: 'Very heavy. Often in coils or sheets that can shift during lift.'
      },
      'brass': {
          density: 8500,
          name: 'Brass',
          properties: 'Corrosion resistant, malleable',
          notes: 'Heavy alloy. Check for lead content in older brass items.'
      },
      'bronze': {
          density: 8800,
          name: 'Bronze',
          properties: 'Strong, corrosion resistant',
          notes: 'Dense material. Often used for bushings and marine hardware.'
      },
      'cast-iron': {
          density: 7200,
          name: 'Cast Iron',
          properties: 'Brittle, good compression strength',
          notes: 'Can crack under shock loads. Use soft slings to prevent damage.'
      },
      'lead': {
          density: 11340,
          name: 'Lead',
          properties: 'Very heavy, soft, toxic',
          notes: 'Extremely heavy! Requires special handling. Health hazard - use PPE.'
      },
      'zinc': {
          density: 7140,
          name: 'Zinc',
          properties: 'Corrosion resistant, brittle',
          notes: 'Moderate weight. Often used for galvanizing or die casting.'
      },
      'titanium': {
          density: 4500,
          name: 'Titanium',
          properties: 'High strength-to-weight ratio',
          notes: 'Expensive material. Lighter than steel but very strong.'
      },

      // Construction Materials
      'concrete-normal': {
          density: 2400,
          name: 'Normal Concrete',
          properties: 'High compression, low tension',
          notes: 'Heavy and brittle. Use spreader bars to prevent cracking.'
      },
      'concrete-reinforced': {
          density: 2500,
          name: 'Reinforced Concrete',
          properties: 'Steel reinforced, very strong',
          notes: 'Heavier due to rebar. Sharp edges possible from exposed steel.'
      },
      'concrete-lightweight': {
          density: 1800,
          name: 'Lightweight Concrete',
          properties: 'Insulating, reduced weight',
          notes: 'More fragile than normal concrete. Handle with care.'
      },
      'brick-common': {
          density: 1800,
          name: 'Common Clay Brick',
          properties: 'Porous, moderate strength',
          notes: 'Can crumble under point loads. Use wide slings or spreaders.'
      },
      'brick-engineering': {
          density: 2200,
          name: 'Engineering Brick',
          properties: 'Dense, high strength',
          notes: 'Heavier and stronger than common brick. Still fragile to impacts.'
      },
      'sandstone': {
          density: 2300,
          name: 'Sandstone',
          properties: 'Sedimentary, variable strength',
          notes: 'Natural stone - strength varies. Check for cracks before lifting.'
      },
      'limestone': {
          density: 2600,
          name: 'Limestone',
          properties: 'Sedimentary, moderate strength',
          notes: 'Can be soft or hard varieties. Dust can be hazardous.'
      },
      'granite': {
          density: 2750,
          name: 'Granite',
          properties: 'Very hard, igneous rock',
          notes: 'Very heavy and hard. Sharp edges possible from cutting.'
      },
      'marble': {
          density: 2700,
          name: 'Marble',
          properties: 'Metamorphic, polished surface',
          notes: 'Heavy and can be slippery. Protect polished surfaces.'
      },

      // Timber
      'timber-hardwood': {
          density: 800,
          name: 'Hardwood (Average)',
          properties: 'Dense, strong grain',
          notes: 'Density varies greatly. Check moisture content affects weight.'
      },
      'timber-softwood': {
          density: 500,
          name: 'Softwood (Average)',
          properties: 'Light, good strength-to-weight',
          notes: 'Much lighter than hardwood. Check for knots and splits.'
      },
      'timber-pine': {
          density: 520,
          name: 'Pine',
          properties: 'Softwood, resinous',
          notes: 'Common construction timber. Can be sticky with resin.'
      },
      'timber-oak': {
          density: 750,
          name: 'Oak',
          properties: 'Very strong hardwood',
          notes: 'Heavy hardwood. Excellent strength but can split along grain.'
      },
      'timber-jarrah': {
          density: 820,
          name: 'Jarrah',
          properties: 'Australian hardwood, termite resistant',
          notes: 'Very dense Australian timber. Much heavier than expected.'
      },
      'timber-blackbutt': {
          density: 900,
          name: 'Blackbutt',
          properties: 'Australian hardwood, very strong',
          notes: 'One of the heaviest Australian timbers. Nearly as heavy as water.'
      },

      // Liquids
      'water': {
          density: 1000,
          name: 'Water',
          properties: 'Liquid, incompressible',
          notes: 'Weight changes with temperature. Use appropriate liquid containers.'
      },
      'diesel': {
          density: 850,
          name: 'Diesel Fuel',
          properties: 'Flammable liquid, slippery',
          notes: 'Fire hazard. Vapors can be dangerous. Use spark-proof equipment.'
      },
      'petrol': {
          density: 750,
          name: 'Petrol',
          properties: 'Highly flammable, volatile',
          notes: 'Extreme fire hazard. Vapors explosive. Special handling required.'
      },
      'oil-motor': {
          density: 900,
          name: 'Motor Oil',
          properties: 'Viscous, slippery when spilled',
          notes: 'Can create slippery surfaces. Environmental hazard if spilled.'
      },
      'hydraulic-oil': {
          density: 870,
          name: 'Hydraulic Oil',
          properties: 'High pressure fluid, slippery',
          notes: 'Under pressure can penetrate skin. Check containers for leaks.'
      },

      // Aggregates & Bulk
      'sand-dry': {
          density: 1600,
          name: 'Sand (Dry)',
          properties: 'Granular, free-flowing',
          notes: 'Weight varies with moisture. Can shift during transport.'
      },
      'sand-wet': {
          density: 2000,
          name: 'Sand (Wet)',
          properties: 'Granular, cohesive when wet',
          notes: 'Much heavier when wet. Can become fluid under vibration.'
      },
      'gravel': {
          density: 1800,
          name: 'Gravel',
          properties: 'Loose aggregate, angular',
          notes: 'Free-flowing material. Sharp edges can damage slings.'
      },
      'crushed-rock': {
          density: 1900,
          name: 'Crushed Rock',
          properties: 'Angular aggregate, compact',
          notes: 'Sharp edges can cut slings. Compacts under weight.'
      },
      'soil-clay': {
          density: 1800,
          name: 'Clay Soil',
          properties: 'Cohesive, plastic when wet',
          notes: 'Weight increases significantly when wet. Can stick to equipment.'
      },
      'soil-topsoil': {
          density: 1400,
          name: 'Topsoil',
          properties: 'Organic content, loose',
          notes: 'Weight varies with moisture and organic content.'
      },
      'mulch': {
          density: 400,
          name: 'Mulch (Dry)',
          properties: 'Organic, lightweight, loose',
          notes: 'Very light but bulky. Weight increases greatly when wet.'
      },

      // Other Materials
      'glass': {
          density: 2500,
          name: 'Glass',
          properties: 'Brittle, sharp when broken',
          notes: 'Very fragile. Use soft slings. Sharp edges dangerous if broken.'
      },
      'plastic-pvc': {
          density: 1400,
          name: 'PVC Plastic',
          properties: 'Rigid, chemical resistant',
          notes: 'Moderate weight. Can become brittle in cold weather.'
      },
      'plastic-hdpe': {
          density: 960,
          name: 'HDPE Plastic',
          properties: 'Flexible, chemical resistant',
          notes: 'Lighter than PVC. Can be slippery when wet.'
      },
      'rubber': {
          density: 1200,
          name: 'Rubber',
          properties: 'Elastic, flexible',
          notes: 'Can stretch during lifting. May require special attachment points.'
      },
      'paper': {
          density: 800,
          name: 'Paper',
          properties: 'Fibrous, tears easily',
          notes: 'Much heavier when wet. Protect from moisture during lifting.'
      },
      'cardboard': {
          density: 700,
          name: 'Cardboard',
          properties: 'Corrugated, lightweight',
          notes: 'Loses strength when wet. Use wide lifting surfaces.'
      },
      'ice': {
          density: 917,
          name: 'Ice',
          properties: 'Slippery, melts',
          notes: 'Slippery surface. Weight decreases as it melts. Cold injury risk.'
      }
  };

  // Unit conversion factors to metres
  const unitConversions = {
      'm': 1,
      'cm': 0.01,
      'mm': 0.001
  };

  // Set up event listeners
  setupEventListeners();
  setupUnitTabs();

  function setupEventListeners() {
      [widthInput, heightInput, lengthInput].forEach(input => {
          input.addEventListener('input', debounce(calculateWeight, 200));
          input.addEventListener('change', calculateWeight);
      });

      materialSelect.addEventListener('change', () => {
          calculateWeight();
          showMaterialInfo();
      });
  }

  function setupUnitTabs() {
      const unitTabs = document.querySelectorAll('.unit-tab');
      const unitDisplays = document.querySelectorAll('.unit-display');

      unitTabs.forEach(tab => {
          tab.addEventListener('click', () => {
              // Update active tab
              unitTabs.forEach(t => t.classList.remove('active'));
              tab.classList.add('active');

              // Update current unit
              currentUnit = tab.dataset.unit;

              // Update display labels
              unitDisplays.forEach(display => {
                  display.textContent = currentUnit;
              });

              // Update input placeholders and steps
              updateInputsForUnit();

              // Recalculate with new units
              calculateWeight();
          });
      });
  }

  function updateInputsForUnit() {
      const inputs = [widthInput, heightInput, lengthInput];
      const placeholders = {
          'm': ['1.2', '0.5', '2.0'],
          'cm': ['120', '50', '200'],
          'mm': ['1200', '500', '2000']
      };
      const steps = {
          'm': '0.001',
          'cm': '0.1',
          'mm': '1'
      };

      inputs.forEach((input, index) => {
          input.placeholder = `e.g. ${placeholders[currentUnit][index]}`;
          input.step = steps[currentUnit];
      });
  }

  function calculateWeight() {
      // Get dimensions in current unit
      const width = parseFloat(widthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      const length = parseFloat(lengthInput.value) || 0;
      const materialKey = materialSelect.value;

      // Check if we have valid inputs
      if (width <= 0 || height <= 0 || length <= 0 || !materialKey) {
          resetResults();
          return;
      }

      // Convert dimensions to metres
      const conversionFactor = unitConversions[currentUnit];
      const widthM = width * conversionFactor;
      const heightM = height * conversionFactor;
      const lengthM = length * conversionFactor;

      // Calculate volume in cubic metres
      const volumeM3 = widthM * heightM * lengthM;

      // Get material data
      const material = materialDatabase[materialKey];
      if (!material) {
          resetResults();
          return;
      }

      // Calculate weight in kg
      const weightKg = volumeM3 * material.density;
      const weightTonnes = weightKg / 1000;

      // Update displays
      weightResult.textContent = weightTonnes.toFixed(3);
      document.getElementById('weight-kg').textContent = Math.round(weightKg).toLocaleString();
      volumeResult.textContent = `${volumeM3.toFixed(4)} m³`;
      densityDisplay.textContent = `${material.density} kg/m³`;

      // Add animation effect
      weightResult.style.transform = 'scale(1.1)';
      setTimeout(() => {
          weightResult.style.transform = 'scale(1)';
      }, 200);
  }

  function showMaterialInfo() {
      const materialKey = materialSelect.value;
      if (!materialKey) {
          materialInfo.style.display = 'none';
          return;
      }

      const material = materialDatabase[materialKey];
      if (!material) return;

      // Update material info panel
      document.getElementById('material-name').textContent = material.name;
      document.getElementById('material-density').textContent = `${material.density} kg/m³`;
      document.getElementById('material-properties').textContent = material.properties;
      document.getElementById('material-notes').textContent = material.notes;

      // Show the panel with animation
      materialInfo.style.display = 'block';
      materialInfo.style.opacity = '0';
      setTimeout(() => {
          materialInfo.style.transition = 'opacity 0.3s ease';
          materialInfo.style.opacity = '1';
      }, 50);
  }

  function resetResults() {
      weightResult.textContent = '0.0';
      document.getElementById('weight-kg').textContent = '0';
      volumeResult.textContent = '0.0 m³';
      densityDisplay.textContent = '--';
      materialInfo.style.display = 'none';
  }

  function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
          const later = () => {
              clearTimeout(timeout);
              func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
      };
  }

  // Add clear functionality
  function addClearButton() {
      const calculatorContainer = document.querySelector('.calculator-container');
      if (!calculatorContainer || calculatorContainer.querySelector('.clear-btn')) return;

      const clearButton = document.createElement('button');
      clearButton.className = 'clear-btn';
      clearButton.innerHTML = '<i class="fas fa-eraser"></i> Clear All';
      
      clearButton.addEventListener('click', () => {
          widthInput.value = '';
          heightInput.value = '';
          lengthInput.value = '';
          materialSelect.value = '';
          resetResults();
          widthInput.focus();
      });

      calculatorContainer.appendChild(clearButton);
  }

  addClearButton();
}

// Navigation functions
function goBack() {
  window.location.href = 'main-menu.html';
}

function goHome() {
  window.location.href = 'index.html';
}

// Lifting Register functionality
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('lifting-register.html')) {
      initializeLiftingRegister();
  }
});

function initializeLiftingRegister() {
  console.log('Initializing Lifting Register');
  
  // Get form elements
  const addBtn = document.getElementById('add-equipment-btn');
  const equipmentList = document.getElementById('equipment-list');
  const filterBtn = document.getElementById('filter-btn');
  const filterPanel = document.getElementById('filter-panel');
  const exportBtn = document.getElementById('export-btn');
  
  // Equipment storage key
  const STORAGE_KEY = 'rygtek_lifting_register';
  
  // Load existing equipment
  let equipmentData = loadEquipmentData();
  
  // Set up event listeners
  setupEventListeners();
  
  // Initial render
  renderEquipmentList();
  updateComplianceSummary();

  function setupEventListeners() {
      // Add equipment button
      addBtn.addEventListener('click', addEquipment);
      
      // Filter controls
      filterBtn.addEventListener('click', toggleFilterPanel);
      
      // Filter buttons
      document.querySelectorAll('.filter-tag').forEach(btn => {
          btn.addEventListener('click', handleFilterClick);
      });
      
      // Type filter
      document.getElementById('type-filter').addEventListener('change', applyFilters);
      
      // Export button
      exportBtn.addEventListener('click', exportRegister);
      
      // Form validation
      setupFormValidation();
  }

  function setupFormValidation() {
      const requiredFields = ['equipment-type', 'equipment-id', 'wll-capacity', 'last-test-date'];
      
      requiredFields.forEach(fieldId => {
          const field = document.getElementById(fieldId);
          if (field) {
              field.addEventListener('blur', validateField);
              field.addEventListener('input', clearFieldError);
          }
      });
  }

  function validateField(event) {
      const field = event.target;
      const value = field.value.trim();
      
      if (!value) {
          showFieldError(field, 'This field is required');
          return false;
      }
      
      // Specific validations
      if (field.id === 'wll-capacity' && (isNaN(value) || parseFloat(value) <= 0)) {
          showFieldError(field, 'Enter a valid capacity greater than 0');
          return false;
      }
      
      if (field.id === 'equipment-id' && equipmentData.some(item => item.id === value)) {
          showFieldError(field, 'Equipment ID already exists');
          return false;
      }
      
      clearFieldError(field);
      return true;
  }

  function showFieldError(field, message) {
      clearFieldError(field);
      
      field.style.borderColor = '#FF3B30';
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'field-error';
      errorDiv.textContent = message;
      errorDiv.style.cssText = `
          color: #FF3B30;
          font-size: 0.8rem;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
      `;
      errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
      
      field.parentNode.appendChild(errorDiv);
  }

  function clearFieldError(field) {
      field.style.borderColor = '';
      const error = field.parentNode.querySelector('.field-error');
      if (error) error.remove();
  }

  function addEquipment() {
      // Validate all required fields
      const requiredFields = ['equipment-type', 'equipment-id', 'wll-capacity', 'last-test-date'];
      let isValid = true;
      
      requiredFields.forEach(fieldId => {
          const field = document.getElementById(fieldId);
          if (!validateField({ target: field })) {
              isValid = false;
          }
      });
      
      if (!isValid) {
          showNotification('Please fix the errors above', 'error');
          return;
      }
      
      // Get form data
      const equipment = {
          id: document.getElementById('equipment-id').value.trim(),
          type: document.getElementById('equipment-type').value,
          wll: parseFloat(document.getElementById('wll-capacity').value),
          manufacturer: document.getElementById('manufacturer').value.trim(),
          size: document.getElementById('size-spec').value.trim(),
          lastTestDate: document.getElementById('last-test-date').value,
          testAuthority: document.getElementById('test-authority').value.trim(),
          notes: document.getElementById('equipment-notes').value.trim(),
          dateAdded: new Date().toISOString().split('T')[0],
          status: 'active'
      };
      
      // Calculate next test dates
      const testDates = calculateTestDates(equipment.lastTestDate, equipment.type);
      equipment.nextQuarterlyDate = testDates.quarterly;
      equipment.nextAnnualDate = testDates.annual;
      equipment.rugbyTag = testDates.rugbyTag;
      equipment.nextRugbyTag = testDates.nextRugbyTag;
      
      // Add to data
      equipmentData.push(equipment);
      
      // Save and refresh
      saveEquipmentData();
      renderEquipmentList();
      updateComplianceSummary();
      clearForm();
      
      showNotification(`Equipment ${equipment.id} added successfully`, 'success');
  }

  function calculateTestDates(lastTestDate, equipmentType) {
      const lastDate = new Date(lastTestDate);
      
      // Quarterly inspection (3 months)
      const quarterly = new Date(lastDate);
      quarterly.setMonth(quarterly.getMonth() + 3);
      
      // Annual test (12 months)
      const annual = new Date(lastDate);
      annual.setFullYear(annual.getFullYear() + 1);
      
      // Rugby tag system (quarterly color coding)
      const rugbyColors = ['Red', 'Green', 'Blue', 'Yellow'];
      const quarter = Math.floor(lastDate.getMonth() / 3);
      const currentRugby = rugbyColors[quarter];
      const nextQuarter = (quarter + 1) % 4;
      const nextRugby = rugbyColors[nextQuarter];
      
      return {
          quarterly: quarterly.toISOString().split('T')[0],
          annual: annual.toISOString().split('T')[0],
          rugbyTag: currentRugby,
          nextRugbyTag: nextRugby
      };
  }

  function renderEquipmentList() {
      const container = document.getElementById('equipment-list');
      
      if (equipmentData.length === 0) {
          container.innerHTML = `
              <div class="empty-state">
                  <i class="fas fa-clipboard-list"></i>
                  <h4>No Equipment Registered</h4>
                  <p>Add your first piece of lifting equipment to start tracking inspections and compliance.</p>
              </div>
          `;
          return;
      }
      
      const equipmentHtml = equipmentData.map(equipment => {
          const status = getEquipmentStatus(equipment);
          const statusClass = status.class;
          const statusText = status.text;
          const statusIcon = status.icon;
          
          return `
              <div class="equipment-item ${statusClass}" data-id="${equipment.id}">
                  <div class="equipment-header">
                      <div class="equipment-title">
                          <h4>${equipment.id}</h4>
                          <span class="equipment-type">${getEquipmentTypeName(equipment.type)}</span>
                      </div>
                      <div class="equipment-status">
                          <span class="status-badge ${statusClass}">
                              <i class="${statusIcon}"></i>
                              ${statusText}
                          </span>
                      </div>
                  </div>
                  
                  <div class="equipment-details">
                      <div class="detail-row">
                          <div class="detail-item">
                              <span class="detail-label">WLL:</span>
                              <span class="detail-value">${equipment.wll}t</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Manufacturer:</span>
                              <span class="detail-value">${equipment.manufacturer || 'Not specified'}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Size:</span>
                              <span class="detail-value">${equipment.size || 'Not specified'}</span>
                          </div>
                      </div>
                      
                      <div class="detail-row">
                          <div class="detail-item">
                              <span class="detail-label">Last Test:</span>
                              <span class="detail-value">${formatDate(equipment.lastTestDate)}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Next Quarterly:</span>
                              <span class="detail-value">${formatDate(equipment.nextQuarterlyDate)}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Next Annual:</span>
                              <span class="detail-value">${formatDate(equipment.nextAnnualDate)}</span>
                          </div>
                      </div>
                      
                      <div class="detail-row">
                          <div class="detail-item">
                              <span class="detail-label">Rugby Tag:</span>
                              <span class="detail-value rugby-tag ${equipment.rugbyTag.toLowerCase()}">${equipment.rugbyTag}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Test Authority:</span>
                              <span class="detail-value">${equipment.testAuthority || 'Not specified'}</span>
                          </div>
                      </div>
                      
                      ${equipment.notes ? `
                          <div class="equipment-notes">
                              <span class="detail-label">Notes:</span>
                              <span class="detail-value">${equipment.notes}</span>
                          </div>
                      ` : ''}
                  </div>
                  
                  <div class="equipment-actions">
                      <button class="action-btn edit-btn" onclick="editEquipment('${equipment.id}')">
                          <i class="fas fa-edit"></i>
                          Edit
                      </button>
                      <button class="action-btn test-btn" onclick="recordTest('${equipment.id}')">
                          <i class="fas fa-clipboard-check"></i>
                          Record Test
                      </button>
                      <button class="action-btn delete-btn" onclick="deleteEquipment('${equipment.id}')">
                          <i class="fas fa-trash"></i>
                          Delete
                      </button>
                  </div>
              </div>
          `;
      }).join('');
      
      container.innerHTML = equipmentHtml;
  }

  function getEquipmentStatus(equipment) {
      const today = new Date();
      const nextQuarterly = new Date(equipment.nextQuarterlyDate);
      const nextAnnual = new Date(equipment.nextAnnualDate);
      const daysDiff = Math.ceil((nextQuarterly - today) / (1000 * 60 * 60 * 24));
      
      if (daysDiff < 0) {
          return { class: 'overdue', text: 'Overdue', icon: 'fas fa-exclamation-triangle' };
      } else if (daysDiff <= 30) {
          return { class: 'due-soon', text: 'Due Soon', icon: 'fas fa-clock' };
      } else {
          return { class: 'current', text: 'Current', icon: 'fas fa-check-circle' };
      }
  }

  function getEquipmentTypeName(type) {
      const typeNames = {
          'chain-grade80': 'Chain Sling (Grade 80)',
          'chain-grade100': 'Chain Sling (Grade 100)',
          'chain-adjustable': 'Adjustable Chain Sling',
          'wire-sling': 'Wire Rope Sling',
          'wire-strop': 'Wire Rope Strop',
          'wire-endless': 'Endless Wire Sling',
          'round-sling': 'Round Sling',
          'webbing-sling': 'Webbing Sling',
          'endless-sling': 'Endless Synthetic Sling',
          'shackle': 'Shackle',
          'hook': 'Lifting Hook',
          'eyebolt': 'Eyebolt',
          'spreader-beam': 'Spreader Beam',
          'lifting-beam': 'Lifting Beam',
          'crane-block': 'Crane Block',
          'load-block': 'Load Block',
          'crane-hook': 'Crane Hook'
      };
      return typeNames[type] || type;
  }

  function updateComplianceSummary() {
      const currentCount = equipmentData.filter(eq => getEquipmentStatus(eq).class === 'current').length;
      const dueSoonCount = equipmentData.filter(eq => getEquipmentStatus(eq).class === 'due-soon').length;
      const overdueCount = equipmentData.filter(eq => getEquipmentStatus(eq).class === 'overdue').length;
      const totalCount = equipmentData.length;
      
      document.getElementById('current-count').textContent = currentCount;
      document.getElementById('due-soon-count').textContent = dueSoonCount;
      document.getElementById('overdue-count').textContent = overdueCount;
      document.getElementById('total-count').textContent = totalCount;
  }

  function toggleFilterPanel() {
      const panel = document.getElementById('filter-panel');
      const isVisible = panel.style.display === 'block';
      panel.style.display = isVisible ? 'none' : 'block';
  }

  function handleFilterClick(event) {
      const button = event.target;
      const filter = button.dataset.filter;
      
      // Update active state
      document.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Apply filter
      applyFilters();
  }

  function applyFilters() {
      // Implementation for filtering would go here
      // For now, just log the filter action
      console.log('Applying filters');
  }

  function exportRegister() {
      if (equipmentData.length === 0) {
          showNotification('No equipment data to export', 'warning');
          return;
      }
      
      // Create CSV content
      const headers = ['ID', 'Type', 'WLL', 'Manufacturer', 'Size', 'Last Test', 'Next Quarterly', 'Next Annual', 'Status', 'Rugby Tag', 'Test Authority', 'Notes'];
      const csvContent = [
          headers.join(','),
          ...equipmentData.map(eq => [
              eq.id,
              getEquipmentTypeName(eq.type),
              eq.wll,
               eq.manufacturer || '',
               eq.size || '',
               eq.lastTestDate,
               eq.nextQuarterlyDate,
               eq.nextAnnualDate,
               getEquipmentStatus(eq).text,
               eq.rugbyTag,
               eq.testAuthority || '',
               (eq.notes || '').replace(/,/g, ';') // Replace commas to avoid CSV issues
           ].join(','))
       ].join('\n');
       
       // Create and download file
       const blob = new Blob([csvContent], { type: 'text/csv' });
       const url = window.URL.createObjectURL(blob);
       const a = document.createElement('a');
       a.href = url;
       a.download = `lifting_register_${new Date().toISOString().split('T')[0]}.csv`;
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       window.URL.revokeObjectURL(url);
       
       showNotification('Register exported successfully', 'success');
   }

   function clearForm() {
       const formInputs = [
           'equipment-type', 'equipment-id', 'wll-capacity', 'manufacturer',
           'size-spec', 'last-test-date', 'test-authority', 'equipment-notes'
       ];
       
       formInputs.forEach(id => {
           const element = document.getElementById(id);
           if (element) {
               element.value = '';
               clearFieldError(element);
           }
       });
   }

   function formatDate(dateString) {
       const date = new Date(dateString);
       return date.toLocaleDateString('en-AU', { 
           day: '2-digit', 
           month: '2-digit', 
           year: 'numeric' 
       });
   }

   function loadEquipmentData() {
       try {
           const data = localStorage.getItem(STORAGE_KEY);
           return data ? JSON.parse(data) : [];
       } catch (error) {
           console.error('Error loading equipment data:', error);
           return [];
       }
   }

   function saveEquipmentData() {
       try {
           localStorage.setItem(STORAGE_KEY, JSON.stringify(equipmentData));
       } catch (error) {
           console.error('Error saving equipment data:', error);
           showNotification('Error saving data', 'error');
       }
   }

   function showNotification(message, type = 'info') {
       // Remove existing notifications
       const existingNotification = document.querySelector('.notification');
       if (existingNotification) {
           existingNotification.remove();
       }
       
       const notification = document.createElement('div');
       notification.className = `notification ${type}`;
       notification.innerHTML = `
           <div class="notification-content">
               <i class="fas fa-${type === 'success' ? 'check-circle' : 
                                  type === 'error' ? 'exclamation-circle' : 
                                  type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
               <span>${message}</span>
           </div>
       `;
       
       // Style the notification
       notification.style.cssText = `
           position: fixed;
           top: 100px;
           right: 20px;
           z-index: 1000;
           background: ${type === 'success' ? 'rgba(52, 199, 89, 0.9)' : 
                       type === 'error' ? 'rgba(255, 59, 48, 0.9)' : 
                       type === 'warning' ? 'rgba(255, 204, 0, 0.9)' : 'rgba(0, 122, 255, 0.9)'};
           color: white;
           padding: 16px 20px;
           border-radius: 8px;
           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
           transform: translateX(100%);
           transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
       `;
       
       document.body.appendChild(notification);
       
       // Animate in
       setTimeout(() => {
           notification.style.transform = 'translateX(0)';
       }, 100);
       
       // Auto remove after 4 seconds
       setTimeout(() => {
           notification.style.transform = 'translateX(100%)';
           setTimeout(() => notification.remove(), 300);
       }, 4000);
   }

   // Global functions for equipment actions (called from HTML)
   window.editEquipment = function(equipmentId) {
       const equipment = equipmentData.find(eq => eq.id === equipmentId);
       if (!equipment) return;
       
       // Populate form with equipment data
       document.getElementById('equipment-type').value = equipment.type;
       document.getElementById('equipment-id').value = equipment.id;
       document.getElementById('wll-capacity').value = equipment.wll;
       document.getElementById('manufacturer').value = equipment.manufacturer || '';
       document.getElementById('size-spec').value = equipment.size || '';
       document.getElementById('last-test-date').value = equipment.lastTestDate;
       document.getElementById('test-authority').value = equipment.testAuthority || '';
       document.getElementById('equipment-notes').value = equipment.notes || '';
       
       // Change button to update mode
       const addBtn = document.getElementById('add-equipment-btn');
       addBtn.innerHTML = '<i class="fas fa-save"></i>Update Equipment';
       addBtn.onclick = () => updateEquipment(equipmentId);
       
       // Scroll to form
       document.querySelector('.add-equipment-section').scrollIntoView({ behavior: 'smooth' });
       
       showNotification(`Editing ${equipmentId}`, 'info');
   };

   window.updateEquipment = function(equipmentId) {
       const index = equipmentData.findIndex(eq => eq.id === equipmentId);
       if (index === -1) return;
       
       // Validate form
       const requiredFields = ['equipment-type', 'equipment-id', 'wll-capacity', 'last-test-date'];
       let isValid = true;
       
       requiredFields.forEach(fieldId => {
           const field = document.getElementById(fieldId);
           if (!validateField({ target: field })) {
               isValid = false;
           }
       });
       
       if (!isValid) {
           showNotification('Please fix the errors above', 'error');
           return;
       }
       
       // Update equipment data
       const updatedEquipment = {
           ...equipmentData[index],
           type: document.getElementById('equipment-type').value,
           id: document.getElementById('equipment-id').value.trim(),
           wll: parseFloat(document.getElementById('wll-capacity').value),
           manufacturer: document.getElementById('manufacturer').value.trim(),
           size: document.getElementById('size-spec').value.trim(),
           lastTestDate: document.getElementById('last-test-date').value,
           testAuthority: document.getElementById('test-authority').value.trim(),
           notes: document.getElementById('equipment-notes').value.trim()
       };
       
       // Recalculate test dates
       const testDates = calculateTestDates(updatedEquipment.lastTestDate, updatedEquipment.type);
       updatedEquipment.nextQuarterlyDate = testDates.quarterly;
       updatedEquipment.nextAnnualDate = testDates.annual;
       updatedEquipment.rugbyTag = testDates.rugbyTag;
       updatedEquipment.nextRugbyTag = testDates.nextRugbyTag;
       
       equipmentData[index] = updatedEquipment;
       
       // Save and refresh
       saveEquipmentData();
       renderEquipmentList();
       updateComplianceSummary();
       clearForm();
       
       // Reset button
       const addBtn = document.getElementById('add-equipment-btn');
       addBtn.innerHTML = '<i class="fas fa-plus"></i>Add to Register';
       addBtn.onclick = addEquipment;
       
       showNotification(`${updatedEquipment.id} updated successfully`, 'success');
   };

   window.recordTest = function(equipmentId) {
       const equipment = equipmentData.find(eq => eq.id === equipmentId);
       if (!equipment) return;
       
       // Create modal for recording test
       const modal = document.createElement('div');
       modal.className = 'test-modal';
       modal.innerHTML = `
           <div class="modal-overlay">
               <div class="modal-content">
                   <div class="modal-header">
                       <h3>Record Test - ${equipment.id}</h3>
                       <button class="modal-close" onclick="this.closest('.test-modal').remove()">
                           <i class="fas fa-times"></i>
                       </button>
                   </div>
                   <div class="modal-body">
                       <div class="input-group">
                           <label>Test Date:</label>
                           <input type="date" id="new-test-date" class="apple-input" value="${new Date().toISOString().split('T')[0]}">
                       </div>
                       <div class="input-group">
                           <label>Test Authority:</label>
                           <input type="text" id="new-test-authority" class="apple-input" value="${equipment.testAuthority || ''}" placeholder="e.g. NATA Lab, Competent Person">
                       </div>
                       <div class="input-group">
                           <label>Test Result:</label>
                           <select id="test-result" class="apple-select">
                               <option value="pass">PASS</option>
                               <option value="fail">FAIL</option>
                               <option value="conditional">CONDITIONAL PASS</option>
                           </select>
                       </div>
                       <div class="input-group">
                           <label>Notes:</label>
                           <textarea id="test-notes" class="apple-textarea" rows="3" placeholder="Test notes, observations, or conditions..."></textarea>
                       </div>
                   </div>
                   <div class="modal-actions">
                       <button class="modal-btn cancel" onclick="this.closest('.test-modal').remove()">Cancel</button>
                       <button class="modal-btn primary" onclick="saveTestRecord('${equipmentId}')">Save Test</button>
                   </div>
               </div>
           </div>
       `;
       
       // Style the modal
       modal.style.cssText = `
           position: fixed;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           z-index: 2000;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 20px;
       `;
       
       document.body.appendChild(modal);
   };

   window.saveTestRecord = function(equipmentId) {
       const equipment = equipmentData.find(eq => eq.id === equipmentId);
       if (!equipment) return;
       
       const testDate = document.getElementById('new-test-date').value;
       const testAuthority = document.getElementById('new-test-authority').value;
       const testResult = document.getElementById('test-result').value;
       const testNotes = document.getElementById('test-notes').value;
       
       if (!testDate) {
           showNotification('Test date is required', 'error');
           return;
       }
       
       // Update equipment with new test data
       equipment.lastTestDate = testDate;
       equipment.testAuthority = testAuthority;
       
       // Recalculate dates
       const testDates = calculateTestDates(testDate, equipment.type);
       equipment.nextQuarterlyDate = testDates.quarterly;
       equipment.nextAnnualDate = testDates.annual;
       equipment.rugbyTag = testDates.rugbyTag;
       equipment.nextRugbyTag = testDates.nextRugbyTag;
       
       // Add test record to history
       if (!equipment.testHistory) equipment.testHistory = [];
       equipment.testHistory.push({
           date: testDate,
           authority: testAuthority,
           result: testResult,
           notes: testNotes,
           recordedBy: 'User', // Could be enhanced with user system
           recordedDate: new Date().toISOString()
       });
       
       // Save and refresh
       saveEquipmentData();
       renderEquipmentList();
       updateComplianceSummary();
       
       // Close modal
       document.querySelector('.test-modal').remove();
       
       showNotification(`Test recorded for ${equipmentId}`, 'success');
   };

   window.deleteEquipment = function(equipmentId) {
       if (!confirm(`Are you sure you want to delete equipment ${equipmentId}? This action cannot be undone.`)) {
           return;
       }
       
       const index = equipmentData.findIndex(eq => eq.id === equipmentId);
       if (index !== -1) {
           equipmentData.splice(index, 1);
           saveEquipmentData();
           renderEquipmentList();
           updateComplianceSummary();
           showNotification(`${equipmentId} deleted`, 'success');
       }
   };
}

// Navigation functions
function goBack() {
   window.location.href = 'main-menu.html';
}

function goHome() {
   window.location.href = 'index.html';
}

// Safety Alerts functionality
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('safety-alerts.html')) {
      initializeSafetyAlerts();
  }
});

function initializeSafetyAlerts() {
  console.log('Initializing Safety Alerts');
  
  // Sample safety alerts data (in a real app, this would come from an API)
  const safetyAlertsData = [
      {
          id: 'SA2025001',
          type: 'critical',
          title: 'Chain Sling Recall - Brand X Grade 100',
          summary: 'Immediate recall of Brand X Grade 100 chain slings manufactured between Jan-Mar 2024 due to heat treatment defects.',
          content: 'WorkSafe has issued an immediate recall notice for Brand X Grade 100 chain slings with serial numbers starting with "BX24". Affected slings may have inadequate heat treatment leading to premature failure. Stop use immediately and contact supplier.',
          date: '2025-01-15',
          source: 'WorkSafe Australia',
          category: 'Equipment Recall',
          affectedEquipment: ['Chain Slings'],
          actions: ['Stop Use', 'Contact Supplier', 'Return Equipment']
      },
      {
          id: 'SA2025002',
          type: 'warning',
          title: 'Updated AS 2550 - Crane Safety Standards',
          summary: 'New amendments to AS 2550 crane safety standards effective March 2025, including updated inspection frequencies.',
          content: 'Standards Australia has published amendments to AS 2550 series covering crane safety. Key changes include quarterly inspections for high-use equipment and updated competency requirements for crane operators.',
          date: '2025-01-10',
          source: 'Standards Australia',
          category: 'Regulatory Update',
          affectedEquipment: ['Cranes', 'Mobile Cranes'],
          actions: ['Review Procedures', 'Train Personnel', 'Update Documentation']
      },
      {
          id: 'SA2025003',
          type: 'warning',
          title: 'Synthetic Sling Temperature Limits',
          summary: 'Recent failures of synthetic slings in high-temperature applications. Review temperature limits before use.',
          content: 'Multiple incidents reported of synthetic round slings failing in applications exceeding 60°C. Ensure proper selection and inspection of synthetic slings for temperature-critical applications.',
          date: '2025-01-08',
          source: 'Industry Report',
          category: 'Equipment Safety',
          affectedEquipment: ['Round Slings', 'Webbing Slings'],
          actions: ['Check Temperature Ratings', 'Inspect Equipment', 'Review Procedures']
      },
      {
          id: 'SA2025004',
          type: 'info',
          title: 'Rugby Tag System Quarterly Update',
          summary: 'Q1 2025 rugby tag color is RED. Ensure all lifting equipment displays current quarterly inspection tags.',
          content: 'Reminder that Q1 2025 (January-March) rugby tag color is RED. All lifting equipment must display current red tags indicating quarterly inspection completion.',
          date: '2025-01-01',
          source: 'RYGTEK Safety Team',
          category: 'Inspection Reminder',
          affectedEquipment: ['All Lifting Equipment'],
          actions: ['Update Tags', 'Complete Inspections']
      },
      {
          id: 'SA2024058',
          type: 'info',
          title: 'New NATA Testing Facilities',
          summary: 'Additional NATA-approved testing facilities now available in regional areas for lifting equipment certification.',
          content: 'Three new NATA-approved testing facilities have opened in regional Queensland and NSW, reducing travel requirements for annual lifting equipment testing and certification.',
          date: '2024-12-20',
          source: 'NATA',
          category: 'Service Update',
          affectedEquipment: ['All Testing Required'],
          actions: ['Update Records', 'Consider Options']
      }
  ];

  // Daily safety tips database
  const dailySafetyTips = [
      // Equipment Tips
      [
          { title: "Pre-Use Inspection", tip: "Always inspect lifting gear before each use for damage, wear, or defects" },
          { title: "Weight Verification", tip: "Confirm actual load weight before lifting - estimates can be deadly" },
          { title: "Sling Angle Check", tip: "Never use sling angles less than 30° - load factors increase exponentially" },
          { title: "Sharp Edge Protection", tip: "Use padding or sleeves to protect slings from sharp edges and corners" }
      ],
      // Environmental Tips
      [
          { title: "Weather Awareness", tip: "Wind speed over 15km/h can affect lifting operations - check conditions" },
          { title: "Ground Conditions", tip: "Ensure stable, level ground for crane outriggers and blocking" },
          { title: "Overhead Hazards", tip: "Always check for powerlines, structures, and other overhead obstacles" },
          { title: "Visibility Check", tip: "Stop operations in poor visibility - safety depends on clear communication" }
      ],
      // Communication Tips
      [
          { title: "Hand Signals", tip: "Use standard crane signals - ensure all team members know them" },
          { title: "Radio Protocol", tip: "Use clear, concise radio communication - repeat critical information" },
          { title: "Stop Authority", tip: "Anyone can stop a lift for safety reasons - encourage open communication" },
          { title: "Lifting Plan", tip: "Discuss the lift plan with all team members before starting operations" }
      ],
      // Personal Safety Tips
      [
          { title: "PPE Compliance", tip: "Hard hats, safety boots, and high-vis clothing are mandatory on site" },
          { title: "Exclusion Zones", tip: "Never stand under suspended loads - maintain safe distances" },
          { title: "Fatigue Management", tip: "Take regular breaks - tired workers make dangerous mistakes" },
          { title: "Training Currency", tip: "Ensure your lifting qualifications and training are current" }
      ]
  ];

  // Initialize the page
  setupEventListeners();
  renderSafetyAlerts(safetyAlertsData);
  renderSafetyTips();

  function setupEventListeners() {
      // Subscribe button
      const subscribeBtn = document.getElementById('subscribe-btn');
      subscribeBtn.addEventListener('click', handleSubscription);

      // Alert filters
      document.querySelectorAll('.filter-tag').forEach(btn => {
          btn.addEventListener('click', handleAlertFilter);
      });

      // Email input enter key
      document.getElementById('email-alerts').addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              handleSubscription();
          }
      });
  }

  function handleSubscription() {
      const emailInput = document.getElementById('email-alerts');
      const email = emailInput.value.trim();
      
      if (!email) {
          showNotification('Please enter your email address', 'warning');
          return;
      }
      
      if (!isValidEmail(email)) {
          showNotification('Please enter a valid email address', 'error');
          return;
      }

      // Simulate subscription process
      const subscribeBtn = document.getElementById('subscribe-btn');
      const originalContent = subscribeBtn.innerHTML;
      
      subscribeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
      subscribeBtn.disabled = true;

      setTimeout(() => {
          subscribeBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
          emailInput.value = '';
          showNotification('Successfully subscribed to safety alerts', 'success');
          
          setTimeout(() => {
              subscribeBtn.innerHTML = originalContent;
              subscribeBtn.disabled = false;
          }, 2000);
      }, 1500);
  }

  function handleAlertFilter(event) {
      const filterType = event.target.dataset.filter;
      
      // Update active filter
      document.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      
      // Filter alerts
      const filteredAlerts = filterType === 'all' 
          ? safetyAlertsData 
          : safetyAlertsData.filter(alert => alert.type === filterType);
      
      renderSafetyAlerts(filteredAlerts);
  }

  function renderSafetyAlerts(alerts) {
      const alertsList = document.getElementById('alerts-list');
      
      if (alerts.length === 0) {
          alertsList.innerHTML = `
              <div class="no-alerts">
                  <i class="fas fa-check-circle"></i>
                  <h4>No Alerts</h4>
                  <p>No safety alerts match the current filter.</p>
              </div>
          `;
          return;
      }

      const alertsHtml = alerts.map(alert => {
          const alertTypeClass = alert.type;
          const alertIcon = {
              'critical': 'fas fa-exclamation-triangle',
              'warning': 'fas fa-exclamation-circle',
              'info': 'fas fa-info-circle'
          }[alert.type];

          return `
              <div class="alert-card ${alertTypeClass}" data-alert-id="${alert.id}">
                  <div class="alert-header">
                      <div class="alert-badge ${alertTypeClass}">
                          <i class="${alertIcon}"></i>
                          <span>${alert.type.toUpperCase()}</span>
                      </div>
                      <div class="alert-date">${formatAlertDate(alert.date)}</div>
                  </div>
                  
                  <div class="alert-content">
                      <h4 class="alert-title">${alert.title}</h4>
                      <p class="alert-summary">${alert.summary}</p>
                      
                      <div class="alert-details" style="display: none;">
                          <div class="alert-full-content">
                              <p>${alert.content}</p>
                          </div>
                          
                          <div class="alert-metadata">
                              <div class="metadata-item">
                                  <strong>Source:</strong> ${alert.source}
                              </div>
                              <div class="metadata-item">
                                  <strong>Category:</strong> ${alert.category}
                              </div>
                              <div class="metadata-item">
                                  <strong>Affected Equipment:</strong> ${alert.affectedEquipment.join(', ')}
                              </div>
                          </div>
                          
                          <div class="alert-actions">
                              <strong>Required Actions:</strong>
                              <ul>
                                  ${alert.actions.map(action => `<li>${action}</li>`).join('')}
                              </ul>
                          </div>
                      </div>
                  </div>
                  
                  <div class="alert-footer">
                      <button class="alert-toggle" onclick="toggleAlertDetails('${alert.id}')">
                          <span class="toggle-text">View Details</span>
                          <i class="fas fa-chevron-down toggle-icon"></i>
                      </button>
                      <button class="alert-share" onclick="shareAlert('${alert.id}')">
                          <i class="fas fa-share-alt"></i>
                          Share
                      </button>
                  </div>
              </div>
          `;
      }).join('');

      alertsList.innerHTML = alertsHtml;
  }

  function renderSafetyTips() {
      const randomTipSet = dailySafetyTips[Math.floor(Math.random() * dailySafetyTips.length)];
      const tipsGrid = document.getElementById('safety-tips-grid');
      
      const tipsHtml = randomTipSet.map(tip => `
          <div class="safety-tip-card">
              <h5>${tip.title}</h5>
              <p>${tip.tip}</p>
          </div>
      `).join('');
      
      tipsGrid.innerHTML = tipsHtml;
  }

  function formatAlertDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-AU', { 
          day: 'numeric', 
          month: 'short', 
          year: 'numeric' 
      });
  }

  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showNotification(message, type = 'info') {
      // Remove existing notifications
      const existingNotification = document.querySelector('.notification');
      if (existingNotification) {
          existingNotification.remove();
      }
      
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.innerHTML = `
          <div class="notification-content">
              <i class="fas fa-${type === 'success' ? 'check-circle' : 
                                 type === 'error' ? 'exclamation-circle' : 
                                 type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
              <span>${message}</span>
          </div>
      `;
      
      document.body.appendChild(notification);
      
      // Animate in
      setTimeout(() => notification.classList.add('show'), 100);
      
      // Auto remove
      setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => notification.remove(), 300);
      }, 4000);
  }

  // Global functions for button interactions
  window.toggleAlertDetails = function(alertId) {
      const alertCard = document.querySelector(`[data-alert-id="${alertId}"]`);
      const details = alertCard.querySelector('.alert-details');
      const toggleBtn = alertCard.querySelector('.alert-toggle');
      const toggleText = toggleBtn.querySelector('.toggle-text');
      const toggleIcon = toggleBtn.querySelector('.toggle-icon');
      
      if (details.style.display === 'none') {
          details.style.display = 'block';
          toggleText.textContent = 'Hide Details';
          toggleIcon.style.transform = 'rotate(180deg)';
      } else {
          details.style.display = 'none';
          toggleText.textContent = 'View Details';
          toggleIcon.style.transform = 'rotate(0deg)';
      }
  };

  window.shareAlert = function(alertId) {
      const alert = safetyAlertsData.find(a => a.id === alertId);
      if (!alert) return;
      
      const shareText = `Safety Alert: ${alert.title}\n\n${alert.summary}\n\nSource: ${alert.source}`;
      
      if (navigator.share) {
          navigator.share({
              title: alert.title,
              text: shareText,
              url: window.location.href
          });
      } else {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(shareText).then(() => {
              showNotification('Alert details copied to clipboard', 'success');
          });
      }
  };

  window.refreshSafetyTips = function() {
      const refreshBtn = document.querySelector('.refresh-tips-btn');
      const icon = refreshBtn.querySelector('i');
      
      icon.style.animation = 'spin 0.6s ease';
      
      setTimeout(() => {
          renderSafetyTips();
          icon.style.animation = '';
      }, 600);
  };

  window.openResource = function(resourceType) {
      const resources = {
          'worksafe-au': 'https://www.safeworkaustralia.gov.au/',
          'standards-au': 'https://www.standards.org.au/',
          'lifting-manual': '#', // Would link to actual manual download
          'emergency-contacts': '#' // Would open emergency contacts modal
      };
      
      if (resourceType === 'lifting-manual') {
          showNotification('Lifting Safety Manual download would start here', 'info');
      } else if (resourceType === 'emergency-contacts') {
          openEmergencyContacts();
      } else {
          window.open(resources[resourceType], '_blank');
      }
  };

  window.openIncidentForm = function() {
      showNotification('Incident reporting form would open here', 'info');
      // In a real app, this would open a comprehensive incident reporting form
  };

  function openEmergencyContacts() {
      const modal = document.createElement('div');
      modal.className = 'emergency-modal';
      modal.innerHTML = `
          <div class="modal-overlay">
              <div class="modal-content">
                  <div class="modal-header">
                      <h3>Emergency Contacts</h3>
                      <button class="modal-close" onclick="this.closest('.emergency-modal').remove()">
                          <i class="fas fa-times"></i>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div class="emergency-section">
                          <h4>Emergency Services</h4>
                          <div class="contact-item emergency">
                              <strong>000</strong> - Police, Fire, Ambulance
                          </div>
                      </div>
                      
                      <div class="emergency-section">
                          <h4>WorkSafe</h4>
                          <div class="contact-item">
                              <strong>13 10 50</strong> - WorkSafe Australia
                          </div>
                          <div class="contact-item">
                              <strong>1800 136 089</strong> - WorkSafe NSW
                          </div>
                      </div>
                      
                      <div class="emergency-section">
                          <h4>Industry Support</h4>
                          <div class="contact-item">
                              <strong>NATA:</strong> 1800 621 666
                          </div>
                          <div class="contact-item">
                              <strong>Standards Australia:</strong> 1800 035 822
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
      
      document.body.appendChild(modal);
  };
}

// Navigation functions
function goBack() {
  window.location.href = 'main-menu.html';
}

function goHome() {
  window.location.href = 'index.html';
} 