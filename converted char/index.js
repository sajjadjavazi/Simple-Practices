function convertCharacter(char) {
    let convertedChar;
    switch (char) {
        case 'a':
            convertedChar = '$';
            break;
        case 'z':
            convertedChar = '#';
            break;
        case 'M':
            convertedChar = '*';
            break;
        case 'D':
            convertedChar = '@';
            break;
        default:
            convertedChar = char; // اگر کاراکتر ورودی یکی از موارد بالا نبود، همان کاراکتر را برگردان
            break;
    }
    return convertedChar;
}

// تست تابع
console.log(convertCharacter('a')); // خروجی: $
console.log(convertCharacter('z')); // خروجی: #
console.log(convertCharacter('M')); // خروجی: *
console.log(convertCharacter('D')); // خروجی: @
console.log(convertCharacter('b')); // خروجی: b

function handleConvert() {
    const input = document.getElementById('charInput').value;
    if (input.length === 1) {
        const result = convertCharacter(input);
        document.getElementById('result').textContent = `کاراکتر تبدیل شده: ${result}`;
    } else {
        document.getElementById('result').textContent = 'لطفا یک کاراکتر وارد کنید.';
    }
}
