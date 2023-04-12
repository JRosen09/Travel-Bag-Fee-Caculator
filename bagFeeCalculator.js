const calculateBtn = document.querySelector("#calculate-btn");
const totalBagFeesOutput = document.querySelector("#total-bag-fees");

calculateBtn.addEventListener("click", () => {
  const travelers = parseInt(document.querySelector("#travelers").value);
  const totalBags = parseInt(document.querySelector("#total-bags").value);
  const vacationsPerYear = parseInt(
    document.querySelector("#vacations-per-year").value
  );

  const firstBagFee = travelers * (vacationsPerYear * 2) * 30;
  const secondBagFee =
    totalBags > 1 ? travelers * (vacationsPerYear * 2) * 40 : 0;
  const totalBagFees = firstBagFee + secondBagFee;

  totalBagFeesOutput.value = `$${totalBagFees}`;
});
