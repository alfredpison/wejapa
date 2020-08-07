var ms = 0, s = 0, m = 0 ;
var timer;

var swContent = document.querySelector('.outputt');
var lapHold = document.querySelector('.holder');

function startTime() {
    swContent.textContent = recordTime();
    ms++;

    if(ms / 100 === 1){
        ms = 0;
        s++;
        
        if(s / 60 === 1){
            s = 0;
            m++;
        }
    }
}
function start() {
    if(!timer) {
        timer = setInterval(startTime, 10);
    }
}
function pause() {
    counterStop();
}
function reset() {
    counterStop();
    ms = 0;
    s = 0;
    m = 0;
    swContent.textContent = recordTime();
}
function counterStop() {
    clearInterval(timer);
    timer = false;
}
function recordTime() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}
function lap() {
    if(timer){
        var li = document.createElement('li');
        li.innerText = recordTime();
        lapHold.appendChild(li);
    }
}
function totalreset() {
    lapHold.innerHTML = "";
}
