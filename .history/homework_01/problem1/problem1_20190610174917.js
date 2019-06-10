Array.prototype.removeNum = function(num){
    const array = this;

    return new Promise((resolve, reject) => {
        if(array.includes(num,0)){
            resolve(array.filter(value => value!==num));
        }else {
            reject('This number is not in the array');
        }
    });
};

console.log('Start');
[1,3,4,2,1,5].removeNum(1).then(value => console.log(value)).catch(reason => console.log(reason));
console.log('End');