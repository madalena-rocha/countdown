const countdown = () => {
    const countDate = new Date("May 15, 2077 00:00:00").getTime(); // converte a data de lançamento em milissegundo
    const now = new Date().getTime(); // pega a data em que acessar o site e converte em milissegundo
    const gap = countDate - now; // calcula a diferença em milissegundo entre as datas

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    const textYear = Math.floor(gap / year);
    const textMonth = Math.floor((gap % year) / month);
    const textDay = Math.floor((gap % month) / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    if(textYear < 10) {
        document.querySelector(".years").innerText = "0" + textYear;
    } else {
        document.querySelector(".years").innerText = textYear;
    }

    if(textMonth < 10) {
        document.querySelector(".months").innerText = "0" + textMonth;
    } else {
        document.querySelector(".months").innerText = textMonth;
    }

    if(textDay < 10) {
        document.querySelector(".days").innerText = "0" + textDay;
    } else {
        document.querySelector(".days").innerText = textDay;
    }

    if(textHour < 10) {
        document.querySelector(".hours").innerText = "0" + textHour;
    } else {
        document.querySelector(".hours").innerText = textHour;
    }

    if(textMinute < 10) {
        document.querySelector(".minutes").innerText = "0" + textMinute;
    } else {
        document.querySelector(".minutes").innerText = textMinute;
    }

    if(textSecond < 10) {
        document.querySelector(".seconds").innerText = "0" + textSecond;
    } else {
        document.querySelector(".seconds").innerText = textSecond;
    }
};

setInterval(countdown, 1000);

const Modal = {
    open() {
      document.querySelector('.modal-overlay').classList.add('active')
      document.querySelector('.main-menu').classList.add('disabled')
      document.querySelector('.lateral-image').classList.add('transparency')
    },
    close() {
      document.querySelector('.modal-overlay').classList.remove('active')
      document.querySelector('.main-menu').classList.remove('disabled')
      document.querySelector('.lateral-image').classList.remove('transparency')
    }
}
