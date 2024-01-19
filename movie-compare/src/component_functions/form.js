import { addMovies } from "./local-storage";
 import {renderMovies} from '../main.js';

 //extracts data from form
 //adds data to local storage 
 // renders the data from ls
// extract data from object and add to local. storage 

//once submit is clicked on it gets added to saved to ls
const handleSubmit = (e) => {
    e.preventDefault()
   const form = e.target;
   //grab the form data
   const formData = new FormData(e.target);
   const dataObj = Object.fromEntries(formData) //update local storage 
   console.log()
   addMovies(dataObj);//re-render the whole list
   const ul = document.querySelector('.movie-list')
   const li = document.createElement('li')   
    li.className = 'movie-card'
   li.innerHTML = `
   <h2 class="movie-title">${dataObj.title}</h2>
   <p class = "movie-critic-score">Critic Score:${dataObj.criticScore}</p>
   <p class = "movie-audience-critic"> Audience Score:${dataObj.audienceScore}</p>
   <p class = "movie-domestic-score"> Domestic Score$${dataObj.domestic}</p>
   <p class = "movie-genre"> Genre:${dataObj.genre}</p>
   `
   ul.prepend(li)
   form.reset();

   }
//alert(renderMovies)
export default handleSubmit;