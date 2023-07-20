// METHODS OF PRIMITIVES
// 'use strict'

// let str = "Hello"

// str.test = 5;

// alert(str.test)


//Numbers

    // let num1 = prompt("The first number?")
    // let num2 = prompt("The second number?")
    // let result = parseInt(num1)+parseInt(num2)
    // alert(result)


    // let num1 = parseInt(prompt("The first number?"))
    // let num2 = parseInt(prompt("The second number?"))
    // let result = num1+num2;
    // result = parseInt(result)
    // alert(result)


    // function readNumber(){
    //     let number =  parseInt(prompt("Enter a number please?"))
    //     if(!number){
    //         alert("undefined")
    //     }else{
    //         alert(number)
    //     }
    // }

    // readNumber()


    // let randomInteger = (min,max) =>{ 
    //     Math.random()
    // }

    // alert( randomInteger(1, 5) ); // 1
    // alert( randomInteger(1, 5) ); // 3
    // alert( randomInteger(1, 5) ); // 5

    // function random(min,max){
    //     return min + Math.random() * (max-min);
    // }

    // alert( random(1, 5) );
    // alert( random(1, 5) );
    // alert( random(1, 5) );

    // function randomInteger(min,max){
    //     let random = min + Math.random() * (max+1-min)
    //     return Math.floor(random)
    // }

    // alert( randomInteger(1, 5) ); // 1
    // alert( randomInteger(1, 5) ); // 3
    // alert( randomInteger(1, 5) ); // 5

    //STRINGS

    // let str = 'Widget with id'
    // alert(str.indexOf('Widget'))
    // alert(str.indexOf('widget'))
    // alert(str.indexOf("id"))
    // alert(str.indexOf('get'))

    // let str = 'Widget with id'
    // alert(str.indexOf('id',2))

    // let str = 'As sly as a fox, as strong as an ox'

    // let target = 'as'

    // let pos = 0

    // while(true){
    //     let foundPos = str.indexOf(target, pos)
    //     if(foundPos == -1){
    //         break;
    //     }
    //     alert(`Found at ${foundPos}`)
    //     pos = foundPos + 1
    // }


    //includes, startswith, endswith

    // alert('Widget with id'.includes('Widget'))
    // alert('Hello'.includes('Bye'))

    // alert('Widget'.includes('id')) 
    // alert('Widget'.includes('id',3)) 

    // alert('Widget'.startsWith('Wid'))
    // alert('Widget'.endsWith('dget'))

    // let str = "stringify"
    // console.log(str.slice(0,5))
    // console.log(str.slice(0,1))

    // let str = 'stringify'
    // console.log(str.slice(-4,-1))

    // let str = 'stringify'

    // console.log(str.substring(2,6))
    // console.log(str.substring(6,2))

    // console.log(str.slice(2,6))
    // console.log(str.slice(6,2))


    //COMPARING STRINGS

    // console.log('a'.codePointAt(0))
    // console.log('Z'.codePointAt(0))
    // console.log('a'>'Z')


    //ARRAYS

    // let fruits = ['Apple', 'Orange', 'Plum']
    // console.log(fruits)

    let fruits = ['Apple', 'Orange', 'Pear']
    // console.log(fruits.shift())
    // console.log(fruits)

    // fruits.unshift('Apple')
    // console.log(fruits)

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }

    for(let fruit of fruits){
        console.log(fruit)
    }

