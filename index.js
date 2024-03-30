const tabOne = document.getElementById("tabone")
const tabTwo = document.getElementById("tabtwo")
const tabThree = document.getElementById("tabthree")

const tabContentOne = document.getElementById("tabcontentone")
const tabContentTwo = document.getElementById("tabcontenttwo")
const tabContentThree = document.getElementById("tabcontentthree")

function tabOneFunction(){
    if(tabContentOne.style.display == "flex"){
    }
    else{
        tabContentOne.style.display = "flex"
        tabContentTwo.style.display = "none"
        tabContentThree.style.display = "none"

        tabOne.classList.add("active")
        tabTwo.classList.remove("active")
        tabThree.classList.remove("active")
    }
}
function tabTwoFunction(){
    if(tabContentTwo.style.display == "flex"){
    }
    else{
        tabContentOne.style.display = "none"
        tabContentTwo.style.display = "flex"
        tabContentThree.style.display = "none"

        tabOne.classList.remove("active")
        tabTwo.classList.add("active")
        tabThree.classList.remove("active")
    }
}
function tabThreeFunction(){
    if(tabContentThree.style.display == "flex"){
    }
    else{
        tabContentOne.style.display = "none"
        tabContentTwo.style.display = "none"
        tabContentThree.style.display = "flex"

        tabOne.classList.remove("active")
        tabTwo.classList.remove("active")
        tabThree.classList.add("active")
    }
}

