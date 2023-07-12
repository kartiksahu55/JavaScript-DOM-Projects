const endDate = "01 jan 2024 00:00 AM";



document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");

function getDays() {
  const end = new Date(endDate);
  const now = new Date();
  const timeDifference = (end - now) / 1000;

  if (timeDifference < 0) return;

  const days = Math.floor(timeDifference / 3600 / 24);
  const hours = Math.floor(timeDifference / 3600) % 24;
  const minutes = Math.floor(timeDifference / 60) % 60;
  const second = Math.floor(timeDifference % 60);
  
  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = second;

  console.log(second);
}

setInterval(() => {
  getDays();
}, 1000);
