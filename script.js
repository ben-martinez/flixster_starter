const apiKey = 'afc32718f468d42bf38d7fa3d35dab65'
const searchLink = 'https://api.themoviedb.org/3/search/movie' 
//Ex: https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// no search example is:
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

//w500 is size
const moviePosterLink = 'https://image.tmdb.org/t/p/original/'


const searchFormEl = document.querySelector('#search-form')
const searchInputEl = document.querySelector('#search-input')
const searchButtonEl = document.querySelector('#search-button')

const moviesGridEl = document.querySelector('.movies-grid')
const popularMoviesSectionEl = document.querySelector('.popular-movies-section')

const loadMoreButtonEl = document.querySelector('.load-more-button')
const popupEl = document.querySelector('.popup')

let numPages = 1



/* Handle POPUPS */

//Makes popup disappear 
function closePopup(){
    popupEl.style.display = "none";
}

//Called when click on movie poster
//Displays movie information on popup
//Parameters are strings of movie information
function processPopup(title,releaseDate, posterPath, desc, votes){

    console.log(title);
   

    popupEl.innerHTML = `
        <div class = 'popup-content'>
            <span onclick = "closePopup()" class="close">&times;</span>
            <div class = "popup-content-grid">
            <img src = ${posterPath} class = "popup-poster">
                
            <div class = "movie-info"> 
                <div class = "title-info">
                <h3 class = "movie-title">${title}</h3>
                <p class = "big-text">&emsp; ${releaseDate} </p>
                <p class = "big-text">&emsp; Votes: ${votes}</p>
                </div>
                <p class = "desc">${desc}</p>
            </div>
                

            </div>
        </div>
    `
    popupEl.style.display = "block"
    
    
}

//Close popup when click outside of poppup
window.onclick = function(event) {
    if (event.target == popupEl) {
      closePopup();
    }
  }


/* Handle DISPLAY of all movie posters */

//Display movie posters
function renderMovies(movieData){
    movieData.forEach((movie) => {
        console.log('movie: ', movie);
        //Get whatever movie info we need
        let posterPath = moviePosterLink + movie.poster_path;
        let movieTitle = movie.original_title;
        let releaseDate = movie.release_date.slice(0,4);
        let desc = movie.overview;
        let votes = movie.vote_count;

        //replace all single quotes
        desc = desc.replace(/'/g, '\\\'');

        //replace all double quotes
        desc = desc.replace(/"/g, '\\\"');
    

        //catch if poster not available, I chose not to display it at all. doesn't have a poster, prob not a great movie, I could add a placeholder
        if (posterPath === null) return;

        moviesGridEl.innerHTML += `
        <div class = 'movie-card'>
            <img src = ${posterPath} onclick = "processPopup('${movieTitle}', '${releaseDate}', '${posterPath}', '${desc}', '${votes}' )" >
        </div>
        `
    });
}

/* Handle SEARCH */

//Fetch search results
async function fetchResponse(query){
    //Fetch
    const fullLink = encodeURI(`${searchLink}?api_key=${apiKey}&query=${query}&page=${numPagesSearch}`)

    const response = await fetch(fullLink);
    const results = await response.json();

    movieData = results.results;
    
    renderMovies(movieData)
}

//Get search queries, return to home if search is nothing
searchFormEl.addEventListener('submit', (event) =>{
    //console.log('event: ', event);
    q = searchInputEl.value;
    numPagesSearch = 1;

    //clear render on new search
    if (moviesGridEl) {
        popularMoviesSectionEl.innerHTML = `<h2> Results for ${q}:</h2>`
        moviesGridEl.innerHTML = ``;
    }
    //return to home if search is nothing
    if(q === ''){  
        populateHomePage();
        return;
    } 
    

    loadMoreButtonEl.classList.remove("hidden")

    event.preventDefault();
    
    fetchResponse(q);
})


//Load more movie search results or home page results
loadMoreButtonEl.addEventListener('click', () => {
    if(searchInputEl.value === ''){
        numPagesHome++;
        fetchPopularMovies()
    }else{
        numPages++;     
        fetchResponse(searchInputEl.value)
    }

})




/* Handles HOME PAGE */

//Ex. to get popular movies: 
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//Home page constants:
const popularLink = 'https://api.themoviedb.org/3/movie/popular'
let numPagesHome = 1

async function fetchPopularMovies(query){
    //Fetch
    const fullLink = encodeURI(`${popularLink}?api_key=${apiKey}&page=${numPagesHome}`)

    const response = await fetch(fullLink);
    const results = await response.json();

    movieData = results.results;
    //display to page
    renderMovies(movieData)
}

//Fill in home page with popular movies
function populateHomePage(){
    numPagesHome = 1;
    popularMoviesSectionEl.innerHTML = `
    <h2>Popular Movies</h2>
    `
    fetchPopularMovies();
}

//Init on start, go to home
window.onload = function(){
    populateHomePage();
}

//Infinite scrolling!
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        if(searchInputEl.value === ''){
            numPagesHome++;
            fetchPopularMovies()
        }else{
            numPages++;     
            fetchResponse(searchInputEl.value)
        }
    }
};