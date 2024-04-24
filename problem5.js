function canPay(arr,number){
    if(arr.length >0 ){
        var sumation = 0;
        for (i = 0; i<arr.length; i++){
            sumation +=arr[i];
        }
        if (sumation >= number){
            return 'true';
        }
        else {
            return 'false';
        }
    }
    else{
        return "incorrect input";
    } 
}

var arr1 = [2,3,4,2];
var price = 10;
console.log(canPay(arr1,price));