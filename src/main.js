let ExpressionCalculator = require('./expressionCalculator');
var calculator = function() {
    let args = process.argv.slice(2);
    const exp = new ExpressionCalculator();
    console.log(exp.evaluation(args[0]));
}

calculator();