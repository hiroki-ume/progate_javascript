const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  }
};

console.log(animal.name);
animal.greet();

console.log("---------------");

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`年齢は${this.age}歳です`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);

    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`年齢は${this.age}歳です`);
    console.log(`犬種は${this.breed}です`);
    const humanAge = dog.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("太郎", 5, "チワワ");
dog.info();


animal1 = new Animal("レオ", 3);
animal1.info();
