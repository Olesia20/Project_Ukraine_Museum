function visit() {
  let name = prompt("Hi! 👋What is your name?");
  let date = prompt("What day in August do you want to visit the Museum?");
  let email = prompt("What is your email address?");
  if (date >= 10) {
    alert(
      "Thank you " +
        name +
        " 🌸! We will send you a confirmation for the " +
        date +
        " of August on your email " +
        email +
        " Good luck 🍀 And see you in Museum 🥰"
    );
  } else {
    alert(
      "Sorry " +
        name +
        " 🌸! That day sold out, you can choose any day after 10 August! Good luck 🍀🍀🍀"
    );
  }
}
let visitButton = document.querySelector(".visit-button");
visitButton.addEventListener("click", visit);
