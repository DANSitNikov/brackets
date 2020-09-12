module.exports = function check(str, bracketsConfig) {
    const strLength = str.length;
    let arr = [],
        newArr = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        let a = `${bracketsConfig[i][0]}${bracketsConfig[i][1]}`;
        arr.push(a);
    }

    function checkBrackets(str, arr, newArr) {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str.length; j++) {
                let check = str[i] + str[i + 1]
                if (arr[j] === check) {
                    newArr.push(arr[j]);
                    str = str.split('')
                    str.splice(i, 2);
                    str = str.join('')
                    return checkBrackets(str, arr, newArr);
                }
            }
        }
        return newArr;
    }

    let a = checkBrackets(str, arr, newArr);
    return a.join('').length === strLength;
}
