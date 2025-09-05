document.getElementById('sumarBtn').addEventListener('click', function () {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 + num2;
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});

document.getElementById('multiplicarBtn').addEventListener('click', function () {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 * num2;
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
