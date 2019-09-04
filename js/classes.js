// CLASSES

// Usual class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`Hi there! My name is ${this.name}. I'm ${this.age} years old`);
  }
}

const me = new Person("Javier", 27);
me.print(); // Hi there! My name is Javier. I'm 27 years old

// Inheritance
class Cyborg extends Person {
  constructor(name, age, power, version) {
    super(name, age);
    this.power = power;
    this.version = version;
  }

  print() {
    super.print();
    console.log(
      `I have ${this.power} units of power and my version is ${this.version}`
    );
  }
}

const meTerminator = new Cyborg("JavierT3000", 512, 99, 1.5);
meTerminator.print();
// Hi there! My name is JavierT3000. I'm 512 years old
// I have 99 units of power and my version is 1.5
