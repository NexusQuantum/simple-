function calculate() {
    const expression = document.getElementById('expression').value;
    try {
        // eval関数を使用して数式を計算
        const result = eval(expression);
        document.getElementById('result').innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: Invalid expression';
    }
}
