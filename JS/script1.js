//objects

// let user = {};

// let user = {
//     name:'John',
//     age:30,
//     isAdmin: true,
//     "loves Jesus": true
// }

// console.log(user);
// delete user.age;

// console.log(user["loves Jesus"])

// let key = "loves Jesus"
// console.log(user[key])

// let key = prompt("What do you want to know about the user?", "age")

// alert(user[key])

// let fruit = prompt("which fruit to buy", "apple");

// let bag = {
//     [fruit] : 5
// }

// console.log(bag.apple)
// console.log(bag.pear)
// console.log(bag.pineapple)
// console.log(bag.pear)

// let fruit = prompt("Which fruit to buy?", "pear");
// let bag = {};


// bag[fruit] = 5;
// console.log(bag.fruit)

// let user = {
//     name: 'John',
//     age: 30,
//     isAdmin : true
// }

// for(let key in user){
//     alert(key)
//     alert(user[key])
// }

// let user = {}
// user.name = 'John';
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name ;

// let schedule = {}

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0

// for(props in salaries){
//     sum+=salaries[props]
// }

// console.log(sum)


//Object references and copying


// let user = {name:'John'}
// let admin = user;
// console.log(user)
// console.log(admin)

// admin.name = 'Peter'
// console.log(user)
// console.log(admin)

// let user = {name: 'John'}

// let permissions1 = {canView:true}
// let permissions2 = {canEdit:true}

// Object.assign(user,permissions1,permissions2)

// console.log(user.name)
// console.log(user.canView)
// console.log(user.canEdit)

// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// }

// // console.log(user.sizes.height)
// let clone = Object.assign({},user)
// let sizes = Object.assign({}, user.sizes)
// console.log(user.sizes === clone.sizes)
// console.log(sizes)

// let user = {
//     name: 'John',
//     age : 30
// }

// let clone = {...user}
// console.log(clone)
// console.log(clone === user)


// let user = {
//     name: 'John',
//     age: 30
// }

// user.sayHi = function(){
//     alert('Hello!')
// }

// user.sayHi()

// let user = {
//     name: 'John',
//     age: 30,
//     sayHi(){
//         console.log(this.name)
//     }
// }

// user.sayHi();


// let user = {name:'John'}
// let admin = {name:'Admin'}

// function sayHi(){
//     console.log(this.name)
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f()
// admin.f()

// admin['f']()

// 'use strict'

// function sayHi(){
//     console.log(this)
// }

// sayHi()


//constructor, operator new


// function User(name){
//     this.name =  name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name)
// console.log(user.isAdmin)
// console.log(user)

// let user = new function(){
//     this.name = 'John'
//     this.isAdmin = false;
// }



// console.log(user)


// function Calculator(){
//     this.read = (num1,num2) =>{
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     this.sum = () =>{
//         return this.num1 + this.num2;
//     }
//     this.mul = () =>{
//         return this.num1 * this.num2
//     }
// }

// let calculator = new Calculator();

// calculator.read(3,5)
// console.log(calculator.sum())
// console.log(calculator.mul())

