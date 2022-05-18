const form = document.getElementById("form");

const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const email = document.getElementById("email");

const number = document.getElementById("number");

let password = document.getElementById("password");

let Re_password = document.getElementById("Re_password");

form.addEventListener('submit', e => {
    e.preventDefault();
});

function checkInput() {
    const fName = fName.value.trim();
    const lName = lName.value.trim();
    const email = email.value.trim();
    const number = number.value.trim();
    let password = password.value();
    let Re_password = Re_password.value();
}
if (fnameValue === ' ') {
    setError(First_Name, 'First Name cannot be blank');
} else {
    setSuccess(First_Name);
}

if (lnameValue === ' ') {
    setError(Last_Name, 'First Name cannot be blank');
} else {
    setSuccess(Last_Name);
}


if (emailValue === ' ') {
    setError(email, 'Enter Email address');
} else if (!isEmail, (emailValue)) {
    setError(email, 'Enter Valid Email address');
} else {
    setSuccess(email);
}


function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
if (passwordValue === ' ') {
    setError(password, 'Enter password');
} else {
    setSuccess(password);
}

if (Re_passwordValue === ' ') {
    setError(Re_password, 'Enter password');
} else if (passwordValue !== Re_passwordValue) {
    setError(Re_password, 'Password does not Match')
} else {
    setSuccess(Re_password);
}

function setError(input) {
    const formControl = input.parentElement;
}