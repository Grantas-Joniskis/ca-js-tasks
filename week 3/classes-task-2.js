console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        constructor(name, age, height, weight) {
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }
        getAge() {
            return this.age;
        }
        getHeight() {
            return this.height;
        }
        getWeight() {
            return this.weight;
        }
    }

    const p1 = new Player("David Jones", 25, 175, 75)
    console.log(p1.getAge());
    console.log(p1.getHeight());
    console.log(p1.getWeight());
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        add(num1, num2) {
            return num1 + num2;
        }

        subtract(num1, num2) {
            return num1 - num2;
        }

        multiply(num1, num2) {
            return num1 * num2;
        }

        divide(num1, num2) {
            return num1 / num2;
        }
    }
    const calculator = new Calculator();
    console.log(calculator.add(10, 5));
    console.log(calculator.subtract(10, 5));
    console.log(calculator.multiply(10, 5));
    console.log(calculator.divide(10, 5));
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = firstname + ' ' + lastname;
            this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@gmail.com`;
        }
    }
    emp1 = new Employee("John", "Smith")
    console.log(emp1.fullname);

    emp2 = new Employee("Mary", "Sue")
    console.log(emp2.email);

    emp3 = new Employee("Antony", "Walker")
    console.log(emp3.firstname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        compareAge(person) {
            if (this.age > person.age) {
                return person.name + " is younger than me.";
            } else if (this.age < person.age) {
                return person.name + " is older than me.";
            } else {
                return person.name + " is the same age as me.";
            }
        }
    }

    const p1 = new Person("Samuel", 24);
    const p2 = new Person("Joel", 36);
    const p3 = new Person("Lily", 24);

    console.log(p1.compareAge(p2));
    console.log(p2.compareAge(p1));
    console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius ** 2;
        }
        getPerimeter() {
            return Math.PI * this.radius * 2;
        }
    }
    const circy = new Circle(11)
    console.log(circy.getArea());

    const circy1 = new Circle(4.44)
    console.log(circy1.getPerimeter());
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
        constructor(fname, lname) {
            this.fname = fname;
            this.lname = lname;
            this.fullname = fname + ' ' + lname;
            this.intials = fname.charAt(0).toUpperCase() + '.' + lname.charAt(0).toUpperCase();
        }
    }
    const a1 = new Name("john", "SMITH");
    console.log(a1.fname);
    console.log(a1.lname);
    console.log(a1.fullname);
    console.log(a1.intials);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    function sweetestIcecream(arr) {
        let max = -99999999;
        for(const icecream of arr) {
            max = max < icecream.total ? icecream.total : max;
        }
        return max;
    }

    class IceCream {
        #sweetValues = {
            'Plain': 0,
            'Vanilla': 5,
            'ChocolateChip': 5,
            'Strawberry':	10,
            'Chocolate': 10  
        }
        constructor(flavor, numSprinkles) {
            this.flavor = flavor;
            this.numSprinkles = numSprinkles;
            this.total = this.#sweetValues[flavor] + numSprinkles;
        }
    }

    const ice1 = new IceCream("Chocolate", 13);
    const ice2 = new IceCream("Vanilla", 0);
    const ice3 = new IceCream("Strawberry", 7);
    const ice4 = new IceCream("Plain", 18);
    const ice5 = new IceCream("ChocolateChip", 3);

    console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
    console.log(sweetestIcecream([ice3, ice1]));
    console.log(sweetestIcecream([ice3, ice5]));
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines {
        constructor(num) {
            this.ones = num / 1;
            this.threes = Math.floor(num / 3);
            this.nines = Math.floor(num / 9);
        }
    }
    const n1 = new OnesThreesNines(5);
    console.log(n1.nines);
    console.log(n1.ones);
    console.log(n1.threes);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User {
        static userCount = 0;
        constructor(username) {
            this.username = username;
            User.userCount++;
        }
    }
    const u1 = new User("johnsmith10");
    const u2 = new User("marysue1989");
    const u3 = new User("milan_rodrick");

    console.log(User.userCount);
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
        getTitle() {
            return 'Title: ' + this.title;
        }
        getAuthor() {
            return 'Author: ' + this.author;
        }
    }
    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    console.log(PP.getTitle());
    console.log(PP.getAuthor());
}
console.groupEnd();