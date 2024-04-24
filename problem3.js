function myfun(arr){
    if(typeof arr[0]=="number" && typeof arr[1]=="number"){
        if(arr[0]<0 || arr[1]<0){
            return "mainas";
        }
        else{
            if(arr[0]==arr[1]){
                return "equal";
            }
            else{
                if(arr[0]<arr[1]){
                    var arr2 =[arr[1],arr[0]];
                    return arr2;
                } 
                else{
                    return arr;
                }
            }
        }
    }
    else{
        return "enter the number";
    }
}


console.log(myfun([7,7.2]))