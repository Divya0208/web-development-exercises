function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "HOURS";

    document.getElementById('hour').innerHTML=h
    document.getElementById('minute').innerHTML=m
    document.getElementById('second').innerHTML=s


    var H = (h >>> 0).toString(2);
    var M = (m >>> 0).toString(2);
    var S = (s >>> 0).toString(2);

    H = (H.length < 6) ? "0" * (6 - H.length) + H : H;
    M = (M.length < 6) ? "0" * (6 - M.length) + M : M;
    S = (S.length < 6) ? "0" * (6 - S.length) + S : S;

    document.getElementById("hours").innerHTML = ((H[0] == 1) ? "⚫" : "⚪") + ((H[1] == 1) ? "⚫" : "⚪") + ((H[2] == 1) ? "⚫" : "⚪") + ((H[3] == 1) ? "⚫" : "⚪") + ((H[4] == 1) ? "⚫" : "⚪") + ((H[5] == 1) ? "⚫" : "⚪");
    document.getElementById("minutes").innerHTML = ((M[0] == 1) ? "⚫" : "⚪") + ((M[1] == 1) ? "⚫" : "⚪") + ((M[2] == 1) ? "⚫" : "⚪") + ((M[3] == 1) ? "⚫" : "⚪") + ((M[4] == 1) ? "⚫" : "⚪") + ((M[5] == 1) ? "⚫" : "⚪");
    document.getElementById("seconds").innerHTML = ((S[0] == 1) ? "⚫" : "⚪") + ((S[1] == 1) ? "⚫" : "⚪") + ((S[2] == 1) ? "⚫" : "⚪") + ((S[3] == 1) ? "⚫" : "⚪") + ((S[4] == 1) ? "⚫" : "⚪") + ((S[5] == 1) ? "⚫" : "⚪");

    setTimeout(showTime, 1000);
}


showTime();