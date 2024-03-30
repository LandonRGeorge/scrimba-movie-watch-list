export let watchList = JSON.parse(localStorage.getItem("watch-list")) ?? []

export function makeMovieEl(movie, removeOnClick=false) {
  const div = document.createElement("div")
  div.classList.add("movie")
  div.innerHTML = `
      <div>
        <img src="${movie.Poster}" alt="">
      </div>
      <div>
        <h2>${movie.Title}</h2>
        <span>${movie.imdbRating}</span>
      </div>
      <div>
        <span>${movie.Runtime}</span>
        <span>${movie.Genre}</span>
        <button class="watchlist-btn"></button>
      </div>
      <div>
        <p>${movie.Plot}</p>
      </div>
  `
  const btnEl = div.querySelector(".watchlist-btn")

  const isInWatchList = watchList.find(m => m.Title === movie.Title) !== undefined

  if (!isInWatchList) {
    btnEl.textContent = "Add"
    btnEl.classList.add("add")
  } else {
    btnEl.textContent = "Remove"
  }

  btnEl.addEventListener("click", () => {
    if (btnEl.classList.contains("add")) {
      watchList.push(movie)
      localStorage.setItem("watch-list", JSON.stringify(watchList))
      btnEl.textContent = "Remove"
    } else {
      watchList = watchList.filter(m => m.Title != movie.Title)
      localStorage.setItem("watch-list", JSON.stringify(watchList))
      if (removeOnClick) {
        div.remove()
        return
      }
      btnEl.textContent = "Add"
    }
    btnEl.classList.toggle("add")
  })

  return div
}