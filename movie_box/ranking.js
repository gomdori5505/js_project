const rank = document.querySelector(".rank");

function createRankForm(ranking, movieNm) {
    const ul = document.querySelector(".rank ul");
    const li = document.createElement("li");
    const span = document.createElement("span");

    ul.appendChild(li);
    li.appendChild(span);

    span.innerText = `${ranking}위 ${movieNm}`;
}

function showMovie() {
    const ul = document.createElement("ul");
    rank.appendChild(ul);
    movieRankArr.forEach(e => {
        createRankForm(e.rank, e.movieNm);
    });
}