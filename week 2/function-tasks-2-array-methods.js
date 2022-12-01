// ----------------------Užduotys--------------------------
// * Array.prototype.forEach
// * Array.prototype.map
// * Array.prototype.filter
// * Array.prototype.reduce

const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrBy2(arr) {
        const newArr = arr.map(x => x * 2);        
        return newArr;
    }
    console.log({
        numbers,
        result: mulArrBy2(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
    function powerArrBy2(arr) {
        const newArr = arr.map(x => x ** 2);
        return newArr;
    }
    console.log({
        numbers,
        result: powerArrBy2(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrElementsByIndex(arr) {
        const newArr = [];
        arr.forEach((x, index) => {
            newArr.push(x*index);
        });
        return newArr;
    }
    console.log({
        numbers,
        result: mulArrElementsByIndex(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
    function filterPositives(arr) {
        const newArr = arr.filter(x => x > 0);
        return newArr;
    }
    console.log({
        numbers,
        result: filterPositives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
    function filterNegatives(arr) {
        const newArr = arr.filter(x => x < 0);
        return newArr;
    }
    console.log({
        numbers,
        result: filterNegatives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
    function filterEquals(arr) {
        const newArr = arr.filter(x => x % 2 === 0);
        return newArr;
    }
    console.log({
        numbers,
        result: filterEquals(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
    function filterOdds(arr) {
        const newArr = arr.filter(x => x % 2 !== 0);
        return newArr;
    }
    console.log({
        numbers,
        result: filterOdds(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
    function arrAbsoluteValues(arr) {
        const newArr = arr.map(x => Math.abs(x));
        return newArr;
    }

    console.log('---');
    console.log({
        numbers,
        result: arrAbsoluteValues(numbers)
    });
    console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
    function powArrElementsByIndex(arr) {
        const newArr = [];
        arr.forEach((x, index) => {
            newArr.push(x**index);
        });
        return newArr;
    }
    console.log({
        numbers,
        result: powArrElementsByIndex(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
    function filterNaturals(arr) {
        const newArr = arr.filter(x => (x > 0 && x % 1 === 0));
        return newArr;
    }
    console.log({
        numbers,
        result: filterNaturals(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
    function absArrElements(arr) {
        const newArr = arr.map(x => Math.round(x));
        return newArr;
    }
    console.log({
        numbers,
        result: absArrElements(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
    function filterEverySecond(arr) {
        const newArr = arr.filter(function(x, index) {
            return index % 2 === 0;
        });
        return newArr;
    }
    console.log({
        numbers,
        result: filterEverySecond(numbers)
    });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
    function filterEveryFifth(arr) {
        const newArr = arr.filter(function(x, index) {
            return index % 5 === 0;
        });
        return newArr;
    }
    console.log({
        numbers,
        result: filterEveryFifth(numbers)
    });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
    function printArr(arr) {
        arr.forEach( (x, index) => {
            console.log(`[${index}] => ${x}`);
        });
            
    }
    printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
    function sumArr(arr) {
        const sum = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum;
    }

    console.log({
        numbers,
        result: sumArr(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
    function avgArr(arr) {
        const sum = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum/arr.length;
    }

    console.log({
        numbers,
        result: avgArr(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
    function arrMax(arr) {
        let max = -99999999;
        arr.forEach((x) =>{
            max = max < x ? x : max;
        });
        return max;
    }

    console.log({
        numbers,
        result: arrMax(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
    function arrMin(arr) {
        let min = 99999999;
        arr.forEach((x) =>{
            min = min > x ? x : min;
        });
        return min;
    }

    console.log({
        numbers,
        result: arrMin(numbers)
    });
}
console.log('---');
console.groupEnd();