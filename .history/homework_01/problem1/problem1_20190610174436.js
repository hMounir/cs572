Array.prototype.removeNum = async function(num){
    const array = this;
    if(array.includes(num,0)){
        return await array.filter(value => value!==num);
    }else {
        await console.log('This number is not in the array');
    }
};

console.log('Start');
[1,3,4,2,1,5].removeNum(10).then(value => console.log(value)).catch(reason => console.log(reason));
console.log('End');