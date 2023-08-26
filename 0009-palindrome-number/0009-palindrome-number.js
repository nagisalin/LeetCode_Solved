/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    let init = x;
    let reverse = 0;

    while (init > 0) {
        const current = init % 10;
        reverse = reverse * 10 + current;
        init = parseInt(init / 10, 10)
    }

    return reverse === x;
};