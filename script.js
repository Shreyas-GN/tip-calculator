function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tipPercent = parseFloat(document.getElementById('tip').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(bill) || isNaN(tipPercent)) {
    resultDiv.textContent = "Please enter valid numbers.";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  resultDiv.innerHTML = `
    Tip: $${tipAmount.toFixed(2)}<br/>
    Total: $${total.toFixed(2)}
  `;
}