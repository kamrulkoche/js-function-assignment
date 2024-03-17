function checkName(variable) {
    if (typeof variable == 'string') {
        const name = variable.toLowerCase();
        let length = name.charAt(name.length - 1);
        if ("n" == length || "y" == length || "i" == length || "e" == length || "o" == length || "u" == length || "w" == length) {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }

    }
    else {
        return "invalid";
    }
}
const result = checkName("RAFEE");
console.log(result);
