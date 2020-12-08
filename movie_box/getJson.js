const KEY = "eef536b62bd88c81e94777d5de915cc2";
const DATE = yesterdayDate();
const HOST_KEY = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`;
let movieRankArr = [];
let movieType = "";
let movieDateRange = "";

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
    });
    movieType = data.boxOfficeResult.boxofficeType;
    movieDateRange = data.boxOfficeResult.showRange;
    showMovie();
  })
  .catch(err => {
    // error 처리
    console.log('Fetch Error', err);
  });

  function yesterdayDate() {
    const yesDate = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
    const year = yesDate.getFullYear();
    const month = addZero(yesDate.getMonth());
    const day = addZero(yesDate.getDate());
    
    return `${year}${month}${day}`;
    
  }

  function addZero(num) {
    if(num < 10) {
      return `0${num}`;
    }else {
      return num;
    }
  }