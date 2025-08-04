const signupForm=document.getElementById("signup-form")
const birthdaySelectDate=document.getElementById("birthday-select-date")

for(let i=0; i<=31; i++){
    birthdaySelectDate.innerHTML+=`
    <option>${i}</option>
    `
}

signupForm.addEventListener('submit',function(e){
    e.preventDefault()
    const signupFormData=new FormData(signupForm)
    const usernameSignup=signupFormData.get("username-signup")
    const passwordSignup=signupFormData.get("password-signup")
    localStorage.setItem(usernameSignup,passwordSignup)
    alert("New user added")
})

const loginForm=document.getElementById("login-form")
loginForm.addEventListener('submit',function(e){
    e.preventDefault()
    const loginFormData=new FormData(loginForm)
    const username=loginFormData.get("username")
    const password=loginFormData.get("password")
    if(localStorage.getItem(username) && (password===localStorage.getItem(username))){
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
