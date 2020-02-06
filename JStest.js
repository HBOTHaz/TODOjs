const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    division: function(a, b){
        return a / b;
    },
    times: function(a, b){
        return a * b;
    } 
}

const plus = calculator.plus(100, 20);
console.log(plus);
const minus = calculator.minus(100, 20);
console.log(minus);
const division = calculator.division(100, 20);
console.log(division);
const times = calculator.times(100, 20);
console.log(times);

