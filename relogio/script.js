let digitalEllement = document.querySelector('.digital');
let sEllement = document.querySelector('.p_s');
let mEllement = document.querySelector('.p_m');
let hEllement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalEllement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360/ 60) * second) - 90;
    let mDeg = ((360/ 60) * minute) - 90;
    let hDeg = ((360/ 12) * hour) -90;

    sEllement.style.transform = `rotate(${sDeg}deg)`;
    mEllement.style.transform = `rotate(${mDeg}deg)`;
    hEllement.style.transform = `rotate(${hDeg}deg)`;
}
function fixZero(time){
   return time < 10 ? `0${time}` : time;
}

setInterval(updateClock,1000);
updateClock();