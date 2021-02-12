class Thermostat {
    constructor(F){
        this.F=F
    }
    // get in C
    get temperature(){
        return ( (5/9)*(this.F-32) )
    }
    // set in C
    set temperature(C){
        this.F = C * 9/5 + 32; 
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log("get Temp -> ", temp)

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log("set Temp -> ", temp)