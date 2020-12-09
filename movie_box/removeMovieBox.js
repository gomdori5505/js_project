function removeMovie(event) {
    const btn = event.target;
    const li = btn.parentNode; // parent node for li
    classMyMovieBox.querySelector("ul").removeChild(li);
}