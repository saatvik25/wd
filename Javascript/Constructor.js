// creating constructor for car //


// "this" is not a variable. It is a keyword. You cannot change the value of this

function gernalcar(givenname , givenspeed) {
this.name = givenname;
this.speed = givenspeed;
this.run = function(){
    console.log(`${this.name} is running`);
}
this.analyze = function(){
    console.log(`${this.name} is slower by ${200 - this.speed} than Marcedes`)
}

}

//object creation  


car1 = new gernalcar('Nissan' , 200);     // object 1 is created
car2 = new gernalcar('maruti' , 180);       // object 2 is created using new keyword

console.log(car1);
console.log(car1.run);
console.log(car1.analyze);


console.log(car2);
console.log(car2.run);
console.log(car2.analyze);


console.log(car1 ,car2);




// object prototype

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
// The JavaScript prototype property allows you to add new properties to object constructors using ".prototype" followed by object name ex person
 Person.prototype.state = 'up';



 // The JavaScript prototype property also allows you to add new methods to objects constructors

Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}
 // now we acess these from obj object that we have created


  obj = new Person("saatvik", "srivastava",20 , "black" );   // new keyword s mandatory to create object

  console.log(obj);
  console.log(obj.state);
  console.log(obj.name)
