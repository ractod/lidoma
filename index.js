const menu = document.querySelector("menu")
const menuButton = document.querySelector(".fa-bars")
const error = document.querySelector("span")
const input = document.querySelector("input")
const signButton = document.querySelector("button")

let level = 1 ; 

signButton.addEventListener("click" , signupHandler )
menuButton.addEventListener("click" , openCloseMenu )
for (let i of document.querySelectorAll("a")){
    i.addEventListener("click" , (e) => {
        menu.classList.remove("transform")
    })
}

function openCloseMenu(){
    menu.classList.toggle("transform")
}

function signupHandler(e){
    e.preventDefault()
    const value = input.value 

    if ( level == 1 ){
        if ( value == "endup" ){
            input.value = ""
            input.placeholder = "نام خود را وارد کنید"
            error.innerText = ""
            level++
        }else{
            error.innerText = "یک تیم معتبر را انتخاب کنید"
            error.style.color = "red"
        }
    }else{
        document.querySelector(".sign-part-container").innerHTML = `
            <img src="./fuck.png">
        `
    }
}