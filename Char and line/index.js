function generatePattern(char, lines) {
    let pattern = '';
    for (let i = 1; i <= lines; i++) {
        pattern += char.repeat(i) + '\n';
    }
    return pattern;
}

function handleGenerate() {
    const char = document.getElementById('charInput').value;
    const lines = parseInt(document.getElementById('lineInput').value);

    if (char.length === 1 && lines > 0) {
        const result = generatePattern(char, lines);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'لطفا یک کاراکتر و تعداد خطوط معتبر وارد کنید.';
    }
}
