export function checkInputNumber(parsNumRev, inNumSystem){
    for(let i = 0; i < parsNumRev.length; i++){
        if(isNaN(parsNumRev[i]) || parsNumRev[i] >= inNumSystem) {
            console.log(parsNumRev[i]);
            return false;
        }
    }
    return true;
}

export function checkNumSystems(inNumSystem, outNumSystem){
    let cond = inNumSystem > 16 || inNumSystem < 2 || outNumSystem > 16 || outNumSystem < 2;
    return cond ? false : true;  
}

