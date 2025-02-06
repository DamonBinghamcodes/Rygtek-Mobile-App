document.addEventListener('DOMContentLoaded', function() {
    // Existing functionality for the "Continue" button on the welcome screen
    const continueBtn = document.querySelector('.continue-btn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            window.location.href = 'disclaimer.html';
        });
    }

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
    }
});

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

// Working Load Limit - Calculations 
document.addEventListener('DOMContentLoaded', function () {
    const slingType = document.getElementById('sling-type');
    const configuration = document.getElementById('configuration');
    const chainSize = document.getElementById('chain-size');
    const wllResult = document.getElementById('wll-result');

    function calculateWLL() {
        let type = slingType.value;
        let config = configuration.value;
        let size = chainSize.value;

        if (size === '') {
            wllResult.innerText = '0.0';
            return;
        }

        let wll = 0.0;

        switch (type) {
            case 'chain':
                wll = size * 0.5; // Example calculation for Chain Sling
                break;
            case 'wire':
                wll = size * 0.4; // Example calculation for Wire Rope
                break;
            case 'synthetic':
                wll = size * 0.3; // Example calculation for Synthetic Sling
                break;
        }

        switch (config) {
            case 'basket':
                wll *= 2; // Double WLL for Basket Hitch
                break;
            case 'choker':
                wll *= 0.8; // Reduce WLL by 20% for Choker Hitch
                break;
        }

        wllResult.innerText = wll.toFixed(1);
    }

    slingType.addEventListener('change', calculateWLL);
    configuration.addEventListener('change', calculateWLL);
    chainSize.addEventListener('input', calculateWLL);
});

//angle and dimensions
document.addEventListener('DOMContentLoaded', function () {
    function calculateAngle() {
        const length = parseFloat(document.getElementById('length').value);
        const height = parseFloat(document.getElementById('height').value);
        const diagonal = parseFloat(document.getElementById('diagonal').value);
        const angleResult = document.getElementById('angle-result');

        if (!length || !height) {
            angleResult.innerText = "0°";
            return;
        }

        const angle = Math.atan(height / length) * (180 / Math.PI);
        angleResult.innerText = angle.toFixed(2) + "°";
    }

    document.getElementById('length').addEventListener('input', calculateAngle);
    document.getElementById('height').addEventListener('input', calculateAngle);
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
        if (material === 'steel') {
            density = 7.85; // tons per cubic meter
        } else if (material === 'aluminium') {
            density = 2.7;
        } else if (material === 'concrete') {
            density = 2.4;
        }

        const weight = width * height * length * density;
        weightResult.innerText = weight.toFixed(2);
    }

    document.getElementById('width').addEventListener('input', calculateWeight);
    document.getElementById('height').addEventListener('input', calculateWeight);
    document.getElementById('length').addEventListener('input', calculateWeight);
    document.getElementById('material').addEventListener('change', calculateWeight);
});

//Inspection Records
document.addEventListener('DOMContentLoaded', function () {
    const addRecordButton = document.getElementById('add-record');
    const equipmentInput = document.getElementById('equipment');
    const dateInput = document.getElementById('date');
    const notesInput = document.getElementById('notes');
    const recordsList = document.getElementById('records-list');

    function addRecord() {
        const equipment = equipmentInput.value.trim();
        const date = dateInput.value;
        const notes = notesInput.value.trim();

        if (equipment === '' || date === '') {
            alert('Please fill in all required fields.');
            return;
        }

        const recordItem = document.createElement('li');
        recordItem.innerHTML = `<strong>${equipment}</strong> - ${date} <p>${notes}</p>`;
        recordsList.appendChild(recordItem);

        // Clear inputs
        equipmentInput.value = '';
        dateInput.value = '';
        notesInput.value = '';
    }

    addRecordButton.addEventListener('click', addRecord);
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

    async function subscribeForAlerts() {
        const email = document.getElementById("email-alerts").value.trim();
        if (email === "") {
            alert("Please enter a valid email.");
            return;
        }

        alert("You have subscribed to safety alerts!");
        document.getElementById("email-alerts").value = "";
    }

    subscribeAlertsButton.addEventListener("click", subscribeForAlerts);
});

//Shop
document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartList = document.getElementById("cart-list");
    const checkoutButton = document.getElementById("checkout");

    document.querySelectorAll(".add-to-cart").forEach(button => {
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
            li.innerText = item;
            cartList.appendChild(li);
        });
    }

    checkoutButton.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Proceeding to checkout...");
            cart.length = 0;
            updateCart();
        }
    });
});
