const arrow = document.querySelectorAll(".arrow div");

console.log(arrow[2]);

function clockSet() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const hourDegree = (hour / 12) * 360;
  const minuteDegree = (minute / 60) * 360;
  const secondDegree = (second / 60) * 360;

  arrow[0].style.transform = `rotate(${hourDegree}deg)`;
  arrow[1].style.transform = `rotate(${minuteDegree}deg)`;
  arrow[2].style.transform = `rotate(${secondDegree}deg)`;

  console.log(secondDegree);
}

setInterval(clockSet, 1000);
