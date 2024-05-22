function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerText = "Por favor, preencha todos os campos.";
        return;
    }

    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -time));
    const totalPayment = monthlyPayment * time;
    const totalInterest = totalPayment - principal;

    document.getElementById('result').innerText = 
        `Valor da Parcela Mensal: R$ ${monthlyPayment.toFixed(2)}\n` +
        `Total Pago: R$ ${totalPayment.toFixed(2)}\n` +
        `Total de Juros Pago: R$ ${totalInterest.toFixed(2)}`;
}
