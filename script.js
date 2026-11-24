
const themeButton = document.getElementById("themeBtn");

function setTheme(theme) {

  document.documentElement.setAttribute("data-bs-theme", theme);

  if (theme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "Light mode";
  } else {
    document.body.classList.remove("dark");
    themeButton.textContent = "Dark mode";
  }
}

let savedTheme = localStorage.getItem("theme");
if (savedTheme === null) {
  savedTheme = "light";
}
setTheme(savedTheme);

themeButton.addEventListener("click", function () {
  let newTheme = "dark";
  if (document.body.classList.contains("dark")) {
    newTheme = "light";
  }
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

var bookForm = document.getElementById("bookForm");
var messageForm = document.getElementById("messageform");

function emailOk(email) {
  if (email.indexOf("@") < 1) {
    return false;
  }
  if (email.indexOf(".") < 3) {
    return false;
  }
  if (email.indexOf(" ") != -1) {
    return false;
  }
  return true;
}

function phoneOk(phone) {
  if (phone.length != 8) {
    return false;
  }
  if (isNaN(phone)) {
    return false;
  }
  return true;
}

bookForm.onsubmit = function(e) {
  e.preventDefault();

  var name = document.getElementById("bname").value.trim();
  var email = document.getElementById("bemail").value.trim();
  var phone = document.getElementById("bphone").value.trim();
  var date = document.getElementById("bdate").value;
  var activity = document.getElementById("bactivity").value.trim();

  if (name.length < 3) {
    alert("Please enter your full name");
    return;
  }
  if (!emailOk(email)) {
    alert("Please enter a valid email");
    return;
  }
  if (!phoneOk(phone)) {
    alert("Phone number must be 8 digits");
    return;
  }
  if (date == "") {
    alert("Please choose an arrival date");
    return;
  }
  if (new Date(date) < new Date()) {
    alert("Arrival date must be in the future");
    return;
  }
  if (activity.length < 3) {
    alert("Please enter a destination");
    return;
  }

  alert("Thank you " + name + ", your booking for " + activity + " was received");
  bookForm.reset();
}

messageForm.onsubmit = function(e) {
  e.preventDefault();

  var name = document.getElementById("mname").value.trim();
  var email = document.getElementById("memail").value.trim();
  var phone = document.getElementById("mphone").value.trim();
  var message = document.getElementById("mmessage").value.trim();

  if (name.length < 3) {
    alert("Please enter your full name");
    return;
  }
  if (!emailOk(email)) {
    alert("Please enter a valid email");
    return;
  }
  
  alert("Thank you " + name + ", your message was sent");
  messageForm.reset();
}