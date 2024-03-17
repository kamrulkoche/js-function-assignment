function password(userInfo) {
    const birthYear = userInfo.birthYear;
    const stringNumber = birthYear.toString();
    const x = stringNumber.length;
    if (x == 4) {
        const siteName = userInfo.siteName;
        const site = siteName.charAt(0).toUpperCase() + siteName.slice(1);
        const name = userInfo.name;
        const birthYear = userInfo.birthYear;
        const result = site + "#" + name + "@" + birthYear;
        return result;
    }
    else {
        return "invalid";
    }
}

const userInfo = { name: "kolimuddin", birthYear: 1994, siteName: "google" };
const generatedPassword = password(userInfo);
console.log(generatedPassword);