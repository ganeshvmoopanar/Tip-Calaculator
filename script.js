const billTotal = document.getElementById('billTotal');
const tipPercentageRange = document.getElementById('tipPercentageRange');
const tipPercentageValue = document.getElementById('tipPercentageValue');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');
const tipForm = document.getElementById('tipForm');

tipForm.addEventListener('input', calculateTip);
tipPercentageRange.addEventListener('input', updateTipPercentage);

function calculateTip() {
    const bill = parseFloat(billTotal.value);
    const percentage = tipPercentageRange.value;
    
    if (isNaN(bill)) {
        tipAmount.value = "Invalid Input";
        totalBill.value = "Invalid Input";
    } else {
        const tip = (bill * percentage) / 100;
        const total = bill + tip;

        tipAmount.value = tip.toFixed(2);
        totalBill.value = total.toFixed(2);
        
    }
}

function updateTipPercentage() {
    const percentage = tipPercentageRange.value;
    tipPercentage.value = `${percentage}%`; 
    tipPercentageValue.textContent = `${percentage}%`; 
}

const backgrounds = ['1.avif', '2.avif', '3.avif', '4.avif', '5.avif', '6.avif', '7.avif', '8.avif', '9.avif', '12.avif', '13.avif', '14.avif', '15.avif', '18.avif', '19.avif', '20.avif'];
let currentBackgroundIndex = backgrounds.length - 1;
function changeBackground() {
    if (currentBackgroundIndex < 0) {
        currentBackgroundIndex = backgrounds.length - 1; 
    }

    const imageUrl = backgrounds[currentBackgroundIndex];
    document.body.style.backgroundImage = `url(${imageUrl})`;

    currentBackgroundIndex--;
}

changeBackground();

setInterval(changeBackground, 5000);


  




  
  
  
  
