// Q1

// const someNumber = 1
// someNumber.abc = 'abc'

// console.clear()
// console.log(someNumber.abc)

// const someArray = []
// someArray.abc = 'abc'

// console.clear()
// console.log(someArray.abc)

// Q2

// console.clear()

// console.log(!!'0')
// console.log(!!+'0')
// console.log(+true + 1)

// Q3

// console.clear()

// console.log(0)
// setTimeout(() => { console.log(1) }, 0)
// Promise.resolve(2).then((result) => { console.log(result) })
// console.log(4)

// Q4

// implement sum function

// console.clear()

// sum([1, 2, 3]) // should output 6
// sum(1, 2, 3) // should output 6
// sum(1, 2, [3, [4], 5]) // should output 15

// Q5

// const a = {}
// const b = {key: 'b'}
// const c = {key: 'c'}

// a[b] = 123;
// a[c] = 456;

// console.clear()
// console.log(a.b)
// console.log(a)

// Q6

// let arr1 = ['a', 'b', 'c']
// let arr2 = arr1

// arr1 = [];

// console.clear()
// console.log(arr2);

// Q7

// function greet(person) {
//   if (person == { name: "human" }) {
//     return "hey human";
//   } else {
//     return "hey robot";
//   }
// }

// console.clear()
// console.log(greet({ name: "human" }));

// Q8

// function greet(person) {
//   if (person == { name: "human" }) {
//     return "hey human";
//   } else {
//     return "hey robot";
//   }
// }

// console.clear()
// console.log(greet({ name: "human" }));

// Q9

// You get a following string from a server
// const wsMessage =
//   "'WFStartResult(code=200, msg=process started, actualUserTaskId=null, syncResult=null, traceId=ca0632e2-10e8-4c40-aabc-27f2849a7d13)'";

// need to create a getTraceID function
// const getTraceID = () => {};

// const traceID = getTraceID(wsMessage);

// console.clear()
// console.log(traceID); // ca0632e2-10e8-4c40-aabc-27f2849a7d13

// Q10

// for (var i = 0; i < 5; i++) {
//   const btn = document.createElement("button");

//   btn.appendChild(document.createTextNode("Button " + i));
//   btn.addEventListener("click", function () {
//     console.log(i);
//   });

//   document.body.appendChild(btn);
// }
