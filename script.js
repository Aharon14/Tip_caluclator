function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var serviceQuality = parseFloat(document.getElementById("serviceQuality").value);
    var numberOfPeople = parseFloat(document.getElementById("numberOfPeople").value);

    var tipPerPerson = (billAmount * (serviceQuality / 100)) / numberOfPeople;

    var tipResultElement = document.getElementById("tipResult");
    tipResultElement.textContent = "Tip per person: $" + tipPerPerson.toFixed(2);
}
