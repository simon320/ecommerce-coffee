// Login
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const nameUser = document.getElementsByClassName("name");
const terms = document.getElementById("terms");
const buttons = document.getElementsByClassName("buttons");
const containerInput = document.getElementsByClassName("container-input");
const login = document.getElementsByClassName("login");
let signUpClick = 1;
let signInClick = 0;

signUp.style.borderBottom = "2px solid #e4842b";
signIn.style.cursor = "pointer";
buttons[1].style.display = "none"; 

signIn.onclick = function() {
    if(signInClick == 0)
    {
        signIn.classList.add("showSignIn");
        signInClick = 1;

        signUp.style.borderBottom = "none";
        signUp.style.cursor = "pointer";
        nameUser[0].style.display = "none";
        nameUser[1].style.display = "none";
        terms.style.display = "none"
        buttons[0].style.display = "none"; 
        signUpClick = 0;
    }
}

signUp.onclick = function() {
    if(signUpClick == 0)
    {
        signIn.style.borderBottom = "none"
        buttons[1].style.display = "none"; 
        containerInput[0].style.justifyContent = "center";
        signIn.style.cursor = "pointer";
        signInClick = 0;
        
        signUp.style.borderBottom = "2px solid #e4842b";
        signUp.style.cursor = "default";
        nameUser[0].style.display = "block";
        nameUser[1].style.display = "block";
        terms.style.display = "flex"
        buttons[0].style.display = "block"; 
        signUpClick = 1;
    }
}