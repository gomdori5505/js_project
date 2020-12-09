function createMovieBoxForm(classNm, rank, rankInten, movieNm, salesAcc, audiAcc) {
    const ul = classNm.querySelector("ul"),
    li = document.createElement("li"),
    spanRank = document.createElement("span"),
    spanName = document.createElement("span"),
    spanRankInten = document.createElement("span"),
    spanSale = document.createElement("span"),
    spanAudi = document.createElement("span"),
    delBtn = document.createElement("button");

    ul.appendChild(li);
    li.appendChild(spanRank);
    li.appendChild(spanRankInten);
    li.appendChild(spanName);
    li.appendChild(spanSale);
    li.appendChild(spanAudi);
    li.appendChild(delBtn);

    spanRank.innerHTML = rank;
    spanRankInten.innerHTML = rankInten;
    spanName.innerHTML = movieNm;
    spanSale.innerHTML = salesAcc;
    spanAudi.innerHTML = audiAcc;
    delBtn.innerText = `삭제`;

    // 삭제 버튼 클릭시 영화 목록 삭제
    delBtn.addEventListener("click", removeMovie);
}

function getMovie(movieList) {
    const ul = document.createElement("ul");
    classMyMovieBox.appendChild(ul);
    JSON.parse(movieList).forEach(e => {
        createMovieBoxForm(classMyMovieBox, e.rank, e.rankInten, e.movieNm, e.salesAcc, e.audiAcc);
    });
}

function showMovieBox() {
    getMovieList = localStorage.getItem(STORAGE_MOVIE);
    if(getMovieList !== null) {
        getMovie(getMovieList);
    }
}