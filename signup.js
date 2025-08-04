const signupForm=document.getElementById("signup-form")
const birthdaySelectDate=document.getElementById("birthday-select-date")
const birthdaySelectYear=document.getElementById("birthday-select-year")
const birthdaySelectMonth=document.getElementById("birthday-select-month")
const phoneOrEmailRegex = /^(?:\d{10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

function validateInput(input) {
    return phoneOrEmailRegex.test(input);
}


for(let i=1; i<=31; i++){
    birthdaySelectDate.innerHTML+=`
    <option value=${i}>${i}</option>
    `
}

const curYear =new Date().getFullYear()

for (let i=curYear;i>=1900;i--){
    birthdaySelectYear.innerHTML+=`<option value=${i}>${i}</option>`
}

signupForm.addEventListener('submit',function(e){
    e.preventDefault()
    if (!signupForm.checkValidity()) {
        signupForm.reportValidity(); 
        return;
    }
    let userAge=birthdaySelectYear.value+"-"+birthdaySelectMonth.value+"-"+birthdaySelectDate.value
    console.log(userAge)
    let checkUserAge=new Date(userAge)
    console.log(checkUserAge)
    if (!checkUserAge){
        return
    }
    const signupFormData=new FormData(signupForm)
    const usernameSignup=signupFormData.get("username-signup")
    const usernameSignupConfirm=signupFormData.get("username-signup-confirm")
    const passwordSignup=signupFormData.get("password-signup")
    if(usernameSignup===usernameSignupConfirm){
        if(validateInput(usernameSignup)){
            let storageArr=[]
            for(let i=0;i<localStorage.length;i++){
                storageArr.push(localStorage.key(i))
            }
            if(storageArr.includes(usernameSignup)){
                alert("The username/Phone no. is already registered")
            }
            else{
                console.log(storageArr)
                localStorage.setItem(usernameSignup,passwordSignup)
                alert("New user added")
            }

        }
        else{
            alert("Please enter a valid email id or a 10 digit phone number")
        }

    }
    else{
        alert("Email/Mobile no. doesn't match.")
    }

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

