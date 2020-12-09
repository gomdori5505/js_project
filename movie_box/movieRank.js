const classRank = document.querySelector(".rank");
const classMyMovieBox = document.querySelector(".myMovieBox");

function createBoxForm(parentLi) {
    const ul = classMyMovieBox.querySelector("ul");
    console.log(parentLi);
    ul.innerHTML = parentLi;
}

function saveMovie(event) {
    const btn = event.target;
    const li = btn.parentNode;
    createBoxForm(li);
}

function createRankForm(rank, rankIntern, movieNm, salesAcc, audiAcc) {
    const ul = classRank.querySelector("ul"),
    li = document.createElement("li"),
    spanRank = document.createElement("span"),
    spanName = document.createElement("span"),
    spanRankIntern = document.createElement("span"),
    spanSale = document.createElement("span"),
    spanAudi = document.createElement("span"),
    saveBtn = document.createElement("button");

    ul.appendChild(li);
    li.appendChild(spanRank);
    li.appendChild(spanRankIntern);
    li.appendChild(spanName);
    li.appendChild(spanSale);
    li.appendChild(spanAudi);
    li.appendChild(saveBtn);

    if(rankIntern == 0) {
        rankIntern = `-`;
    } else if(rankIntern < 0) {
        rankIntern = `⬇${Math.abs(rankIntern)}`;
    } else {
        rankIntern = `⬆${rankIntern}`;
    }

    spanRank.innerText = `${rank}위`;
    spanRankIntern.innerText = `${rankIntern}`;
    spanName.innerText = `${movieNm}`;
    spanSale.innerText = `누적 ₩ ${salesAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    spanAudi.innerText = `누적 ${audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 명`;
    saveBtn.innerText = `담기`;
    
    saveBtn.addEventListener("click", saveMovie)
}

function showMovie() {
    const ul = document.createElement("ul");
    classRank.appendChild(ul);
    movieRankArr.forEach(e => {
        createRankForm(e.rank, e.rankInten, e.movieNm, e.salesAcc, e.audiAcc);
    });
}