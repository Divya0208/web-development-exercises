function changeColor()
{
    let red=document.getElementById("Red").value;
    let green=document.getElementById("Green").value;
    let blue=document.getElementById("Blue").value;
    let opacity=document.getElementById("Opacity").value;
    document.getElementById("Color").style.backgroundColor=`rgba(${red},${green},${blue},${opacity})`;
    red=parseInt(red);
    green=parseInt(green);
    blue=parseInt(blue);
    let color=`#${hex(red)}${hex(green)}${hex(blue)}` ;
    document.getElementById("Hexadec").innerHTML=color;
}

function hex(something) 
{
    var hex = something.toString(16);
    if (something < 16) {
        hex = "0" + hex;
    }
    return hex;
}