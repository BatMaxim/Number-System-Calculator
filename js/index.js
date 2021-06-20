import {convertToDecimal, convertToOtherSystem, convertNumsArray, getKeyByValue, getValueByKey} from './Conversions.js';
import {checkNumSystems, checkInputNumber} from './Checks.js';

const form = document.querySelector("#converter")
form.addEventListener("submit", (event) => {
	event.preventDefault();
	convert();
});

function convert() {
	let number =  form.querySelector('[name="number"]').value.trim();
	let inputNumSystem = +form.querySelector('[name="inNumSystem"]').value; 
	let outputNumSystem = +form.querySelector('[name="outNumSystem"]').value; 
	let answer = form.querySelector('[name="answer"]');

	let parsNumRev = convertNumsArray(number.split('').reverse(), getValueByKey); 
	
	if(checkNumSystems(inputNumSystem) && checkNumSystems(outputNumSystem) && checkInputNumber(parsNumRev, inputNumSystem, answer)){
		let numInDecimal =  convertToDecimal(parsNumRev, inputNumSystem);

		if(outputNumSystem === 10) 
			answer.value = numInDecimal;
		else{
			let arrayAns= convertToOtherSystem(numInDecimal, outputNumSystem).reverse();
			answer.value = convertNumsArray(arrayAns, getKeyByValue).join("");
		}
	}
	else
		answer.value = "Ошибка";
}	






	