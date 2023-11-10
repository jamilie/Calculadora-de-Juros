document.getElementById('calculadora').addEventListener('click', function(){
let value = document.getElementById('value').value;
let fee = (document.getElementById('fee').value) / 100;
let time = document.getElementById('time').value;

let total = value * (1 + fee)**time;

document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2));
});