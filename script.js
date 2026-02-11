// login page create account button code
const registerBtn = document.getElementById("signup-btn");
registerBtn.addEventListener("click", function () {
  showScreen("create-account-screen");
});

// Create user button code
const createUserBtn = document.getElementById("create-user-btn");

createUserBtn.addEventListener("click", function () {
  const newUsernameInput = document.getElementById("new-user").value;
  const newPasswordInput = document.getElementById("new-password").value;

  if (newUsernameInput === "" || newPasswordInput === "") {
    alert("Username and password cannot be empty.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some((user) => user.username === newUsernameInput);

  if (userExists) {
    alert("Username already exists.");
    return;
  }

  users.push({
    username: newUsernameInput,
    password: newPasswordInput,
  });

  localStorage.setItem("users", JSON.stringify(users));

  showScreen("login-screen");
});

// Screen Controller
const screens = document.querySelectorAll("div[id$='-screen']");

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.replace("active", "inactive");
  });

  const target = document.getElementById(screenId);
  target.classList.replace("inactive", "active");
}
