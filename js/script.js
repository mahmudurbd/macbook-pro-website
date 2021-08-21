// extra memory cost
const memoryBtn1 = document.getElementById('btn-memory-8');
const memoryCost = document.getElementById('memory-cost');
memoryBtn1.addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotalCost();
});

const memoryBtn2 = document.getElementById('btn-memory-16');
memoryBtn2.addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotalCost();
});

// extra storage cost
const storageBtn1 = document.getElementById('btn-ssd-256');
const storageCost = document.getElementById('storage-cost');
storageBtn1.addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotalCost();
});

const storageBtn2 = document.getElementById('btn-ssd-512');
storageBtn2.addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotalCost();
});

const storageBtn3 = document.getElementById('btn-ssd-1TB');
storageBtn3.addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotalCost();
});


// Free delivery cost
const freeDeliveryBtn = document.getElementById('free-delivery');
const deliveryCost = document.getElementById('delivery-cost');
freeDeliveryBtn.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotalCost();
});

// Charge delivery cost
const chargeDeliveryBtn = document.getElementById('charge-delivery');
chargeDeliveryBtn.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotalCost();
});

// Update Total Cost
const bestPrice = document.getElementById('best-price');
const totalCost = document.getElementById('total-price');
const grandTotalCost = document.getElementById('grand-total');

function updateTotalCost() {
    const memoryPrice = parseFloat(memoryCost.innerText);
    const storagePricec = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);
    const bestCost = parseFloat(bestPrice.innerText);
    totalCost.innerText = memoryPrice + storagePricec + deliveryPrice + bestCost;
    grandTotalCost.innerText = totalCost.innerText;
    return grandTotalCost.innerText;

}

// Discount Calculation
const promoBtn = document.getElementById('apply-btn');
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    const gradvalue = updateTotalCost();
    if (promoCode == 'stevekaku') {
        grandTotalCost.innerText = gradvalue - gradvalue / 5;
    }
})

