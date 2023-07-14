const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieContainer = document.getElementById("movieContainer");

const getVideos = async (api) => {
  const response = await fetch(api);
  const data = await response.json();

  showmovies(data.results);
};

const showmovies = (data) => {
    movieContainer.innerHTML=""
  data.map((movie) => {
    let movies = document.createElement("div");
    movies.classList.add("movieBox");
    movies.innerHTML = `
    <img src=${IMGPATH + movie.poster_path} alt="" />
        <div class="overlay">
            <div class="title">
                <h2>${movie.original_title}</h2>
                <span>${movie.vote_average}</span>
            </div>
             <div class="overview">
                <h2>Overview</h2>
                <p>${movie.overview}</p>
            </div>
        </div>
        `;
    movieContainer.appendChild(movies);
    // console.log(movie);
  });
};

getVideos(APIURL);

const getSearchMovies=async (event)=>{
    
}

document.getElementById("SearchBox").addEventListener("keyup", async(event)=>{
    if(event.key==="Enter"){
        const response=await fetch(SEARCHAPI+event.target.value)
        const data=await response.json()
        console.log(data);
        showmovies(data.results)
    }
});
