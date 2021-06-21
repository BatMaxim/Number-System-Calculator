let numsMap = new Map( [['A', 10], ['B', 11],['C', 12],['D', 13],['E', 14],['F', 15]]);

export function  convertToDecimal(parsNumRev, inNumSystem){
    let number = 0; 
    parsNumRev.forEach((element, i) => {
        number += element*Math.pow(inNumSystem, i);
        });
    return number;
}

export function convertToOtherSystem(numInDecimal, outNumSystem){
    let arrayAns = [];
    let remOfDiv;
    while(true){
        remOfDiv = numInDecimal % outNumSystem
        arrayAns.push(remOfDiv);
        numInDecimal = Math.floor(numInDecimal/outNumSystem);
        if(numInDecimal === 0) break;
    }
    return arrayAns;
}

export function getKeyByValue(object, value) {
    let arrKeys = [...object.keys()]
    return arrKeys.find(key => numsMap.get(key) == value);
}

export function getValueByKey(object, key) {
    return object.get(key);
}

export function convertNumsArray(array, replaceElement){

    let newArray = [...array].map((symbol)=>{
        if(replaceElement(numsMap, symbol)){
            return replaceElement(numsMap, symbol);
        } else return symbol;
    });
    return newArray;
}

