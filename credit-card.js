document.getElementById('generate-card').addEventListener('click', generateCreditCard);

function generateCreditCard() {
    const cardNumber = generateRandomCardNumber();
    const cvv = generateRandomCVV();
    const expiryDate = generateRandomExpiryDate();
    const resultDiv = document.getElementById('credit-card-result');

    resultDiv.innerHTML = `
        <div class="result">
            <p>Generated Credit Card Number: ${cardNumber}</p>
            <p>CVV: ${cvv}</p>
            <p>Expiry Date: ${expiryDate}</p>
        </div>
    `;
}

function generateRandomCardNumber() {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10);
    }
    return cardNumber;
}

function generateRandomCVV() {
    let cvv = '';
    for (let i = 0; i < 3; i++) {
        cvv += Math.floor(Math.random() * 10);
    }
    return cvv;
}

function generateRandomExpiryDate() {
    const month = Math.floor(Math.random() * 12) + 1;
    const year = new Date().getFullYear() + Math.floor(Math.random() * 5) + 1; // Da quest'anno a 1 a + 5 anni
    return `${month.toString().padStart(2, '0')}/${year}`;
}
