const clockDiv = document.querySelector(".clock"),
clockTitle = clockDiv.querySelector("h2");

function getDateTime() {
    const dateTime = new Date;
    const year = dateTime.getFullYear(),
    month = dateTime.getMonth(),
    day = dateTime.getDate(),
    hour = dateTime.getHours(),
    convertedHour = hour < 13 ? hour : hour-12,
    minute = dateTime.getMinutes(),
    second = dateTime.getSeconds(),
    amPm = hour < 13 ? "AM" : "PM";

    return `${addZero(year)}-${addZero(month)}-${addZero(day)} ${addZero(convertedHour)}:${addZero(minute)}:${addZero(second)} ${amPm}`;
}

function addZero(t) {
    if(t < 10) {
        return `0${t}`
    } else return t;
}

function innerText(dom, text) {
    return dom.innerText = text;
} 

function init() {
    innerText(clockTitle, getDateTime());
    setInterval(() => {
        innerText(clockTitle, getDateTime());
    }, 1000); 
}

init();