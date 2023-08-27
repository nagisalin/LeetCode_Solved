/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const lengths = strs.map(el => el.length)
    const long = Math.min(...lengths)

    if (long === 0) {
        return ""
    }

    for (var i = 0;i <= long; i++) {
        const allStr = strs.map(el => el.slice(0, i+1))
        if (!allStr.every(el => el === allStr[0])) {
            if (i !== 0) {
                return  allStr[0].slice(0, i)
            } else {
                return ""
            }
        }
    }

    return strs[0]
}