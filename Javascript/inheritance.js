

//To create a class inheritance, use the extends keyword.

//   DERIVED CLASS extends PARENT CLASS
//The super() method refers to the parent class

class Employee{
    constructor(givenname , givelname , experiance , salary){
        this.name = givenname;
        this.lname = givelname;
        this.experiance = experiance;
        this.salary = salary;

    }
     func() {
        return (`hello my name is ${this.name}`);         // function
     }

     joining_year(){
        return 2022 - this.experiance;
     }
     static add(a,b){
        return a+b;
     }

}

const obj1 = new Employee("saatvik" , "srivastava" , 20 ,100000);
console.log(obj1);
console.log(obj1.func);
console.log(obj1.joining_year);

console.log(Employee.add(5,6));      // we can acess static function by class name not by object name 


// extended class

class programmer extends Employee{
    constructor(givenname , givelname , experiance , salary,language){
        super(givenname , givelname , experiance , salary);
        this.language = language;

    }
}

obj_programmer = new programmer("saatvik","s" , 19 , 100000 , "english")
console.log(obj_programmer);





