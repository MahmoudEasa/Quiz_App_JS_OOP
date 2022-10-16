import Quiz from "./quiz.js";

class Settings {
	constructor() {
		this.settingDom = document.querySelector(".settings");
		this.quizDom = document.querySelector(".quiz");
		this.categoryDom = document.querySelector("#category");
		this.nQuestionsDom = document.querySelector("#nQuestions");
		this.startBtn = document.querySelector("#startBtn");
		this.difficulty = document.querySelectorAll(".difficulty input");

		this.startBtn.addEventListener("click", this.startQuizApp);
	}

	startQuizApp = async () => {
		const amount = this.getAmount();
		const categoryId = this.categoryDom.value;
		const difficulty = this.getDifficulty();

		let result = await this.fetchData(amount, categoryId, difficulty);
		if (result && difficulty && categoryId && amount) {
			this.quizDom.style.display = "block";
			this.settingDom.style.display = "none";
			new Quiz(this.quizDom, amount, result);
			console.log(result);
		}
	};

	getAmount = () => {
		const amount = this.nQuestionsDom.value;

		if (amount > 0 && amount <= 20) {
			return amount;
		} else if (amount > 20) {
			alert("Minimum 20 Questions");
		} else {
			alert("Please Enter Questions");
		}
	};

	getDifficulty = () => {
		const diff = [...this.difficulty].filter((ele) => ele.checked);

		if (diff.length) {
			return diff[0].id;
		} else {
			alert("Select Difficult");
		}
	};

	fetchData = async (amount, categoryId, difficulty) => {
		const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`;

		try {
			const res = await fetch(url);
			const { results } = await res.json();
			return results;
		} catch {
			console.log("Error");
		}
	};
}

export default Settings;
