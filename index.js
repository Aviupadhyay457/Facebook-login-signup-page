

const loginForm=document.getElementById("login-form")
loginForm.addEventListener('submit',function(e){
    e.preventDefault()
    const loginFormData=new FormData(loginForm)
    const username=loginFormData.get("username")
    const password=loginFormData.get("password")
    if(localStorage.getItem(username) && (password==localStorage.getItem(username))){
        alert("welcome to facebook")
    }
    else{
        if(localStorage.getItem(username)){
            alert("wrong password")
        }
        else{
            alert("no such user exists")
        }        
    }
})

