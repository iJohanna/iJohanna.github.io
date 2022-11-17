let username = document.getElementById("username")
let password = document.getElementById("password")
let desc = document.getElementById("description")

document.getElementById("login").onmousedown = (event) => {
    if(username.value == "Hunster1028" && password.value=="happybirthdayiloveyou"){
        location.assign('home.html')
    } else {
        username.value = ""
        password.value = ""
        desc.innerHTML = "Try Again"
    }
}
