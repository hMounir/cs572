const {of,from} = require('rxjs');
const {max} = require('rxjs/operators');

Array.prototype.pluck = function (pluck) {
    if(pluck){
        of(this)
            .pipe(max(x => x))
            .subscribe(value=> console.log(value));
    }
};

console.log('start');
[1,2,3,4,5,6,7,8].pluck(true);
// [1,2,3,4,5,6,7,8].pluck(false);
console.log('end');