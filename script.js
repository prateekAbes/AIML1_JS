// // // // // var a = 10;
// // // // // var b = 20;

// // // // // var linebreak = "<br>";

// // // // // document.write("(a == b) =>");
// // // // // result = (a == b);
// // // // // document.write(result);
// // // // // document.write(linebreak);


// // // // // document.write("(a < b) =>");
// // // // // result = (a < b);
// // // // // document.write(result);
// // // // // document.write(linebreak);



// // // // // document.write("(a > b) =>");
// // // // // result = (a > b);
// // // // // document.write(result);
// // // // // document.write(linebreak);



// // // // // document.write("(a >= b) =>");
// // // // // result = (a >= b);
// // // // // document.write(result);
// // // // // document.write(linebreak);



// // // // // document.write("(a <= b) =>");
// // // // // result = (a <= b);
// // // // // document.write(result);
// // // // // document.write(linebreak);




// // // // // document.write("(a != b) =>");
// // // // // result = (a != b);
// // // // // document.write(result);
// // // // // document.write(linebreak);


// // // // // // var count;

// // // // // // for(count = 0;count < 10; count ++){

// // // // // //   document.write("current count :" + count);

// // // // // //   document.write("<br>");
// // // // // // }

// // // // // // document.write("<br>");

// // // // // // document.write(count);



// // // // // const person = {
// // // // //   fname:"Ajay",
// // // // //   lname:"Singh",
// // // // //   age:45

// // // // // };

// // // // // for(let x in person){


// // // // //   console.log("Person Details: " + x + ": " +person[x]);
// // // // // }

// // // // // var count = 0;

// // // // // while(count < 10){

// // // // //   console.log(count);
// // // // //   count++;
// // // // // }


// // // // // var age = 10;

// // // // // if(age >= 18){

// // // // //   console.log("You are eligible to vote");

// // // // // }

// // // // // else{

// // // // //   console.log("You are minor");

// // // // // }



// // // // var grade = 'E';

// // // // switch(grade){

// // // //   case 'A':
// // // //     console.log("Good Job");
// // // //     break;

// // // //     case 'B':
// // // //     console.log("Pretty Good");
// // // //     break;

// // // //     case 'C':
// // // //     console.log("Passed");
// // // //     break;

// // // //     case 'D':
// // // //     console.log("Not so good");
// // // //     break;

// // // //     case 'E':
// // // //     console.log("Failed");
// // // //     break;

// // // //     default:
// // // //       console.log("Unknown Grade");



    
// // // // }



// // // function sayHello(name,age)
// // // {
// // //   document.write(name + " is " + age + " years old." );
// // // }


// // // var res = mul(12,30);

// // // function mul(x, y){
// // //   return x * y;
// // // }
// // // console.log(res);

// // var add = (a, b) =>{
// //   console.log(a + b);
// // }

// // add(20,30);

// // var add2 = (a, b) =>
// //   console.log(a + b);


// // add2(100,30);



// var person = {
//   name:"John",
//   age:30,
//   isMarried:true,

//   address :{
//     street : "Vinay Nagar",
//     flatNo:201
//   }
// };


// console.log(person.name);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.address);



var person2 = new Object();

person2.name = "prateek";

person2.age = 32;

person2.isMarried = true;

person2.address = {};

person2.address.street = "nagar road";

person2.address.flatNo = 33;


console.log(person);

