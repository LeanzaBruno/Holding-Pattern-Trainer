let allRandomBtn = document.getElementById("btn-all-random");
let fixedHoldingPatternBtn = document.getElementById("btn-fixed-holding-pattern");
let specificScenarioBtn = document.getElementById("btn-set-scenario");
let cancelButton = document.getElementById("btn-cancel");


function showMainMenu(show){
    document.getElementById("main-menu").hidden = !show;
}

function showScenerioForm(show = true){
    document.getElementById("form-container").hidden = !show;
}

function specificScenarioMode(){
    showMainMenu(false);
    showScenerioForm(true);
}

function cancel(){
    showScenerioForm(false);
    showMainMenu(true);
}

specificScenarioBtn.onclick = specificScenarioMode;
cancelButton.onclick = cancel;


/*
class HoldingPattern{
    #radial;
    #isStandard;
    constructor(){
        this.#radial = Math.floor(Math.random() * 360);
        this.#isStandard = Math.random() >= 0.5;
    }

    toString(){
        return "R" + this.#radialText() + " " + this.#configuration();
    }

    #radialText(){
        return this.#radial < 10 ? "00" + this.#radial : (this.#radial < 100 ? "0" + this.#radial : this.#radial);
    }

    #configuration(){
        return this.#isStandard ? "Standard" : "Non-standard ";
    }

    getRadial(){
        return this.#radial;
    }

    isStandard(){
        return this.#isStandard;
    }

}

class Aircraft{
    #radial;
    constructor(){
        this.#radial = Math.floor(Math.random() * 360);
    }

    position(){
        return this.#radial < 10 ? "00" + this.#radial : (this.#radial < 100 ? "0" + this.#radial : this.#radial);
    }

    getRadial(){
        return this.#radial;
    }
}

class CompassRoseRange{
    #fromInclusive;
    #toExclusive;
    #instance;

    constructor(){
        if(this.#instance == null)
            this.#instance = new CompassRoseRange();
        if(this instanceof CompassRoseRange)
            throw Error("Static class");
    }

    static from(value){
        this.#fromInclusive = value;
        return #instance;
    }

    static to(value){
        this.#toExclusive = value;
        return #instance;
    } 

    static contains(target){
        if(this.#fromInclusive <= this.#toExclusive )
            return this.#fromInclusive <= target && target < this.#toExclusive;
        else
            return this.#fromInclusive <= target < 360 || 0 <= target < this.#toExclusive;
    }
}

let holdingPattern = new HoldingPattern();
let aircraft = new Aircraft();

document.getElementById("aircraft-radial").value = aircraft.position(); 
document.getElementById("holding-radial").value = holdingPattern.toString();
document.getElementById("verify-button").onclick = check;

function check(){
    const hpRadial = holdingPattern.getRadial();
    const isStandard = holdingPattern.isStandard();
    const acftRadial = aircraft.getRadial(); 

    const oppositeRadial = hpRadial + 180 > 360 ? hpRadial - 180 : hpRadial + 180;
    let upperLimit = hpRadial; 
    let lowerLimit = hpRadial; 

    if(isStandard){
        upperLimit += 110;
        lowerLimit += -70;
        if(CompassRoseRange.contains((lowerLimit).to(upperLimit).contains(acftRadial))
        if(CompassRoseRange.from(lowerLimit).to(upperLimit).contains(acftRadial))
            alert("Direct entry")
        else if(CompassRoseRange.from(upperLimit).to(oppositeRadial).contains(acftRadial))
            alert("Tear-drop entry")
        else if(CompassRoseRange.from(oppositeRadial).to(lowerLimit).contains(acftRadial))
            alert("Parallel-fly entry")
        else
            alert("Error!")
    }
    else{
        upperLimit += 70;
        lowerLimit += -110;
        if(CompassRoseRange.from(lowerLimit).to(upperLimit).contains(acftRadial))
            alert("Direct entry")
        else if(CompassRoseRange.from(upperLimit).to(oppositeRadial).contains(acftRadial))
            alert("Parallel-fly entry")
        else if(CompassRoseRange.from(oppositeRadial).to(lowerLimit).contains(acftRadial))
            alert("Tear-drop entry")
        else
            alert("Error!")
    }
}
*/