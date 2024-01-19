
import initialMovies from './movie-data.json'
console.log(initialMovies)
import handleSubmit from './component_functions/form'
import { getMovies,removeMovie,initMoviesIfEmpty } from './component_functions/local-storage.js';
//import barChart from './component_functions/chart'

//we use this function as a helper function because each time the page refreshes
// or someone deletes  a movie we wamt to be able to refresh with the same default movies
export const renderMovies = () => {
const ul = document.querySelector('.movie-list')
ul.innerHTML = '' // empty list

const movies = getMovies()
console.log(movies);
  movies.forEach(movie =>{
    const li = document.createElement('li')    
    li.className = 'movie-card'
    li.innerHTML = `
    <h2 class="movie-title">${movie.title}</h2>
    <p class = "movie-critic-score">Critic Score:${movie.criticScore}</p>
    <p class = "movie-audience-critic"> Audience Score:${movie.audienceScore}</p>
    <p class = "movie-domestic-score"> Domestic Score$${movie.domestic}</p>
    <p class = "movie-genre"> Genre:${movie.genre}</p>
    `
    ul.append(li)
  })
}
//should delete  whole li  that  the  button is in

const handleRemoveMovie = (e) => {
  if (e.target.classList.matches('movie-card')) {  //matches is so that the browser knows that the li is a button
    const movieTitle = e.target.querySelector('h2').textContent;
    console.log(movieTitle)//grab text content to remove
    removeMovie(movieTitle); // update localStorage
    renderMovies(); // re-render the whole list

  }
  }

//this command allows  us to click on a movie card by click so it neeeds a listener so it the listerner can remove it onclick
const handleDefaultClick = ()=>{
  localStorage.clear()
}

//this is the main where all the main eventlisteners belong.
const init = () => {
  // the startup
  //events propagate
  renderMovies();
  document.querySelector('.the-full-form').addEventListener('submit',handleSubmit)
  initMoviesIfEmpty() //first time user loads, adds movie to local storage
  document.querySelector('.movie-list').addEventListener('click', handleRemoveMovie)
  document.querySelector('.default').addEventListener('click', handleDefaultClick)

}

init();
