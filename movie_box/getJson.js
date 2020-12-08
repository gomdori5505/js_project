const KEY = "eef536b62bd88c81e94777d5de915cc2";
const DATE = "20201201";
const HOST_KEY = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`;
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
    data.boxOfficeResult.weeklyBoxOfficeList.forEach(element => {
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