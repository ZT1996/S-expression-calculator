let ExpressionCalculator = require('../src/expressionCalculator');

describe("evaluation function testing", function() {
    const exp = new ExpressionCalculator();

    it("1. Integer expression", function() {
        const integer = 123;
        const result = exp.evaluation(integer);

        expect(result).toEqual(123);
    });

    it("2. Integer expression", function() {
        const integer = 0;
        const result = exp.evaluation(integer);

        expect(result).toEqual(0);
    });

    it("3. Add function", function() {
        const expression = '(add 1 1)';
        const result = exp.evaluation(expression);

        expect(result).toEqual(2);
    });

    it("4. Add function", function() {
        const expression = '(add 0 (add 3 4))';
        const result = exp.evaluation(expression);
        expect(result).toEqual(7);
    });

    it("5. Add function", function() {
        const expression = '(add 3 (add (add 3 3) 3))';
        const result = exp.evaluation(expression);
        expect(result).toEqual(12);
    });

    it("6. max functions expression", function() {
        const expression = '(add 1 (multiply 2 3))';
        const result = exp.evaluation(expression);
        expect(result).toEqual(7);
    });

    it("7. max function expression", function() {
        const expression = '(multiply 2 (add (multiply 2 3) 8))';
        const result = exp.evaluation(expression);
        expect(result).toEqual(28);
    });
});