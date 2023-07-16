const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstday =
  new Date(new Date().getFullYear(), monthIndex, 1).getDate() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".month h1").innerText = months[monthIndex];
document.querySelector(".month p").innerText = new Date().toDateString();

console.log(firstday);

let date = "";

for (let i = firstday; i > 0; i--) {
  date += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    date += `<div class="today">${i}</div>`;
  }
  date += `<div>${i}</div>`;
}

document.querySelector(".days").innerHTML = date;
console.log(new Date().getDate);
