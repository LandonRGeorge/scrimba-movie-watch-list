import {makeMovieEl} from './utils.js';

const searchFormEl = document.querySelector("#search-form")
const movieContainerEl = document.querySelector("#movie-container")

async function findAndRenderMovie(name) {
  movieContainerEl.innerHTML = ""
  const url = `http://www.omdbapi.com/?apikey=9f61fc22&t=${name}`
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()
  const movie = makeMovieEl(data)
  movieContainerEl.append(movie)
}

searchFormEl.addEventListener("submit", e => {
  e.preventDefault()
  console.log(searchFormEl)
  const searchTerm = searchFormEl.elements["search-term"].value
  searchFormEl.reset()
  findAndRenderMovie(searchTerm)
})