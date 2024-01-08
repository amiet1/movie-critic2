
import initialMovies from '/src/movie-data.json';

//helper functions for the browser to understand and store the local storage

//needed to set the data to a value
const setLocalStorageKey = (key,data) => {
    localStorage.setItem(key, JSON.stringify(data)) //stringify all data because local storage on accepts strings 
  }

  //this fucntion allows us to pull the data and use it inside of the main
  const getLocalStorageKey = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key)) //parse the data that are now strings into ojects
    } catch (err) {
      console.error(err);
    }
  }


//focused helper fucntions 
export const getMovies = () => getLocalStorageKey('movies')

export const setMovies = (movies) => setLocalStorageKey('movies',movies)

export const addMovies = (movie) => {
    const movies = getMovies();
    console.log(movies);
    setMovies([movie , ...movies]);
}

//get from ls
//modify it(filter thru)
//set it back

export const removeMovie = (movieToRemove) => {
  const movies = getMovies();
  const filteredMovies = movies.filter((movie) => movie.title !== movieToRemove);
  setMovies(filteredMovies);
}
 

// a fucntion created to add movies if there are none on the screen
export const initMoviesIfEmpty = () => {
  if(!getMovies())setMovies(initialMovies)
    
}
