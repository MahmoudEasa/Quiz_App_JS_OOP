// const API = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy";

import Settings from "./quiz/settings.js";
import Question from "./quiz/question.js";

// Remove Checked From Inputs
const inputsRadio = document.querySelectorAll(
	".difficulty input[type='radio']"
);
for (const input of inputsRadio) {
	input.addEventListener("click", (e) => {
		for (const i of inputsRadio) {
			if (i.id != e.target.id) {
				i.checked = false;
			}
		}
	});
}

new Settings();
