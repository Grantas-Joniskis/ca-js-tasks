const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function getFirstElement() {
        return numbers[0];
    }
    console.log(getFirstElement());
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
    function deleteFirstElement() {
        return numbers.shift();
    }
    console.log(deleteFirstElement());
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    function getLastElement() {
        return numbers[numbers.length-1];
    }
    console.log(getLastElement());
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
    function deleteLastElement() {
        return numbers.pop();
    }
    console.log(deleteLastElement());
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
    function getArrayLength() {
        return numbers.length;
    }
    console.log(getArrayLength());
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function getLastElementIndex() {
        return getArrayLength()-1;
    }
    console.log(getLastElementIndex());
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function printAllElementIndex() {
        for(let i = 0; i < getArrayLength(); i++)
            console.log(i);
    }
    printAllElementIndex();
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function printAllElementValues() {
        for(let i = 0; i < getArrayLength(); i++) {
            console.log(numbers[i]);
        }
    }
    printAllElementValues();
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function printAllElements() {
        for(let i = 0; i < getArrayLength(); i++) {
            console.log('[' + i + '] => ' + numbers[i]);
        }
    }
    printAllElements();
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function printAllElementsReverse() {
        for(let i = getLastElementIndex(); i >= 0; i--) {
            console.log('[' + i + '] => ' + numbers[i]);
        }
    }
    printAllElementsReverse();
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function printAllElementIndexLinear() {
        let indexString = "";
        for(let i = 0; i < getArrayLength(); i++) {
            indexString += i + " ";
        }
        console.log(indexString);
    }
    printAllElementIndexLinear();
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
    function printAllElementValuesLinear() {
        let valuesString = "";
        for(let i = 0; i < getArrayLength(); i++) {
            valuesString += numbers[i] + " ";
        }
        console.log(valuesString);
    }
    printAllElementValuesLinear();
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
    function printAllElementValuesLinear() {
        let elementString = "";
        for(let i = 0; i < getArrayLength(); i++) {
            elementString += '[' + i + ']=>' + numbers[i] + ' ';
        }
        console.log(elementString);
    }
    printAllElementValuesLinear();
}
console.groupEnd();