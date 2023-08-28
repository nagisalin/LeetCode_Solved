/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++){
        const element = s[i];

        if ((element === ')') || (element === '}') || (element === ']')) {
            if (stack.length === 0) return false;

            const current_left = stack.pop();

            if ((current_left === '(' && element !== ')') 
                || (current_left === '{' && element !== '}')
                || (current_left === '[' && element !== ']')) {
                return false
            }
        } else {
            stack.push(element)
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
};