const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const alreadyHaveAccount = document.getElementById("haveId")

signInButton.addEventListener('click', () => {
    container.classList.add("right-panel-active")
})

signUpButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active")
})

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active")
})

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active")
})