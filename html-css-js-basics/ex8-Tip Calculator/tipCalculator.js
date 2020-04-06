

function calculate(){

    event.preventDefault()

    var billamount = Number(document.getElementById("billAmount").value)
    var percentage = Number(document.getElementById("tipPercentage").value)
    var people = Number(document.getElementById("noOfPeople").value)

    console.log(billamount + " " + percentage +" "+ people)

    var amount = (billamount * (100 + percentage) / 100) /people
    console.log(amount);

    document.querySelector("h2").innerHTML = "You have to pay : "+ amount
}