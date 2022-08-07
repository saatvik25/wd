//convert data from javascript to json

JSON.stringify()



const obj = {
         name: "John", 
        age: 30, 
        city: "New York"
};


const json = JSON.stringify(obj);

//example 

var js = { "name " : "john",
           "age": 20,
           "developer " :true,
           id : 1234
          }
var json = JSON.stringify(js);

console.log(json);


{"name ":"john","age":20,"developer ":true,"id":1234}

