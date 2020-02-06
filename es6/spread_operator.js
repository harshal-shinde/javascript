//Spread operator test example


//Example 1
const human = {
	eyes : 2,
	nose :1,
	ear :2
};


const person  = {
	...human,
	hand : 2,
	foot : 2
};

console.log(human);
console.log(person);


//example 2
const user = {
	age : 19
  };
  
  
  const person =  {
	...user,
	name : "harshal"
  };
  
  console.log(person);



//Example 3 : references and primitive types
const  person  = {
	name : "Harshal"
  };
  
  
  const secondPerson = {
	...person
  };
  
  person.name = "shinde"
  console.log(secondPerson);
  