console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeFirstLetterA(str) {
        const index = str.indexOf('a');
        if (index !== -1) {
            return str.slice(0, index) + str.slice(index + 1);
        }
        return str;
    }
    console.log('---');
    console.log({
        'labas': removeFirstLetterA('labas'),
        'kempiniukas': removeFirstLetterA('kempiniukas'),
        '123123': removeFirstLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeLastLetterA(str) {
        const index = str.lastIndexOf('a');
        if (index !== -1) {
            return str.slice(0, index) + str.slice(index + 1);
        }
        return str;
    }
    console.log('---');
    console.log({
        'labas': removeLastLetterA('labas'),
        'kempiniukas': removeLastLetterA('kempiniukas'),
        '123123': removeLastLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
    function removeAllOccurencesOfLetterA(str) {
        const indexes = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'a') {
                indexes.push(i);
            }
        }
        for (let i = 0; i < indexes.length; i++) {
            str = str.split('');
            str.splice(indexes[i], 1);
            str = str.join('');
            for (let j = i; j < indexes.length; j++) indexes[j] = indexes[j] - 1;
        }
        return str;
    }
    console.log('---');
    console.log({
        'labas': removeAllOccurencesOfLetterA('labas'),
        'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
        '123123': removeAllOccurencesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
    function removeAllOccurencesOfLetter(str, letter) {
        const indexes = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                indexes.push(i);
            }
        }
        for (let i = 0; i < indexes.length; i++) {
            str = str.split('');
            str.splice(indexes[i], 1);
            str = str.join('');
            for (let j = i; j < indexes.length; j++) indexes[j] = indexes[j] - 1;
        }
        return str;
    }
    console.log('---');
    console.log({
        'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
        'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
        '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
    function filterLetters(str, lettersToRemove) {
        const indexes = [];
        for (let i = 0; i < str.length; i++) {
            for (letter of lettersToRemove) {
                if (str[i] === letter) indexes.push(i);
            }
        }
        for (let i = 0; i < indexes.length; i++) {
            str = str.split('');
            str.splice(indexes[i], 1);
            str = str.join('');
            for (let j = i; j < indexes.length; j++) indexes[j] = indexes[j] - 1;
        }
        return str;
    }
    console.log('---');
    const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
    console.log(str);
    console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
    function replaceSpaceWithDash(str) {
        return str.replaceAll(' ', '-');
    }
    console.log('---');
    console.log({
        'viens du trys': replaceSpaceWithDash('viens du trys'),
        'as tave myliu': replaceSpaceWithDash('as tave myliu'),
        'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
    function capitalize(str) {
        const arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(' ');
    }
    console.log('---');
    console.log({
        'viens du trys': capitalize('viens du trys'),
        'as tave myliu': capitalize('as tave myliu'),
        'Bairis seniuk': capitalize('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();