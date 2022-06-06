const nameProfile = document.getElementById("nameProfile");
const emailProfile = document.getElementById("emailProfile");
const passwordProfile = document.getElementById("passwordProfile");

let userCurrent = JSON.parse(localStorage.getItem("user"));

nameProfile.innerText = userCurrent[0];
emailProfile.innerText = userCurrent[1];
passwordProfile.innerText = userCurrent[2];

const directionProfile = document.getElementById("directionProfile");
const phoneProfile = document.getElementById("phoneProfile");

if (JSON.parse(localStorage.getItem("directionProfile"))){
    directionProfile.innerText = JSON.parse(localStorage.getItem("directionProfile"))
} else {directionProfile.innerText = "..."}

if (JSON.parse(localStorage.getItem("phoneProfile"))){
    phoneProfile.innerText = JSON.parse(localStorage.getItem("phoneProfile"))
} else {phoneProfile.innerText = "..."}

const toggleClass = (btnAdd, btnHide) => {
    const addDataSelected = document.getElementById(`${btnAdd}`);
    addDataSelected.classList.toggle("hide");

    const hideBtnSelected = document.getElementById(`${btnHide}`);
    hideBtnSelected.classList.toggle("hide");
}

const editInfo = (input, btnAdd, btnHide) => {
    const inputSelected = document.getElementById(`${input}`);
    inputSelected.classList.toggle("hide");

    toggleClass(btnAdd, btnHide);
}

const addInfo = (input, btnAdd, btnHide, moreData) => {
    const inputSelected = document.getElementById(`${input}`);
    localStorage.setItem(`${moreData}`, JSON.stringify(inputSelected.value));
    
    let currentData = JSON.parse(localStorage.getItem(`${moreData}`));

    const infoSelected = document.getElementById(`${moreData}`);
    infoSelected.innerText = `${currentData}`;

    inputSelected.classList.toggle("hide");
    toggleClass(btnAdd, btnHide);
}



const closeSection = document.getElementById("closeSection");

closeSection.addEventListener('click', () => {
    
})