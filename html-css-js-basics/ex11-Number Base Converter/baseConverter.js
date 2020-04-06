function validate(base, number){
    if(base==2){
        return /^[01]+$/.test(number)
    }
    else if(base==8) {
        return /^[01234567]+$/.test(number)
    }
    else if(base==10) {
        return /^[0123456789]+$/.test(number);
    }
    else{
        return /^[0123456789ABCDE]+$/.test(number)
    }
}


function convert(){

    event.preventDefault()
    var fromBase = Number(document.getElementById("fromBase").value)
    var toBase = Number(document.getElementById("toBase").value)
    var number = document.getElementById("number").value.toUpperCase()
    var result=""
    if(number== ""){
        alert("Cannot leave input field empty!");
    }
    else{
        if(validate(fromBase, number)){
            result = parseInt(number, fromBase).toString(toBase)
            document.getElementById("result").innerHTML= result
        }
        else{
            alert("Entered number does not validate for given base.")
        }
    }

}