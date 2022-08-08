//Static class methods are defined on the class itself

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let myCar = new Car("Ford");
  console.log(myCar);
  console.log(Car.hello);       //acess by class name
