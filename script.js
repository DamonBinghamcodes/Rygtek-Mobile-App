document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
  
    // ✅ Only run this on the welcome page (index.html or root)
    if (path.includes('index.html') || path.endsWith('/')) {
      const continueBtn = document.querySelector('.continue-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', function () {
          window.location.href = 'disclaimer.html';
        });
      }
    }
  
    // ✅ Your other page-specific logic can go below (like lifting register, WLL, etc.)
  });
  
  

    // New functionality for the "Agree" button on the disclaimer screen
    const agreeBtn = document.querySelector('.agree-btn');
    if (agreeBtn) {
        agreeBtn.addEventListener('click', function() {
            window.location.href = 'main-menu.html'; // Redirect to the main menu page
        });
    }

    // New functionality for the logo to go back to the welcome screen
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    };

// Function to navigate to different pages (from main menu)
function navigateTo(page) {
    switch(page) {
        case 'working-load-limit':
            window.location.href = 'working-load-limit.html';
            break;
        case 'angle-dimensions':
            window.location.href = 'angle-dimensions.html';
            break;
        case 'load-weight':
            window.location.href = 'load-weight.html';
            break;
        case 'crane-signals':
            window.location.href = 'crane-signals.html';
            break;
        case 'safety-alerts':
            window.location.href = 'safety-alerts.html';
            break;
        case 'inspection-records':
            window.location.href = 'inspection-records.html';
            break;
        case 'contact-page':
            window.location.href = 'contact-page.html';
            break;
        case 'shop':
            window.location.href = 'shop.html';
            break;
        default:
            console.error('Page not found!');
    }
}

// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.getElementById("hamburgerMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  

//WLL data structure
document.addEventListener('DOMContentLoaded', () => {
    const slingType = document.getElementById('sling-type');
    const config = document.getElementById('configuration');
    const size = document.getElementById('chain-size');
    const output = document.getElementById('wll-output');
  
    const configOptions = {
      chain: ['Straight', 'Adjustable', 'Reeved', '2 Leg @ 60°', '2 Leg @ 90°', '2 Leg @ 120°', 'Basket 1 Leg', 'Basket 2 Leg'],
      wire: ['Straight', 'Choke', 'Basket'],
      round: ['Vertical', 'Choke', 'Basket']
    };
  
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
  
    slingType.addEventListener('change', () => {
      config.innerHTML = '';
      size.innerHTML = '';
      output.textContent = 'Select options above';
      const type = slingType.value;
  
      if (configOptions[type]) {
        config.disabled = false;
        configOptions[type].forEach(option => {
          const opt = document.createElement('option');
          opt.value = option;
          opt.textContent = option;
          config.appendChild(opt);
        });
      }
  
      size.disabled = true;
    });
  
    config.addEventListener('change', () => {
        size.innerHTML = '';
        output.textContent = 'Select options above';
        const type = slingType.value;
        const typeData = wllData[type];
    
        size.disabled = false;
    
        if (type === "round") {
          for (let key in typeData) {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = key;
            size.appendChild(opt);
          }
        } else {
          for (let key in typeData) {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = `${key} mm`;
            size.appendChild(opt);
          }
        }
      });
    
  
    size.addEventListener('change', () => {
      const type = slingType.value;
      const conf = config.value;
      const sz = size.value;
  
      const result = wllData[type]?.[sz]?.[conf];
      output.textContent = result ? `${result} t` : "N/A";
    });
  });
  
  // Hamburger menu
  function toggleMenu() {
    const menu = document.getElementById("hamburgerMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  function navigateTo(page) {
    window.location.href = `${page}.html`;
  }
  
  
  

//angle and dimensions
document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('length');
    const heightInput = document.getElementById('height');
    const diagonalInput = document.getElementById('diagonal');
    const angleResult = document.getElementById('angle-result');
  
    function updateAll() {
      let length = parseFloat(lengthInput.value);
      let height = parseFloat(heightInput.value);
      let diagonal = parseFloat(diagonalInput.value);
  
      // 🔁 Auto-calculate third value using Pythagorean theorem
      if (!isNaN(length) && !isNaN(height) && isNaN(diagonal)) {
        const calc = Math.sqrt((length / 2) ** 2 + height ** 2);
        diagonalInput.value = calc.toFixed(2);
        diagonal = calc;
      } else if (!isNaN(diagonal) && !isNaN(height) && isNaN(length)) {
        const calc = 2 * Math.sqrt(diagonal ** 2 - height ** 2);
        lengthInput.value = calc.toFixed(2);
        length = calc;
      } else if (!isNaN(diagonal) && !isNaN(length) && isNaN(height)) {
        const calc = Math.sqrt(diagonal ** 2 - (length / 2) ** 2);
        heightInput.value = calc.toFixed(2);
        height = calc;
      }
  
      // ✅ Calculate Included Angle Between Slings
      if (!isNaN(length) && !isNaN(height)) {
        const halfBase = length / 2;
        const angleRad = Math.atan(halfBase / height);
        const includedAngle = 2 * (angleRad * 180 / Math.PI);
        angleResult.innerText = `${includedAngle.toFixed(2)}°`;
      } else {
        angleResult.innerText = '--';
      }
    }
  
    [lengthInput, heightInput, diagonalInput].forEach(input =>
      input.addEventListener('input', updateAll)
    );
  });
  

