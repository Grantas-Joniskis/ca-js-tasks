console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks) {
        drinks.sort((a, b) => (a.price > b.price) ? 1 : -1);
        return drinks;
    }
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
    }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        const genRules = {
            "-3m": "great grandfather",
            "-3f": "great grandmother",
            "-2m": "grandfather",
            "-2f": "grandmother",
            "-1m": "father",
            "-1f": "mother",
            "0m": "me!",
            "0f": "me!",
            "1m": "son",
            "1f": "daughter",
            "2m": "grandson",
            "2f": "granddaughter",
            "3m": "great grandson",
            "3f": "great granddaughter"
        }	
        return genRules[`${x}${y}`];
    }
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        let sum = 0;
        for(let i = 0; i < 7; i++) {
            sum += Object.values(tileHand[i])[1];
        }
        return sum;
    }
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        let values = Object.values(obj);
        let length = Object.values(obj).length;
        let sum = 0;
        for(let i = 0; i < length; i++) {
            sum += values[i];
        }
        return sum - limit;
    }
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        let entries = Object.entries(obj);
        return entries;
    }
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        let values = Object.values(inks);
        return Math.min.apply(Math, values);
    }
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        let values = Object.values(obj);
        let valuesLength = Object.values(obj).length;
        
        if(valuesLength === 0) return "Lucky you!" ;
        let sum = 0;
        for(let i = 0; i < valuesLength; i++) {
            sum += values[i];
        }
        return sum;
    }
}
console.groupEnd();
