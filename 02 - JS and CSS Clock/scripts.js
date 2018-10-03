window.onload =  function() {

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondHand = document.querySelector('.second-hand');
    const secondsDegrees = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    let minutes = now.getMinutes();
    const minuteHand = document.querySelector('.min-hand');
    const minsDegrees = minutes * 6 + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(minutes);

    let hour = now.getHours();
    const hourHand = document.querySelector('.hour-hand');
    if (hour > 12) {
      hour = hour - 12;
    }
    const hourDegrees = (hour * 30 + 90) + ((minutes/60) * 30);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log('hour ' + hour);
  }

setInterval(setDate, 1000);

};