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

const obj1 = new Employee("saatvik" , "srivastava" , 20 ,"100000");
console.log(obj1);
console.log(obj1.func);
console.log(obj1.joining_year);

console.log(Employee.add(5,6));      // we can acess static function by class name not by object name 
