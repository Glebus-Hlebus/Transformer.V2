document.getElementById('calculateButton').addEventListener('click', function () {
    const u1 = parseFloat(document.getElementById('u1').value);
    const u2 = parseFloat(document.getElementById('u2').value);
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const calculate = document.getElementById('calculate').value;

    let result;

    if (calculate === 'u1' && u2 && n1 && n2) {
        result = `U₁ = ${(u2 * n1 / n2).toFixed(2)} В`;
    } else if (calculate === 'u2' && u1 && n1 && n2) {
        result = `U₂ = ${(u1 * n2 / n1).toFixed(2)} В`;
    } else if (calculate === 'n1' && u1 && u2 && n2) {
        result = `N₁ = ${(u1 * n2 / u2).toFixed(2)} витков`;
    } else if (calculate === 'n2' && u1 && u2 && n1) {
        result = `N₂ = ${(u2 * n1 / u1).toFixed(2)} витков`;
    } else {
        result = 'Пожалуйста, заполните три параметра, чтобы рассчитать четвертый.';
    }

    document.getElementById('result').textContent = result;
});