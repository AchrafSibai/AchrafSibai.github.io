var result = document.getElementById('far-to-cel').onclick = convertFarToCel;

function convertFarToCel(){
	var FarBase = document.getElementById('far-to-cel').value;
	var CelsiusResult = (FarBase - 32) x (5/9);
	console.log('??');
}

document.getElementById('cel-solution')innerHTML = Celsius;

function convertCelToFar(){
	var CelBase = document.getElementById('cel-to-far').value;
	var FarenheitResult = (CelBase * (9/5)) + 32;
}

document.getElementById('far-solution')innerHTML = Celsius;
