function cubeNumber(number){
    if (typeof number == "number"){
        var result = number*number*number;
        return result;    
    }
    else{
        return "please enter a number"
    }
    
}

var value = 3; 
var callFunction = cubeNumber(value);
console.log(callFunction);