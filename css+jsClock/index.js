const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const secondDigital = document.querySelector('.second-digital');
const minuteDigital = document.querySelector('.minute-digital');
const hourDigital = document.querySelector('.hour-digital');

function setDate() {
  // console.log('Hello');
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/ 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log('sec', seconds);
  
  
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/ 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  console.log('minutes', minutes);
  
  const hours = now.getHours();
  const hoursDegrees = ((hours/ 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log('hours', hours);

  const digitalClock = document.querySelector('.digital-clock');
  digitalClock.innerHTML = `${hours} : ${minutes} : ${seconds}`
  
}

setInterval(setDate, 1000);