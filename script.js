'use strict';

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
			answer.value = convertToOtherSystem(numInDecimal, outNumSystem).reverse().join("");
		}
	}
	else
		answer.value = "Ошибка";
}	

function checkInputNumber(parsNumRev, inNumSystem, answer){
	for(let i = 0; i < parsNumRev.length; i++){
		if(isNaN(parsNumRev[i]) || parsNumRev[i] >= inNumSystem) {
			console.log(parsNumRev[i]);
			return false;
		}
	}
	return true;
}

function checkNumSystems(inNumSystem, outNumSystem){
	let cond = inNumSystem > 16 || inNumSystem < 2 || outNumSystem > 16 || outNumSystem < 2;
	return cond ? false : true;  
}

function convertToDecimal(parsNumRev, inNumSystem){
	let number = 0; 
	parsNumRev.forEach((element, i) => {
		number += element*Math.pow(inNumSystem, i);
	});
	return number;
}

function convertToOtherSystem(numInDecimal, outNumSystem){
	let arrayAns = [];
	while(true){
		let remOfDiv = numInDecimal % outNumSystem;
		arrayAns.push(remOfDiv);
		numInDecimal = Math.floor(numInDecimal/outNumSystem);
		if(numInDecimal === 0) break;
	}
	return convertNumsArray(arrayAns,numsDec,numsHex);
}

function convertNumsArray(array, numSys1, numSys2){
	let newArray = array.map((symbol)=>{
		switch(symbol) {
			case numSys1[0]: 
				return numSys2[0];
			case numSys1[1]: 
				return numSys2[1];
			case numSys1[3]: 
				return numSys2[3];
			case numSys1[4]: 
				return numSys2[4];
			case numSys1[5]: 
				return numSys2[5];
			case numSys1[6]: 
				return numSys2[6];
			default:
				return +symbol;
		}
	});
	return newArray;
}



	