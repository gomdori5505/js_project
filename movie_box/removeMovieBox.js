function removeMovie(event) {
    const btn = event.target;
    const li = btn.parentNode; // parent node for li
    const getMovieList = localStorage.getItem(STORAGE_MOVIE);
    const getNewMovieList = JSON.parse(getMovieList).filter(e => {
        return e.movieNm !== li.querySelectorAll("span")[2].innerText;
    });
    localStorage.setItem(STORAGE_MOVIE, JSON.stringify(getNewMovieList));
    classMyMovieBox.querySelector("ul").removeChild(li);
}