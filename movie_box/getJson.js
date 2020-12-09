const KEY = "eef536b62bd88c81e94777d5de915cc2";
const DATE = yesterdayDate();
const HOST_KEY = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`;

const classRank = document.querySelector(".rank");
const classMyMovieBox = document.querySelector(".myMovieBox");
const STORAGE_MOVIE = "storageMovie";

// 초기화
let movieRankArr = [];
let movieType = "";
let movieDateRange = "";
let storageArr = [];
if(localStorage.getItem(STORAGE_MOVIE)) {
  storageArr = JSON.parse(localStorage.getItem(STORAGE_MOVIE));
}


//api json 형태로 받아오기 (get 방식)
fetch(HOST_KEY)
  .then(res => {
    // response 처리
    console.log(res);
    // 응답을 JSON 형태로 파싱
    return res.json();
  })
  .then(data => {
    // json 출력
    console.log(data);
    data.boxOfficeResult.dailyBoxOfficeList.forEach(element => {
      movieRankArr.push(element);
    }); // json으로 받은 결과 내 dailyBoxOfficeList 데이터 foreach로 array에 push
    movieType = data.boxOfficeResult.boxofficeType;
    movieDateRange = data.boxOfficeResult.showRange;
    showMovie(); // show the Movie Rank
    showMovieBox(); // show the My Movie Box which was storaged before
  })
  .catch(err => {
    // error 처리
    console.log('Fetch Error', err);
  });


// 어제 기준 날짜 출력
// date form -> yyyymmdd
function yesterdayDate() {
  const yesDate = (d => new Date(d.setDate(d.getDate()-1)))(new Date);
  const year = yesDate.getFullYear();
  const month = addZero(yesDate.getMonth());
  const day = addZero(yesDate.getDate());
  
  return `${year}${month}${day}`;
}

// 한자리 수 월,일 앞 0 추가
function addZero(num) {
  if(num < 10) {
    return `0${num}`;
  }else {
    return num;
  }
}