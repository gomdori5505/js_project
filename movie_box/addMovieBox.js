function createBoxForm(li) {
    if(classMyMovieBox.querySelector("ul")) { // for prevent to create the ul again
        var ul = classMyMovieBox.querySelector("ul"); // due to var is "function scoped"!!!
    } else {
        var ul = document.createElement("ul");
        classMyMovieBox.appendChild(ul);
    }
    const delBtn = document.createElement("button");
    li.removeChild(li.childNodes[5]); // remove button for saving
    li.appendChild(delBtn); // create new button for removing
    ul.appendChild(li);
    delBtn.innerText = "삭제";

    // 삭제 버튼 클릭시 영화 목록 삭제
    delBtn.addEventListener("click", removeMovie);
}

function saveMovie(event) {
    const btn = event.target;
    const li = btn.parentNode; // parent node for li
    const cloneLi = li.cloneNode(true); // cloneNode must be needed.
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
        createBoxForm(cloneLi);
    } else {
        alert("이미 담아놓은 영화입니다."); // 중복되면 alert
    }
}