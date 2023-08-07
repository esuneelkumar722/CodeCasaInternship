function setClockHands() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
  
    let secondHand = document.querySelector(".sec-hand");
    let minuteHand = document.querySelector(".min-hand");
    let hourHand = document.querySelector(".hr-hand");
  
    let secondsDegrees = 6*seconds;
    let minutesDegrees = 6*minutes;
    let hoursDegrees =   30*hours + minutes/2;
  
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
    
  }

  setInterval(setClockHands, 1000);
  
  