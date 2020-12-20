//Напишите функцию, которая будет проходить через массив целых чисел
// и выводить индекс каждого элемента с задержкой в 3 секунды.
const array = [10, 20, 30, 40, 42, 100];
// const arr1 = [10, 20, 30, 40, 42];
console.log(`Numbers" `, array);
showIndex(array);
// showsIndex(arr1);
function showIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const timeout = (i + 1) * 3000;
    setTimeout(() => {
      console.log(`number:${arr[i]} - index:${[i]}`);
    }, timeout);
  }
}

// function showsIndex(arr) {
//   setTimeout(() => {
//     console.log(`number:${arr[0]}-index:${[0]}`);
//     setTimeout(() => {
//       console.log(`number:${arr[1]}-index:${[1]}`);
//       setTimeout(() => {
//         console.log(`number:${arr[2]}-index:${[2]}`);
//         setTimeout(() => {
//           console.log(`number:${arr[3]}-index:${[3]}`);
//           setTimeout(() => {
//             console.log(`number:${arr[4]}-index:${[4]}`);
//           }, 3000);
//         }, 3000);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }

// for (var i = 0; i < 10; i += 1) {
//   setTimeout(
//     function (i) {
//       console.log('setTimeout', i);
//     },
//     i * 2000,
//     i,
//   );
// }
