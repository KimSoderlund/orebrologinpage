// to create account button code
const registerBtn = document.getElementById("signup-btn");
registerBtn.addEventListener("click", function () {
  showScreen("create-account-screen");
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
