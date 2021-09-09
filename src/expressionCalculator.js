class ExpressionCalculator {

    evaluation(expression) {
        if(this.isNumber(expression)) {
            return parseInt(expression);
        }
    
        let res = 0;
    
        let list = this.parse(expression);

        res = this.functionType(list);

        return res;
    }

    // Get the type method and use recursion
    functionType(list) {
        const type = list[0];
        switch(type) {
            case 'multiply': return this.evaluation(list[1]) * this.evaluation(list[2]);
            case 'add': return this.evaluation(list[1]) + this.evaluation(list[2]);
        }
    }
    // check the expression is number or not
    isNumber(expression) {
        if(!isNaN(expression)) return true;

        let c = expression.charAt(0);
        return c >= '0' && c <= '9' || c === '-';
    }
    // Parse the expression and standardize it the array
    parse(expression) {
        const array = [];
        if(expression.charAt(0) === '(') {
            expression = expression.substring(1, expression.length-1);
        }
        
        let startIdx = 0;
        while(startIdx < expression.length) {
            let endIdx = this.nextElement(expression, startIdx);
            array.push(expression.substring(startIdx, endIdx));

            startIdx = endIdx + 1;
        }

        return array;
    }

    nextElement(expression, startIdx) {
        let idx = startIdx;
        // If the snippet is a new sub expression rather than number, get the end index without doing any operation
        if(expression.charAt(idx) === '(') {
            // the amount of open curly braces and close curly braces are same.
            let count = 1;
            idx++;
            while(idx < expression.length && count > 0) {
                if(expression.charAt(idx) === ')') {
                    count--;
                }else if(expression.charAt(idx) === '(') {
                    count++;
                }
                idx++;
            }
        }else {
            while(idx < expression.length && expression.charAt(idx) !== ' ') {
                idx++;
            }
        }

        return idx;
    }
}

module.exports = ExpressionCalculator;