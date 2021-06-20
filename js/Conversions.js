export function  convertToDecimal(parsNumRev, inNumSystem){
    let number = 0; 
    parsNumRev.forEach((element, i) => {
        number += element*Math.pow(inNumSystem, i);
        });
    return number;
}

export function convertToOtherSystem(numInDecimal, outNumSystem){
    let arrayAns = [];
    while(true){
        let remOfDiv = numInDecimal % outNumSystem;
        arrayAns.push(remOfDiv);
        numInDecimal = Math.floor(numInDecimal/outNumSystem);
        if(numInDecimal === 0) break;
    }
    return arrayAns;
}
    
export function convertNumsArray(array, numSys1, numSys2){
    let newArray = [...array].map((symbol)=>{
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

