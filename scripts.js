const countdown = () => {
    const countDate = new Date("May 16, 2022 00:00:00").getTime(); // converte a data de lançamento em milissegundo
    const now = new Date().getTime(); // pega a data em que acessar o site e converte em milissegundo
    const gap = countDate - now; // calcula a diferença em milissegundo entre as datas

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    if(textDay < 10) {
        document.querySelector(".days").innerText = "0" + textDay + " " + ":" + " ";
    } else {
        document.querySelector(".days").innerText = textDay + " " + ":";
    }

    if(textHour < 10) {
        document.querySelector(".hours").innerText = "0" + textHour + " " + ":";
    } else {
        document.querySelector(".hours").innerText = textHour + " " + ":";
    }

    if(textMinute < 10) {
        document.querySelector(".minutes").innerText = "0" + textMinute + " " + ":";
    } else {
        document.querySelector(".minutes").innerText = textMinute + " " + ":";
    }

    if(textSecond < 10) {
        document.querySelector(".seconds").innerText = "0" + textSecond;
    } else {
        document.querySelector(".seconds").innerText = textSecond;
    }
};

setInterval(countdown, 1000);
