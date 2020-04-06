function convert() {

    event.preventDefault()
    let fromUnit = document.getElementById("fromUnit").value
    let toUnit = document.getElementById("toUnit").value
    let fromTemp = Number(document.getElementById("fromTemp").value)
    let toTemp;

    if (fromUnit == toUnit) {
        toTemp = fromTemp;
    } else {
        switch (fromUnit) {
            case "C":
                switch (toUnit) {
                    case "K":
                        toTemp = fromTemp + 273.15;
                        break;
                    case "F":
                        toTemp = fromTemp * 9 / 5 + 32;
                        break;
                    default:
                        alert("something is wrong in toUnit with C");
                        break;
                }
                break;
            case "K":
                switch (toUnit) {
                    case "C":
                        toTemp = fromTemp - 273.15;
                        break;
                    case "F":
                        (fromTemp - 273.15) * 9 / 5 + 32;
                        break;
                    default:
                        alert("something is wrong in toUnit with K");
                        break;
                }
                break;
            case "F":
                switch (toUnit) {
                    case "K":
                        (fromTemp - 32) * 5 / 9 + 273.15;
                        break;
                    case "C":
                        (fromTemp - 32) * 5 / 9;
                        break;
                    default:
                        alert("something is wrong in toUnit with F");
                        break;
                }
                break;
            default:
                alert("something is wrong in fromUnit");
                break;
        }
    }


    document.getElementById("toTemp").setAttribute("placeholder", toTemp)
}