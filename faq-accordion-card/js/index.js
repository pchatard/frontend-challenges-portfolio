const questions = document.getElementsByClassName("question");

for (let question of questions) {
	const questionh2 = question.children[0];
	questionh2.addEventListener("click", () => {
		Array.from(questions).forEach((otherQuestion) => {
			if (otherQuestion !== question) {
				otherQuestion.classList.remove("active");
			}
		});
		question.classList.toggle("active");
	});
}