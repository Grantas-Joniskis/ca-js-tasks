const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false
    }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
    for(human of people) {
        console.log(human);
    } 
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
    for(human of people) {
        console.log(`${human.name}-${human.surname}`);
    }
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
    for(human of people) {
        console.log(human.name);
        console.log(human.surname);
        console.log(human.married);
        console.log();
    }
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const arr = [];
    for(human of people) {
        const obj = {
            'sex': human.sex,
            'income': human.income
        }
        arr.push(obj);
    }
    console.log(arr);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const arr = [];
    for(human of people) {
        const obj = {
            name: human.name,
            surname: human.surname,
            sex: human.sex
        }
        arr.push(obj);
    }
    console.log(arr);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    for(human of people) {
        if(human.sex === 'male') console.log(human);
    }
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    for(human of people) {
        if(human.sex === 'female') console.log(human);
    }
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    for(human of people) {
        if(human.hasCar === true) console.log(human);
    }
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    for(human of people) {
        if(human.married === true) console.log(human);
    }
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const drivers = {
        female: 0,
        male: 0
    }
    for(human of people) {
        switch (human.sex) {
            case 'female': 
                drivers.female++;
                break;
            case 'male':
                drivers.male++;
                break;
        }
    }
    console.log(drivers);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    for(human of people) {
        human['salary'] = human['income'];
        delete human['income'];
    }
    console.log(people);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
    const arr = [];
    for(human of people) {
        newHuman = JSON.parse(JSON.stringify(human));
        delete newHuman['sex'];
        delete newHuman['name'];
        delete newHuman['surname'];
        arr.push(newHuman);
    }
    console.log(arr);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const arr = [];
    for(human of people) {
        newHuman = JSON.parse(JSON.stringify(human));
        const str = `${newHuman['name']} ${newHuman['surname']}`;
        newHuman.fullname = str;
        
        delete newHuman['name'];
        delete newHuman['surname'];
        
        arr.push(newHuman);
    }
    console.log(arr);
}
console.groupEnd();