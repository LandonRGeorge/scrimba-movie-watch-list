import {makeMovieEl, watchList} from './utils.js';

const moviesContainerEl = document.querySelector("#movie-container")

watchList.forEach(m => {
  const movieEl = makeMovieEl(m, true)
  moviesContainerEl.append(movieEl)
})

