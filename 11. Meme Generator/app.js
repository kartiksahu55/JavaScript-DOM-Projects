const memeApi = "https://meme-api.com/gimme/wholesomememes";

const generateBtn = document.getElementById("generateBtn");
const container = document.getElementById("container");

const displayLoading = () => {
  container.innerHTML = `
      <h3>Loading...</h3>
      `;
};

const displayData = (data) => {
  container.innerHTML = `
      <img src=${data.url} alt="Memes">
      <h3>Meme by: ${data.author}</h3>
      `;
};

async function apiCall() {
  displayLoading();
  const response = await fetch(memeApi);
  const data = await response.json();
  console.log("data");
  displayData(data);
}
apiCall();

generateBtn.addEventListener("click", apiCall);
