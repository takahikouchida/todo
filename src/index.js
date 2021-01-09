// // // ES2015のテンプレート
// // const name = "名前";
// // const age = 28;

// // const message2 = `私の名前は${name}です。年齢は${age}`;

// // console.log(message2);

// // /**
// //  * アロー関数
// //  */

// // // 従来の関数
// // const func1 = function (str) {
// //   return str;
// // };
// // console.log(func1("aaa"));

// // // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// // console.log(func2("bbb"));

// // const func3 = (num1, num2) => num1 + num2;
// // console.log(func3(10, 10));

// // // const myProfile = {
// // //   name: "名前",
// // //   age: 28
// // // };
// // //const message1 = `名前：${myProfile.name} 年齢は${myProfile.age}です。`;
// // //console.log(message1);

// // const myProfile2 = ["名前", 42];
// // const message3 = `名前:${myProfile2[0]} 年齢:${myProfile2[1]}`;
// // console.log(message3);

// // const [name1, age2] = myProfile2;
// // const message4 = `名前:${name1} 年齢:${age2}`;
// // console.log(message4);

// // デフォルト値
// // const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
// // console.log(sayHello());

// // スプレッド構文
// // const arr1 = [1, 2, 3];
// // console.log(...arr1);

// // const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
// // sumFunc(...arr1);

// // const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, ...arr3] = arr2;
// // console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// console.log(...arr4);

// const arr6 = [...arr4];
// arr6[0] = 1;
// console.log(arr4);
// console.log(arr6);

//const nameArr = ["田中", "内田", "山田"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`index:${index} value:${nameArr[index]}`);
// }
// const namaeArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(namaeArr2);
//nameArr.map((name, index) => console.log(`名前${name} 年齢：${index}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const newNameArry = nameArr.map((name) => {
//   if (name === "内田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArry);

// const val1 =! 1  > 2 ? '1':'2';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString(num));

// console.log(typeof num);

// const formattedNum = typeof num === 'number' ? num.toLocaleString(num) : null;
// console.log(formattedNum);

// const checksum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています':'許容範囲内です';
// }
// console.log(checksum(100,40));

const flag1 = true;
const flag2 = false;

// if(flag1 || flag2) {
//   console.log(true);
// }

// if(flag1 && flag2) {
//   console.log(true);
// }

// const num = 1;
// const fee = num || "金額未設定";
// console.log(fee);

const num2 = false;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
