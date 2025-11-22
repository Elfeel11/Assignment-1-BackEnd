// Part 1

// 1.question

num = "123";

console.log(Number(num) + 7); // 130

// 2.question

var x = 0;

if (x == 0) {
  console.log("Invalid");
} else {
  console.log("Valid");
}
// Output: Invalid

// 3.question

// var i = 1;

// for (i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//   console.log(i);
// }  }
// Output: 1 3 5 7 9

// 4.question

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.filter((num) =>{
//     if (num % 2 == 0) {
//         console.log(num);
//     }});

// Output: 2 4 6 8 10

// 5.question

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

var mergedArr = [...arr1, ...arr2];
console.log(mergedArr);
// Output: [1,2,3,4,5,6,7,8,9,10]

// 6.question

// var dayNum = 3;

// switch (dayNum){

//     case 1:
//         console.log("Sunday");
//         return;
//     case 2:
//         console.log("Monday");
//         return;
//     case 3:
//         console.log("Tuesday");
//         return;
//     case 4:
//         console.log("Wednesday");
//         return;
//     case 5:
//         console.log("Thursday");
//         return;
//     case 6:
//         console.log("Friday");
//         return;
//     case 7:
//         console.log("Saturday");
//         return;
//     default:
//         console.log("Invalid day number");
// }
// Output: Tuesday

// 7.question

// const arrStr = ["abc", "aabbcc", "aaabbbccc"];

// arrStr.map((str) => {
//     console.log(str.length);
// });
// Output: 3 6 9

// 8.question

function check(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible by Both");
  } else {
    console.log("Not Divisible by Both");
  }
}

check(15);
// Output: Divisible by Both

// 9.question

const squre = (num) => {
  return num ** 2;
};

console.log(squre(6));
// Output: 36

// 10.question

function personInfo({ person }) {
  const { name, age } = person;

  console.log(name + " " + "is" + " " + age + " " + "years old.");

  return;
}

const person = { name: "Ahmed", age: 26 };
personInfo({ person });
// Output: Ahmed is 26 years old.

// 11.question
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sum(7, 12, 19));

// Output: 38

// 12.question

// مش متأكد من الاجابه

async function solve(num) {
  const promise = (await num) + 20 == 30 ? "Success" : "Failure";
  console.log(promise);
}
solve(10);

// Output: Success

// 13.question

const arrNum = [5, 19, 45, 28, 35];

const maxNum = Math.max(...arrNum);

console.log(maxNum);

// Output: 45

// 14.question

function keys({ name, age, city }) {
  return Object.keys({ name, age, city });
}

console.log(keys({ name: "Mohamed", age: 28, city: "Giza" }));
// Output: ["name", "age", "city"]

// 15.question

function strSlite(str) {
  return str.split(" ");
}

console.log(strSlite("Palstine Will Be Free"));

// Output: ["Palstine", "Will", "Be", "Free"]

// Part 2

// 1.question
// مكنتش عارفه فعملت search

// ForEach
// تستخدم على الarray فقط من غير ما ترجع قيمه جديده

// For...of
// تستخدم مع أي iterable مش الArray بس وتقدر ترجع قيمه جديده وبتستخدم مع الconditions

// 2.question
// مكنتش عارف TDZ فعملت search

// hoasting كل الfun وال variable بتترفع لأول الscope الخاص بالملف
//  مثال

// console.log(a); // Error: Cannot access 'a' before initialization
// const a = 5;

// في المثال ده const اتعملها hoasting ولكن طلعت في اول الscope بدون قيمة فقط declaration  ومن اول ما اترفعت فوق ظهر ال TDZ دي المنطقة الي من اول المكان الي اترفعت في const لحد ماتم وضع قيمة لل a
// وهي const a = 5
// وعلشان كده لما حاولنا نطبعها قبل ما نحط لها قيمة طلع لنا error

// 3.question
// == تقارن القيمتين وتحول نوعهم لو مش متشابه مادام القيمه متشابه هيطع true
// === بتقارن القيمتين والنوع لو مش متشابه بيرجع false على طول

// 4.question
// Try...Catch
// بتستخدم في التعامل مع الerrors في الcode
// بنحط الcode الي ممكن يعمل error جواه في الtry ولو حصل
// error بينفذ الcatch الي جواه كود تاني بيتعامل مع الerror

//  مهم للasync operations زي طلبات الAPI عشان لو حصل مشكلة في الطلب نقدر نتعامل معاها بدل ما البرنامج يوقف فجأة
// وده يخلي الfun متوقعش ويعرض رسالة للuser بدل ما ينهار البرنامج كله

// 5.question
// Type conversion اسمه explicit conversion
// وده عباره عن تحويل صريح للtypeالdeveloper هو الي بيعمله
// مثال
var strNum = "456";
var convertedNum = Number(strNum); // تحويل صريح من string لnumber
console.log(convertedNum + 10); // 466

// Type coercion اسمه implicit conversion
// وده بيحصل تلقائي من الJavaScript نفسها
// مثال
var result = "5" * 2; // تحويل ضمني من string لnumber
console.log(result); // 10

//
