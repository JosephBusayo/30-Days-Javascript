const secondHand = document.querySelector('.second-hand') //finds the html element with the named class
const minHand = document.querySelector('.min-hand') 
const hourHand = document.querySelector('.hour-hand') 



function setDate() {
    const now = new Date();

    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;//added 90 is due to offset of 90deg earlier made in the html
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //minutes
    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //hour
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000); 