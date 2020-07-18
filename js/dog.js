import {Animal} from "./animal";

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

export default Dog;
