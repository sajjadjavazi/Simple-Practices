function calculateScore() {
    let score = 0;
    const form = document.getElementById('quizForm');
    const answers = new FormData(form);

    for (let value of answers.values()) {
        score += parseInt(value);
    }

    document.getElementById('result').textContent = `امتیاز شما: ${score} از 4`;
}
