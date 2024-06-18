function calculateIMC() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        const heightInMeters = height / 100;
        const imc = weight / (heightInMeters * heightInMeters);
        document.getElementById('result').textContent = `Seu IMC é ${imc.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Por favor, preencha ambos os campos.';
    }
}
