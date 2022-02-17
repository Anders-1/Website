function alertFunction() {

	alert("You clicked me!");
	console.log("Alerted");
}

function darkMode() {

  var element = document.body;
  element.classList.toggle("dark-mode");
	var button = document.getElementById("darkButton");
	if (button.innerHTML === "Dark") {
		button.innerHTML = "Light";
		setCookie("darkModeToggled", "1", 1)
		console.log("Cookie darkModeToggled set to 1");
	} else {
		button.innerHTML = "Dark";
		setCookie("darkModeToggled", "0", 1)
		console.log("Cookie darkModeToggled set to 0");

	}

}

//Calling 'isDarkModeOn' on page load with an event listener.
document.addEventListener("DOMContentLoaded", function() {
  isDarkModeOn()
});

function isDarkModeOn() {

	var darkModeToggled = getCookie("darkModeToggled")
	var button = document.getElementById("darkButton");

	if (!document.body.classList.contains("dark-mode") && darkModeToggled == 1) {

		document.body.classList.toggle("dark-mode")
		button.innerHTML = "Light";

	}




}

function magicAnswer() {

	var mad = Math.floor(Math.random() * 10);
	var guess = Math.floor(Math.random() * 3);
	var answerText = document.getElementById("answerText")
	var answer = null

	answerText.style.display = "none"

	if (mad === 0) {

		answer = "Get out of my swamp!"
		guess = "null"
	}

	switch (guess) {
		case 0:
			answer = "No"
			break;
		case 1:
			answer = "Maybe"
			break;
		case 2:
			answer = "Yes"
			break;
		default:

			if (guess != "null") {
				console.warn("Uh oh, 'guess' is not in range.")
			}

	}

	answerText.innerHTML = answer
	answerText.style.display = "block"

}

// THIS DOESNT WORK!!! SEE: https://stackoverflow.com/questions/12992494/how-to-read-write-cookies-for-local-file-html-document
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//      user = prompt("Please enter your name:","");
//      if (user != "" && user != null) {
//        setCookie("username", user, 30);
//      }
//   }
// }
