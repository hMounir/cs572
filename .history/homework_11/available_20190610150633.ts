export function addAvailablity(value:boolean){
    return function(targetClass:Object){
        return class{
            available = value;
        }
    }
}