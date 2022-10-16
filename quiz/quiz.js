import Final from "./final.js";
import Question from "./question.js";

class Quiz {
	constructor(quizElement, amount, questions) {
		this.quizElement = quizElement;
		this.currentElement = document.querySelector(".current");
		this.totalElement = document.querySelector(".total");
		this.finalElement = document.querySelector(".final");
		this.nextBtn = document.querySelector(".next");

		this.totalAmount = amount;
		this.answeredAmount = 0;

		this.questions = this.setQuestion(questions);
		this.nextBtn.addEventListener("click", this.nextQuestion);
		this.renderQuestion();

		//
		//
		// this.correctAnswer = 0;
		// this.questions = questions;

		// this.question = new Question(this.questions[this.answeredAmount]);
		// this.question.render();

		// this.currentElement.innerHTML = this.answeredAmount + 1;
		// this.totalElement.innerHTML = this.totalAmount;

		// this.nextBtn.addEventListener("click", this.nextQuestion);
	}

	setQuestion(questions) {
		return questions.map((question) => new Question(question));
	}

	renderQuestion = () => {
		this.questions[this.answeredAmount].render();
		this.currentElement.innerHTML = this.answeredAmount + 1;
		this.totalElement.innerHTML = this.totalAmount;
	};

	nextQuestion = () => {
		let containerQuiz = document.querySelectorAll(".containerQuiz input");
		const checkElement = [...containerQuiz].filter((ele) => ele.checked);

		if (checkElement.length) {
			this.questions[this.answeredAmount].answer(checkElement[0].value);
			this.answeredAmount++;
			this.answeredAmount < this.totalAmount
				? this.renderQuestion()
				: this.endQuizApp();
		} else {
			alert("Please Check Answer");
		}
	};

	endQuizApp = () => {
		this.quizElement.style.display = "none";
		this.finalElement.style.display = "block";
		const correctAnswer = this.countCorrectAnswers();
		new Final(correctAnswer, this.totalAmount);
	};

	countCorrectAnswers = () => {
		let count = 0;
		this.questions.map((ele) => {
			ele.isCorrect && count++;
		});
		return count;
	};
	//
	//
	//
	//
	//
	//
	// nextQuestion = () => {
	// 	let containerQuiz = document.querySelectorAll(".containerQuiz input");
	// 	let inputChecked;

	// 	if (containerQuiz) {
	// 		inputChecked = [...containerQuiz].filter((ele) => ele.checked);

	// 		if (inputChecked[0]) {
	// 			this.question.answer(inputChecked[0].value);
	// 		}
	// 		if (this.question.isCorrect) {
	// 			this.correctAnswer++;
	// 			console.log(this.correctAnswer);
	// 		}
	// 	}

	// 	if (this.answeredAmount + 1 != this.totalAmount) {
	// 		if (containerQuiz) {
	// 			if (inputChecked[0]) {
	// 				this.answeredAmount++;
	// 				this.currentElement.innerHTML = this.answeredAmount + 1;
	// 				this.question = new Question(
	// 					this.questions[this.answeredAmount]
	// 				);
	// 				this.question.render();
	// 			} else {
	// 				alert("Please Check Answer");
	// 			}
	// 		}
	// 	} else {
	// 		this.quizElement.style.display = "none";
	// 		this.finalElement.style.display = "block";
	// 		new Final(this.correctAnswer, this.totalAmount);
	// 	}
	// };
}
export default Quiz;
