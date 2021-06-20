export function checkInputNumber(parsNumRev, inputNumSystem){
    for(let i = 0; i < parsNumRev.length; i++){
        if(isNaN(parsNumRev[i]) || parsNumRev[i] >= inputNumSystem) {
            console.log(parsNumRev[i]);
            return false;
        }
    }
    return true;
}

export function checkNumSystems(NumSystem){
    return NumSystem <= 16 && NumSystem >= 2; 
}

