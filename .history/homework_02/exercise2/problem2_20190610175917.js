const {from} = require('rxjs');
const {max} = require('rxjs/operators');

Array.prototype.pluck = function (pluck) {
    if(pluck){
        from(this)
            .pipe(max())
            .subscribe(value=> console.log(value));
    }
};

console.log('start');
[1,2,3,4,5,6,7,8].pluck(true);
//[1,2,3,4,5,6,7,8].pluck(false);
console.log('end');