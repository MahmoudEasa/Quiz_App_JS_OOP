class Question {
	constructor(question) {
		this.questionElement = document.querySelector("#question");
		this.answerElements = document.querySelector(".quiz .containerQuiz");
		this.isCorrect = false;

		if (question) {
			this.question = question;
			this.answers = [
				question.correct_answer,
				...question.incorrect_answers,
			].sort(() => 0.5 - Math.random());
		}
	}

	answer(checkedElement) {
		this.isCorrect = checkedElement == this.question.correct_answer;
	}

	render() {
		this.questionElement.innerHTML = this.question.question;
		this.answerElements.innerHTML = this.answers.map((ele, i) => {
			return `<label id="a${
				i + 1
			}"><input type="radio" value="${ele}" name="radio"> ${ele}</label>`;
		});
	}
}

export default Question;
