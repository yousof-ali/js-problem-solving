function matchFinder(first, second){
    if (typeof first == "string" && typeof second == "string"){
        if (first.includes(second)){
            return "true"
        }
        else{
            return "false"
        }
    }
    else{
        return "enter string"
    }
}

var callFunction = matchFinder("yousof ali", "sof");
console.log(callFunction);