//load weight
document.addEventListener('DOMContentLoaded', function () {
    function calculateWeight() {
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        const length = parseFloat(document.getElementById('length').value);
        const material = document.getElementById('material').value;
        const weightResult = document.getElementById('weight-result');

        if (!width || !height || !length) {
            weightResult.innerText = "0.0";
            return;
        }

        let density;
        if (material === 'steel') density = 7.85;
        else if (material === 'aluminium') density = 2.7;
        else if (material === 'concrete') density = 2.4;

        const weight = width * height * length * density;
        weightResult.innerText = weight.toFixed(2);
    }

    ['width', 'height', 'length'].forEach(id => {
        document.getElementById(id).addEventListener('input', calculateWeight);
    });
    document.getElementById('material').addEventListener('change', calculateWeight);
});


//Inspection Records
document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add-gear');
    const nameInput = document.getElementById('gear-name');
    const dateInput = document.getElementById('last-test-date');
    const gearLog = document.getElementById('gear-log');
  
    if (!addBtn || !gearLog) return;
  
    const savedRegister = JSON.parse(localStorage.getItem('liftingRegister')) || [];
  
    function getRugbyColor(date) {
      const month = date.getMonth();
      if (month < 3) return "Red";
      if (month < 6) return "Green";
      if (month < 9) return "Blue";
      return "Yellow";
    }
  
    function renderRegister() {
      gearLog.innerHTML = '';
      savedRegister.forEach(entry => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${entry.name}</strong><br>
          Last Tested: ${entry.lastDate}<br>
          RUGBY Tag Now: <span style="color:${entry.rugbyNow.toLowerCase()}">${entry.rugbyNow}</span><br>
          Next RUGBY Tag: <span style="color:${entry.rugbyNext.toLowerCase()}">${entry.rugbyNext}</span><br>
          Next Annual Test: ${entry.nextYear}
        `;
        gearLog.appendChild(li);
      });
    }
  
    renderRegister();
  
    addBtn.addEventListener('click', function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const dateVal = dateInput.value;
      if (!name || !dateVal) {
        alert("Please enter gear name and test date.");
        return;
      }
  
      const date = new Date(dateVal);
      const next3Month = new Date(date);
      next3Month.setMonth(date.getMonth() + 3);
  
      const nextAnnual = new Date(date);
      nextAnnual.setFullYear(date.getFullYear() + 1);
  
      const rugbyNow = getRugbyColor(date);
      const rugbyNext = getRugbyColor(next3Month);
  
      const entry = {
        name: name,
        lastDate: date.toLocaleDateString(),
        next3: next3Month.toLocaleDateString(),
        nextYear: nextAnnual.toLocaleDateString(),
        rugbyNow: rugbyNow,
        rugbyNext: rugbyNext
      };
  
      savedRegister.push(entry);
      localStorage.setItem('liftingRegister', JSON.stringify(savedRegister));
      renderRegister();
  
      nameInput.value = '';
      dateInput.value = '';
    });
  });
  

//Contact page
document.addEventListener('DOMContentLoaded', function () {
    const sendMessageButton = document.getElementById('send-message');

    function sendMessage() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        alert('Your message has been sent successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }

    sendMessageButton.addEventListener('click', sendMessage);
});

//Service Worker
// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker Registered', reg))
        .catch(err => console.log('Service Worker Registration Failed', err));
}


//Safety Alerts
document.addEventListener("DOMContentLoaded", function () {
    const subscribeAlertsButton = document.getElementById("subscribe-alerts");
  
    function subscribeForAlerts() {
      const email = document.getElementById("email-alerts").value.trim();
      if (email === "") {
        alert("Please enter a valid email.");
        return;
      }
  
      alert("You have subscribed to safety alerts!");
      document.getElementById("email-alerts").value = "";
    }
  
    if (subscribeAlertsButton) {
      subscribeAlertsButton.addEventListener("click", subscribeForAlerts);
    }
  });
  

//Shop
document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartList = document.getElementById("cart-list");
    const checkoutButton = document.getElementById("checkout");
  
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    if (!addToCartButtons.length || !cartList || !checkoutButton) return;
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
        const productName = this.getAttribute("data-product");
        cart.push(productName);
        updateCart();
      });
    });
  
    function updateCart() {
      cartList.innerHTML = "";
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
  
    checkoutButton.addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert("Thank you for your order!");
        cart.length = 0;
        updateCart();
      }
    });
  });
  
