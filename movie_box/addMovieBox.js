function storageMovieList(liArr) {
    const storageObj = {
        rank: liArr[0],
        rankInten: liArr[1],
        movieNm: liArr[2],
        salesAcc: liArr[3],
        audiAcc: liArr[4]
    };

    storageArr.push(storageObj);
    localStorage.setItem(STORAGE_MOVIE, JSON.stringify(storageArr)); //obj형태로 push 되어서 stringify로 string 형태로 변환시켜줘야함
}

function createBoxForm(li) {
    if(classMyMovieBox.querySelector("ul")) { // for prevent to create the ul again
        var ul = classMyMovieBox.querySelector("ul"); // due to var is "function scoped"!!!
    } else {
        var ul = document.createElement("ul");
        classMyMovieBox.appendChild(ul);
    }
    const delBtn = document.createElement("button");
    const liArr = [];
    li.removeChild(li.childNodes[5]); // remove button for saving
    li.appendChild(delBtn); // create new button for removing
    ul.appendChild(li);
    delBtn.innerText = "삭제";

    li.querySelectorAll("span").forEach(e => {
        console.log(e.innerHTML);
        liArr.push(e.innerHTML);
    });

    // 삭제 버튼 클릭시 영화 목록 삭제
    delBtn.addEventListener("click", removeMovie);

    return liArr;
}

function saveMovie(event) {
    const btn = event.target;
    const li = btn.parentNode; // parent node for li
    const cloneLi = li.cloneNode(true); // cloneNode must be needed. closeNode 안하면 부모노드 그대로 이동됨
    var checkMovie = false; // 중복여부 체크용 변수 (var) 초기화

    // prevent for duplicate adding
    classMyMovieBox.querySelectorAll("li").forEach(e => {
        const addedMovie = e.childNodes[2].innerHTML;
        const newAddMovie = cloneLi.childNodes[2].innerHTML;
        if(addedMovie == newAddMovie) {
            checkMovie = true; // 중복되면 true
        }
    });

    if(checkMovie !== true) {
        storageMovieList(createBoxForm(cloneLi));
    } else {
        alert("이미 담아놓은 영화입니다."); // 중복되면 alert
    }
}