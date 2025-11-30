
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");



loginBtn.addEventListener('click', () => {

    const correctPassword = "RYUG1234";

    if (password.value === correctPassword) {
    window.location.href = "../homePage/home.html";

    } else {
    alert("Incorrect password. Try again.");
    }
});
    



     