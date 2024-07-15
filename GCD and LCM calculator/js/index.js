// Function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate LCM using the formula
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Function to handle form submission
document.getElementById('gcd-lcm-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input values
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Calculate GCD and LCM
    const gcdValue = gcd(num1, num2);
    const lcmValue = lcm(num1, num2);

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>مقسوم علیه مشترک: ${gcdValue}</p><p>کوچک‌ترین مضرب مشترک: ${lcmValue}</p>`;
});