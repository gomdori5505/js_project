function createRankForm(classNm, rank, rankInten, movieNm, salesAcc, audiAcc) {
    const ul = classNm.querySelector("ul"),
    li = document.createElement("li"),
    spanRank = document.createElement("span"),
    spanName = document.createElement("span"),
    spanRankInten = document.createElement("span"),
    spanSale = document.createElement("span"),
    spanAudi = document.createElement("span"),
    saveBtn = document.createElement("button");

    ul.appendChild(li);
    li.appendChild(spanRank);
    li.appendChild(spanRankInten);
    li.appendChild(spanName);
    li.appendChild(spanSale);
    li.appendChild(spanAudi);
    li.appendChild(saveBtn);

    if(rankInten == 0) {
        rankInten = `-`;
    } else if(rankInten < 0) {
        rankInten = `<p style="color: blue;">⬇${Math.abs(rankInten)}</p>`;
    } else {
        rankInten = `<p style="color: red;">⬆${rankInten}</p>`;
    }

    spanRank.innerText = `${rank}위`;
    spanRankInten.innerHTML = `${rankInten}`;
    spanName.innerText = `${movieNm}`;
    spanSale.innerText = `누적 ₩ ${salesAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    spanAudi.innerText = `누적 ${audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 명`;
    saveBtn.innerText = `담기`;
    
    // 담기 버튼 클릭시 my movie box에 추가
    saveBtn.addEventListener("click", saveMovie);
}

function showMovie() {
    const ul = document.createElement("ul");
    classRank.appendChild(ul);
    movieRankArr.forEach(e => {
        createRankForm(classRank, e.rank, e.rankInten, e.movieNm, e.salesAcc, e.audiAcc);
    }); // 필요한 정보만 foreach로 뽑아내서 createForm와 함께 넘김
}