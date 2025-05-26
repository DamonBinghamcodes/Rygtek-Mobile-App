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