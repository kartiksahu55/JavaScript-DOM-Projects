const ApiUrl = "https://api.github.com/users/";
const container = document.getElementById("container");
const search = document.getElementById("searchBox");

const getApi = async (userName) => {
  if (userName === "initial@getApiCall") {
    container.innerHTML = `
        <h2 style="text-align:center;">Welcome! <br> Enter a GitHub Username for profile Details.</h2>
        `;
        return
  }
  const response = await fetch(ApiUrl + userName);
  const data = await response.json();
  console.log(data.message);

  if (data.message !== "Not Found") {
    container.innerHTML = `
    <img src="${data.avatar_url}" id="avatar" alt="avatar">
        <div class="userData">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <ul class="useDetails">
                <li> ${data.followers} Followers </li>
                <li> ${data.following} Following </li>
                <li> ${data.public_repos} Repos </li>
            </ul>
            <div id="repos">
                
            </div>
    `;

    getRepos(userName);
  } else {
    container.innerHTML = `
    <h2>GitHub Username dose not exit! <br> Please Enter a Valid Username.</h2>
    `;
  }
};

const getRepos = async (userName) => {
  const response = await fetch(ApiUrl + userName + "/repos");
  const data = await response.json();
  const repos = document.getElementById("repos");

  data.map((item) => {
    const repo = document.createElement("a");
    repo.classList.add("repo");
    repo.href = item.html_url;
    repo.target = "_blank";
    repo.innerText = item.name;
    repos.appendChild(repo);
  });
};

getApi("initial@getApiCall");

const formSubmit = () => {
  if (search.value != "") {
    getApi(search.value);
  }
  console.log(search.value);
  return false;
};

search.addEventListener("change",formSubmit) 