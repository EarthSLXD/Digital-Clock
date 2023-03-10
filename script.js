function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();

const clock = document.querySelector('.clock')
const btnWhite = document.querySelector('.btn-white')
const btnBlack = document.querySelector('.btn-black')
const cC = document.querySelector('.c-c')
const digitalClock = document.querySelector('.digital-clock')
const body = document.querySelector('.body')
const btnRandom = document.querySelector('.btn-random')

btnWhite.addEventListener('click',()=>{
    clock.classList.add('active')
    btnWhite.classList.add('active')
    btnBlack.classList.add('active')
    cC.classList.add('active')
    digitalClock.classList.add('active')
    body.classList.add('active')
    btnRandom.classList.add('active')
})

btnBlack.addEventListener('click',()=>{
    clock.classList.remove('active')
    btnWhite.classList.remove('active')
    btnBlack.classList.remove('active')
    cC.classList.remove('active')
    digitalClock.classList.remove('active')
    body.classList.remove('active')
    btnRandom.classList.remove('active')
})

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  btnRandom.addEventListener("click", setBg);
  setBg();

