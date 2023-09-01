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

    // let fruits = ['Apple', 'Orange', 'Pear']
    // console.log(fruits.shift())
    // console.log(fruits)

    // fruits.unshift('Apple')
    // console.log(fruits)

    // for (let i = 0; i < fruits.length; i++) {
    //     console.log(fruits[i])
    // }

    // for(let fruit of fruits){
    //     console.log(fruit)
    // }


    //MULTIDIMENSIONAL ARRAYS

    // let matrix = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9]
    // ]

    // console.log(matrix)
    // console.log(matrix[1][1])


    //ARRAY OPERATIONS

    // let styles = ['Jazz','Blues']
    // console.log(styles)
    // styles.push('Rock-n-Roll')
    // console.log(styles)
    // styles[1] = 'Classics'
    // console.log(styles)
    // styles.shift()
    // console.log(styles)
    // styles.unshift('Rap','Reggae')
    // console.log(styles)

    // function sumInput(){

    //     let sum = 0;
    //     let numbers = []

    //     while(true){
    //        let input = prompt("A number please?")
    //        if(input === "" || input === null || !isFinite(input)){
    //         break;
    //        }
    //        let num = Number(input)
    //        numbers.push(num)
    //     //    for(number of numbers){
    //     //     sum+=number
    //     // }
    //     }
    //     for(number of numbers){
    //         sum+=number
    //     }
    //     return sum
    // }

    // alert(sumInput())

    // function getMaxSubSum(arr){

    // }

    // getMaxSubSum([-1, 2, 3, -9]) 
    // // == 5 (the sum of highlighted items)
    // getMaxSubSum([2, -1, 2, 3, -9]) // == 6
    // getMaxSubSum([-1, 2, 3, -9, 11]) // == 11
    // getMaxSubSum([-2, -1, 1, 2]) // == 3
    // getMaxSubSum([100, -9, 2, -3, 5]) // == 100
    // getMaxSubSum([1, 2, 3]) == 6 //(take all)
    // getMaxSubSum([-1, -2, -3]) = 0


    //ARRAY METHODS

    // let arr = ['I', 'go', 'home']
    
    // delete arr[1]

    // console.log(arr[1])

    // console.log(arr.length)

    //splice

    // let arr = ['I', 'study', 'JavaScript']

    // arr.splice(1,1)
    // console.log(arr)

    // let arr = ['I', 'study', 'JavaScript', 'right', 'now']

    // arr.splice(0,3, "Let's", "dance")

    // console.log(arr)

    // let arr = ['I', 'study', 'JavaScript', 'right', 'now']

    // let removed = arr.splice(0,2)
    // console.log(removed)

    // let arr = ['I', 'study', 'JavaScript']

    // arr.splice(2,0,'commplex', 'language')
    // console.log(arr)


    //slice

    // let arr = ['t','e','s','t']

    // console.log(arr.slice(1,3))
    // console.log(arr.slice(-2))

    //concat

    // let arr = [1,2]

    // console.log(arr.concat([3,4]))
    // console.log(arr.concat([3,4],[5,6]))
    // console.log(arr.concat([3,4],5,6))

    //forEach

    // let arr = ['Bilbo', 'Gandalf', 'Nazgul']
    // arr.forEach((item,index,array) => {
    //     console.log(`${item} is at index ${index} in ${array}`)
    // })


    //Searching in array

    //indexof/lastIndexOf

    // let arr = [1, 0, false]

    // console.log(arr.indexOf(0))
    // console.log(arr.indexOf(false))
    // console.log(arr.indexOf(null))
    // console.log(arr.includes(1))

    //find

    // let users = [
    //     {id:1,name:'John'},
    //     {id:2,name:'Pete'},
    //     {id:3,name:'Mary'}
    // ]

    // // let user = users.find(item => item.id == 3)

    // let user = users.find(function(item){
    //     return item.id == 3;
    // })

    // console.log(user)

    // console.log(user.name)

    let arr = ['Bilbo', 'Gandalf', 'Nazgul']

    let lengths = arr.map(item => item.length)
    console.log(lengths)

    let users = [
        {id:1,name:'John'},
        {id:2,name:'Pete'},
        {id:3,name:'Mary'}
    ]

    let user = users.map(item => item.id == 3)

    console.log(user)
