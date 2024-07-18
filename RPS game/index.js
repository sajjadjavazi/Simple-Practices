let userScore = 0;
let computerScore = 0;

function playGame() {
    const choices = ["سنگ", "کاغذ", "قیچی"];
    const userChoice = prompt("لطفا سنگ، کاغذ یا قیچی را وارد کنید:");
    
    if (!choices.includes(userChoice)) {
        alert("لطفا یک انتخاب معتبر وارد کنید: سنگ، کاغذ، یا قیچی.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);

    if (result === "user") {
        userScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    document.getElementById('result').innerHTML = `
        شما: ${userChoice}, کامپیوتر: ${computerChoice}, برنده: ${result === "user" ? "شما" : result === "computer" ? "کامپیوتر" : "مساوی"}
        <br> امتیازها: ${userScore} - ${computerScore}
    `;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }
    if (
        (userChoice === "سنگ" && computerChoice === "قیچی") ||
        (userChoice === "کاغذ" && computerChoice === "سنگ") ||
        (userChoice === "قیچی" && computerChoice === "کاغذ")
    ) {
        return "user";
    } else {
        return "computer";
    }
}
