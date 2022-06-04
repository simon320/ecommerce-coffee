// Login
const signUpTitle = document.getElementById("signUpTitle");
const signInTitle = document.getElementById("signInTitle");
const signUpContent = document.getElementById("signUpContent");
const signInContent = document.getElementById("signInContent");
const terms = document.getElementById("terms");


signInTitle.onclick = function() {
    signInTitle.classList.add("selected");
    signInTitle.classList.remove("no-selected");
    signInContent.classList.remove("hide");
    
    signUpTitle.classList.remove("selected");
    signUpTitle.classList.add("no-selected");
    signUpContent.classList.add("hide");

    terms.classList.add("hide");

}
signUpTitle.onclick = function() {
    signInTitle.classList.remove("selected");
    signInTitle.classList.add("no-selected");
    signInContent.classList.add("hide");

    signUpTitle.classList.add("selected");
    signUpTitle.classList.remove("no-selected");
    signUpContent.classList.remove("hide");

    terms.classList.remove("hide");
}


// WARNING VALIDATION

// SIGN UP
const btnUp = document.getElementById("btnUp");
const warningUp = document.getElementById("warningUp");
const newName = document.getElementById("newName");
const newEmail = document.getElementById("newEmail");
const newPassword = document.getElementById("newPassword");
const termsCheck = document.getElementById("termsCheck");
const validationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let user = [];

const userLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(user));
  }

  btnUp.addEventListener('click', (e) => {
    e.preventDefault()
    let warnings = "";
    let showWarning = false;
    let correct = "¡Usuario creado!";
    console.log(termsCheck.checked)
    if (newName.value.length < 2 || newName.value == "") {
        warnings += "Nombre es muy corto <br>";
        showWarning = true;
    }
    if (!(validationEmail.test(newEmail.value))){
        warnings += "El email no es valido <br>";
        showWarning = true;
    }
    if (newPassword.value.length < 8){
        warnings += "La contraseña debe tener al menos 8 caracteres <br>";
        showWarning = true;
    }
    if (!termsCheck.checked) {
        warnings += "Tienes que aceptar los terminos y condiciones";
    }

    if (showWarning) {
        warningUp.innerHTML = warnings;
    } else {
        warningUp.style.color = "green";
        warningUp.innerHTML = correct;
        user.push(newName.value, newEmail.value, newPassword.value);
        userLocalStorage();

        setTimeout(()=>{
            signInTitle.classList.add("selected");
            signInTitle.classList.remove("no-selected");
            signInContent.classList.remove("hide");
            
            signUpTitle.classList.remove("selected");
            signUpTitle.classList.add("no-selected");
            signUpContent.classList.add("hide");
        
            terms.classList.add("hide");
        }, 1000)
    }
});

// SIGN IN
const btnIn = document.getElementById("btnIn");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const warningIn = document.getElementById("warningIn");


formValidation.addEventListener('submit', (e) => {
    e.preventDefault()
    let userCurrent = JSON.parse(localStorage.getItem("user"));
    let warnings = "";
    let showWarning = false;

    if (userEmail.value !== userCurrent[1]) {
        warnings += "Email incorrecto <br>";
        showWarning = true;
    } 

    if (userPassword.value !== userCurrent[2]) {
        warnings += "Contraseña incorrecta";
        showWarning = true;
    } 
    if (showWarning) {
        warningIn.innerHTML = warnings;
    } else {
        warningIn.style.color = "green";
        warningIn.innerHTML = `Bienvenido ${userCurrent[0]}`;

        setTimeout(()=> {
            location.replace("./home.html")
        }, 1500)
    }
})