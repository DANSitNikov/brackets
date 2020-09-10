module.exports = function check(str, bracketsConfig) {
    if (typeof str !== 'string' || typeof bracketsConfig !== 'object') {
        return false;
    }
    let strRes = [],
        arrRes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\]|\[|\{|\}|\||\(|\)/)) {
            strRes.push(str[i])
        }
    }
    bracketsConfig = bracketsConfig.flat();
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i].match(/\]|\[|\{|\}|\||\(|\)/)) {
            arrRes.push(bracketsConfig[i]);
        }
    }
    if (strRes.length % 2 === 0 && arrRes.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
