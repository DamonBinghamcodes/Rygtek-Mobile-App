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
