import { sumar, multiplicar } from "./sumador.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultado = document.getElementById("resultado");

const sumarBtn = document.getElementById("sumarBtn");
const multiplicarBtn = document.getElementById("multiplicarBtn");

sumarBtn.addEventListener("click", () => {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);

  resultado.textContent = sumar(a, b);
});

multiplicarBtn.addEventListener("click", () => {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);

  resultado.textContent = multiplicar(a, b);
});