//working with variables
// let admin;
// let name;
// name = 'John';
// admin = name;
// alert(admin);

//data types

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

//ternary

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message = (login == 'Employer') ? 'Hello' :
// (login == 'Director') ? 'Greetings' :
// (login == '') ? 'No login' : '';

//coalescing

// let user;
// alert(user ?? "Anonymous");

// let user = 'John';
// alert(user ?? "Anonymous");

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// alert(firstName ?? lastName ?? nickName ?? "Anonymous");

//loop



// numero primos, los que solo se pueden dividir entre 1 y ellos mismos
// 2, 5, 7, 9, 11

// let n = 10;

// outer: for(let i = 2 ; i <= n ; i++){
//     for(let j = 2 ; j < i ; j++){
//         if(i % j === 0){
//             continue outer;
//         }
//     }
//     console.log(i)
// }


//functions

//function expressions

// function sayHi(){
//     alert('Hello');
// }

// alert(sayHi)

// let sayHi = function() {
//     alert('Hello')
// }

// alert(sayHi())

// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }

// function showOk(){
//     alert("You agreed")
// }

// function showCancel(){
//     alert('You canceled the execution') 
// }

// ask("do you agree?", showOk, showCancel)


//arrow functions

// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no()
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed"),
//     () => alert("You cancelled the execution")
// )