console.log("Huston, we have connection");

const countDown = () => {
    const countDate = new Date("June 30, 2021 00:00:00").getTime();
    const now = (new Date).getTime();
    const gap = countDate-now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute* 60;
    const day = hour * 24;

    console.log("gap",gap);
    console.log("day",day);

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);

    console.log("hello");
    console.log(textDay,textHour,textMinute,textSecond);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
};


setInterval(countDown,1000);