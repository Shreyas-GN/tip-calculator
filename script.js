function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tipPercent = parseFloat(document.getElementById('tip').value);
  const tipAmountSpan = document.getElementById('tipAmount');
  const totalAmountSpan = document.getElementById('totalAmount');
  const resultDiv = document.getElementById('result');

  if (isNaN(bill) || isNaN(tipPercent) || bill < 0 || tipPercent < 0) {
    alert("Please enter valid, positive numbers for both fields.");
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  tipAmountSpan.textContent = `$${tip.toFixed(2)}`;
  totalAmountSpan.textContent = `$${total.toFixed(2)}`;
  resultDiv.classList.remove('hidden');
}