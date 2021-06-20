import {convertToDecimal, convertToOtherSystem, convertNumsArray} from './Conversions.js';
import {checkNumSystems, checkInputNumber} from './Checks.js';

const numsHex = ['A', 'B', 'C', 'D', 'E', 'F'];
const numsDec = [10, 11, 12, 13, 14, 15];

const form = document.querySelector("#converter")
form.addEventListener("submit", (event) => {
	event.preventDefault();
	convert();
});

function convert() {
	let number =  form.querySelector('[name="number"]').value;
	let inNumSystem = +form.querySelector('[name="inNumSystem"]').value; 
	let outNumSystem = +form.querySelector('[name="outNumSystem"]').value; 
	let answer = form.querySelector('[name="answer"]');

	let parsNumRev = convertNumsArray(number.split('').reverse(), numsHex, numsDec); 
	
	if(checkNumSystems(inNumSystem, outNumSystem) && checkInputNumber(parsNumRev, inNumSystem, answer)){
		let numInDecimal =  convertToDecimal(parsNumRev, inNumSystem);

		if(outNumSystem === 10) 
			answer.value = numInDecimal;
		else{
			let arrayAns= convertToOtherSystem(numInDecimal, outNumSystem).reverse();
			answer.value = convertNumsArray(arrayAns,numsDec,numsHex).join("");
		}
	}
	else
		answer.value = "Ошибка";
}	






	