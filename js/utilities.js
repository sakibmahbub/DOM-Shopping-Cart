function getTextElementValueById(elementId) {
  const totalElement = document.getElementById(elementId);
  const currentTotalStr = totalElement.innerText;
  const currentTotal = parseInt(currentTotalStr);
  return currentTotal;
}

function setTextElementValueById(element, value) {
  const subTotalElement = document.getElementById(element);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  //   Calculate Tax
  const taxAmountStr = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountStr);
  setTextElementValueById("tax-amount", taxAmount);

  //   Final amount
  const finalAmount = currentSubTotal + finalAmount;
  setTextElementValueById("final-total", finalAmount);
}
