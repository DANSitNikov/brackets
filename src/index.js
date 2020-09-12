module.exports = function check(str, bracketsConfig) {
    const strLength = str.length;
    let arr = [],
        newArr = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        let a = `${bracketsConfig[i][0]}${bracketsConfig[i][1]}`;
        arr.push(a);
    }

    function checkBrackets(str, arr, newArr) {
        let newStr = str.match(/.{1,2}/gi);
        for (let i = 0; i < newStr.length; i++) {
            if (arr.includes(newStr[i])) {
                return true;
            }
        }
    }

    let a = checkBrackets(str, arr, newArr);
    return a;
}
