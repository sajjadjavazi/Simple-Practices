const ones = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
const teens = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"];
const tens = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
const hundreds = ["یک صد", "دویست", "سیصد", "چهار صد", "پانصد", "شش صد", "هفت صد", "هشت صد", "نه صد"];
const thousands = ["هزار", "میلیون", "میلیارد", "تریلیون"];

function convertNumberToWords() {
    const number = prompt("لطفا یک عدد وارد کنید:");
    if (isNaN(number)) {
        alert("لطفا یک عدد معتبر وارد کنید.");
        return;
    }
    const words = convertToWords(number);
    document.getElementById('result').innerText = words;
}

function convertToWords(number) {
    if (number === "0") return "صفر";

    let word = '';
    let i = 0;

    while (number.length > 0) {
        const chunk = parseInt(number.slice(-3));
        if (chunk) {
            const chunkInWords = convertChunk(chunk);
            word = chunkInWords + (i > 0 ? ' ' + thousands[i] : '') + ' ' + word;
        }
        number = number.slice(0, -3);
        i++;
    }

    return word.trim();
}

function convertChunk(number) {
    let word = '';

    const hundred = Math.floor(number / 100);
    const ten = Math.floor((number % 100) / 10);
    const one = number % 10;

    if (hundred) {
        word += hundreds[hundred] + ' و ';
    }

    if (ten === 1) {
        word += teens[one] + ' و ';
    } else {
        if (ten) {
            word += tens[ten] + ' و ';
        }
        if (one) {
            word += ones[one] + ' ';
        }
    }

    return word.trim();
}
