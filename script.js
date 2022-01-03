const hours = document.getElementById("hours");
const amount = document.getElementById("amount");
const totalHours = document.getElementById("total-hours");

const displayText = document.querySelector(".output");
const output = document.querySelector(".total__amount");

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hourIdx = hours.options.selectedIndex;
  let hour = hours.options[hourIdx].value;

  let enteredAmount = amount.value;
  let enteredTotalHours = totalHours.value;

  if (isNaN(enteredAmount) || !enteredAmount.trim()) {
    alert("Please Enter a Valid Amount.");
    return;
  }

  if (enteredTotalHours.split(":").length !== 3) {
    alert("Enter valid Total Hours - (HH:MM:SS) ");
    return;
  }

  let splittedHours = enteredTotalHours.split(":")[0];
  let splittedMins = enteredTotalHours.split(":")[1];
  let combinedTime = `${splittedHours}.${splittedMins}`;

  console.log(`${splittedHours}.${splittedMins}`);

  let totalAmount = ((Number(combinedTime) * enteredAmount) / hour).toFixed(2);

  displayText.classList.remove("hide");
  output.innerText = totalAmount;
});
