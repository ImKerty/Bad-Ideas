var textField = document.getElementById("mind-reader-input");
var resultDiv = document.getElementById("mind-reader-result");
var text;

document.getElementById("mind-reader-submit").addEventListener('click', start);

function start() {
    getText();
    showResult();
}

function getText() {
    text = textField.value;
    textField.value = "";

    console.log("DEBUG>> text entered: '" + text + "'");
}

function showResult() {
    resultDiv.innerHTML = '';
    let resultAlert = document.createElement('div');
    resultAlert.classList.add("result");
    resultDiv.appendChild(resultAlert);

    let resultText = document.createElement('p');
    resultText.innerText = "Analyzing brain waves...";
    resultText.classList = "sottotitolo";
    resultAlert.appendChild(resultText);

    resultDiv.style.opacity = '1';

    setTimeout(() => {
        resultText.innerText = "Scanning memories...";
    }, 5000);

    setTimeout(() => {
        resultText.innerText = "Decoding thoughts...";
    }, 10000);

    setTimeout(() => {
        resultAlert.innerHTML = "";

        let resultTitle = document.createElement('p');
        resultTitle.innerText = "You're thinking about ";
        resultTitle.classList = "titolo";
        resultAlert.appendChild(resultTitle);

        resultText.innerText = text;
        resultAlert.appendChild(resultText);
    }, 15000);
}