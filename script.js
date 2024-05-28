// PASSWORD
const passwordInput = document.getElementById('password');
const faEye = document.getElementById('fa-eye');

faEye.addEventListener('click', function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    faEye.classList.remove("fa-eye")
    faEye.classList.add("fa-eye-slash")
  } else {
    passwordInput.type = "password";
    faEye.classList.remove("fa-eye-slash")
    faEye.classList.add("fa-eye")
  }
});

// LOCAL STORAGE
let username = []
let password = []
let email = []

const usernameStorage = JSON.parse(localStorage.getItem("username"))
const passwordStorage = JSON.parse(localStorage.getItem("password"))

if (usernameStorage) {
  username = usernameStorage
  render(username)

  password = passwordStorage
  render(password)
}

const usernameEl = document.getElementById('username')
const passwordEl = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')
const passwordMsg = document.getElementById('password-msg')

loginBtn.addEventListener('click', function() {
    for (let i=0; i < password.length ; i++) {
        if (username[i] === usernameEl.value && password[i] === passwordEl.value) {
            alert ("Login Succcessful")
        } else {
            alert ("Incorrect username or password")
        }
    }
})

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
       listItems += leads[i]     
  }
  return listItems
}
