function showClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
   
    switch (true) {
        case h == 0:
            break;
        case h = 12:
            break;

        case h > 11:
            break;

        case session = "PM":
            break;
    }


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("mydigitalclock").innerText = time;
    document.getElementById("mydigitalclock").textContent = time;

    setTimeout(showClock, 1000);

}

showClock();