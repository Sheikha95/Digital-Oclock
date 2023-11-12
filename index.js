const hourEL=document.getElementById("hour")

const minutesEL=document.getElementById("minutes")

const secondsEL=document.getElementById("seconds")

const ampmEL=document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm ="AM"

    if(h>12)
    {
        h=h-12
        ampm="PM"
    }

    h= h < 10 ? "0" + h : h;
    m= m < 10 ? "0" + m : m;
    s= s < 10 ? "0" + s : s;

    hourEL.innerText=h;
    minutesEL.innerText=m;
    secondsEL.innerText=s;
    ampmEL,(innerText=ampm)
    setTimeout(() => {
        updateClock()
    }, 1000);

}

updateClock();