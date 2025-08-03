localStorage.setItem("8755116322","avi")
console.log("2")

const loginForm=document.getElementById("login-form")
loginForm.addEventListener('submit',function(e){
    e.preventDefault()
    const loginFormData=new FormData(loginForm)
    const username=loginFormData.get("username")
    const password=loginFormData.get("password")
    if(localStorage.getItem(username) && (password==localStorage.getItem(username))){
        console.log("welcome to facebook")
    }
    else{
        if(localStorage.getItem(username)){
            console.log("wrong password")
        }
        else{
            console.log("no such user exists")
        }        
    }
})

