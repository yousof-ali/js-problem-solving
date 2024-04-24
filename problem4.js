function findAddress(obj){
    var l = ['street','house','society'];
    var newl=[];
    for(i=0; i<l.length; i++){
        if(l[i] in obj){
            newl.push(obj[l[i]]);
        }
        else{
            newl.push("__");
        }

    }
    return newl.join(", ");
}

var object1 = {street:10,};
console.log(findAddress(object1));