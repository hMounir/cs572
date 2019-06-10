Array.prototype.removeNum = async function(num){
    const array = this;
    if(array.includes(num,0)){
        let result = await array.filter(value => value!==num);
        console.log(result);
        return result;
    }else {
        console.log(result);
        let result = await 'This number is not in the array';
        return ;
    }
};

console.log('Start');
console.log([1,3,4,2,1,5].removeNum(1));
console.log('End');