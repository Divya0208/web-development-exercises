function convert(){
    event.preventDefault()

    var from = Number(document.getElementById("from").value)
    var number = document.getElementById("number").value
    var to = Number(document.getElementById("to").value)

    if (number == ""){
        alert("Cannot leave input field empty!")
    }
    else{
        let result = number*Math.pow(2,from-to)
        document.getElementById("result").innerHTML=result

    }


}