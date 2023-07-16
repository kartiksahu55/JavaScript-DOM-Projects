const loadPercentage = document.getElementById("loadPercentage");
const lodingBar = document.querySelector(".loading_bar-front");

let loadX = 0;

const updateLoadingBar = () => {
  loadPercentage.innerText = loadX + "%";
  lodingBar.style.width = loadX + "%";
  loadX++;
  if (loadX <= 100) {
    setTimeout(updateLoadingBar, 30);
  }
};
updateLoadingBar();
