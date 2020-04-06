let currentImage = 0;
document.getElementsByClassName("Indicator")[currentImage].classList.add("currentSlide")

function previous(){
    event.preventDefault()
    document.getElementsByClassName("Indicator")[currentImage].classList.remove("currentSlide")
    document.getElementsByClassName("Image")[currentImage].classList.remove("Show")
    if(currentImage==0){
        currentImage=5
    }
    else{
        currentImage -= 1
    }
    document.getElementsByClassName("Image")[currentImage].classList.add("Show")
    document.getElementsByClassName("Indicator")[currentImage].classList.add("currentSlide")
}

function next(){
    event.preventDefault()
    document.getElementsByClassName("Indicator")[currentImage].classList.remove("currentSlide")
    document.getElementsByClassName("Image")[currentImage].classList.remove("Show")
    if(currentImage==5){
        currentImage=0
    }
    else{
        currentImage += 1
    }
    document.getElementsByClassName("Image")[currentImage].classList.add("Show")
    document.getElementsByClassName("Indicator")[currentImage].classList.add("currentSlide")
}

function showImage(x){
    event.preventDefault()
    document.getElementsByClassName("Indicator")[currentImage].classList.remove("currentSlide")
    document.getElementsByClassName("Image")[currentImage].classList.remove("Show")
    currentImage = Number(x)
    document.getElementsByClassName("Image")[currentImage].classList.add("Show")
    document.getElementsByClassName("Indicator")[currentImage].classList.add("currentSlide")

}