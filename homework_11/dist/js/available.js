export function addAvailablity(value) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.available = value;
            }
            return class_1;
        }());
    };
}
