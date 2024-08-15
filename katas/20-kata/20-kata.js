function goodVsEvil(good, evil){
    let goodA = good.split(' ').reduce((armyWorth, currentRace, index)=>{
        switch(index){
            case 0:
                armyWorth = armyWorth + +currentRace; // hobbitses 1 to 1
                break;
            case 1:
                armyWorth = armyWorth + (+currentRace * 2); // men 1 to  2
                break;
            case 2:
                armyWorth = armyWorth + (+currentRace * 3); // elf 1 to  3
                break;
            case 3:
                armyWorth = armyWorth + (+currentRace * 3); // dwarves 1 to  3
                break;
            case 4:
                armyWorth = armyWorth + (+currentRace * 4); // Eagles 1 to  4
                break;
            case 5:
                armyWorth = armyWorth + (+currentRace * 10); // Wizards 1 to  10
                break;
        }
        return armyWorth;

    }, 0);

    let evilA = evil.split(' ').reduce((armyWorth, currentRace, index)=>{
        console.log(good)
        console.log(evilA)
        switch(index){
            case 0:
                armyWorth = armyWorth + +currentRace; // orcs 1 to 1
                break;
            case 1:
                armyWorth = armyWorth + (+currentRace * 2); // men 1 to  2
                break;
            case 2:
                armyWorth = armyWorth + (+currentRace * 2); // wargs 1 to  2
                break;
            case 3:
                armyWorth = armyWorth + (+currentRace * 2); // goblins 1 to  2
                break;
            case 4:
                armyWorth = armyWorth + (+currentRace * 3); // Uruk Hai 1 to  3
                break;
            case 5:
                armyWorth = armyWorth + (+currentRace * 5); // trolls 1 to  5
                break;
            case 6:
                armyWorth = armyWorth + (+currentRace * 10); // Wizards 1 to  10
                break;
        }
        return armyWorth;

    }, 0);

    if(goodA > evilA){
        return `Battle Result: Good triumphs over Evil`
    } else if (goodA < evilA){
        return `Battle Result: Evil eradicates all trace of Good`
    } else{
        return `Battle Result: No victor on this battle field`
    };
}