let d = new Date();

function printTime(){
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printTime, 1000);