export function addAvailablity(value:boolean){
    return function(targetClass:Object){
        return class{
            available = value;
        }
    }
}

@addAvailablity(true)
class Course{}

console.log(new Course());