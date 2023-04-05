function calculateBagFees() {
  const travelers = document.getElementById("travelers").value;
  const bags = document.getElementById("bags").value;
  const trips = document.getElementById("trips").value;

  // calculate total bag fees
  const firstBagFee = travelers * bags * 30;
  const secondBagFee = bags > 1 ? travelers * trips * 40 : 0;
  const totalBagFees = firstBagFee + secondBagFee;

  // display total bag fees
  document.getElementById("total").value = "$" + totalBagFees;
}
