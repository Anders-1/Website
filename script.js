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
	} else {
		button.innerHTML = "Dark";

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
