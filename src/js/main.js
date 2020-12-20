const a = document.querySelector('.as');
const p = document.querySelector('.hidden');
let id = null;
p.addEventListener('click', delClass);
// console.log(a, p);
function delClass(e) {
  //   console.log(a);
  //   console.log(e.target);
  if (id) {
    clearInterval(id);
    id = null;
  } else {
    id = setInterval(
      t => {
        // console.log(p);
        //   if (p.classList.contains('nohidden')) {
        p.classList.toggle('nohidden');
        console.log(`setInterval: ${t}ms`);
        //   }
      },
      500,
      500,
    );
  }
}

// ========== example with if and timeout ==========
// eslint-disable-next-line
// console.log('do1', i);

// let i;
// for (let i = 0; i < 10; i += 1) {
//   console.log('do', i);
//   setTimeout(
//     function (i) {
//       console.log('setTimeout', i);
//     },
//     2000,
//     i,
//   );
// }
// console.log('end', i);
// console.log(a); // undefined
// var a = 5;
// ========== example with if and timeout ==========
// eslint-disable-next-line
// for (var i = 0; i < 10; i += 1) {
//   setTimeout(function () {
//     console.log(i);
//   }, 10);
// }
for (var i = 0; i < 10; i += 1) {
  setTimeout(
    function (i) {
      console.log('setTimeout', i);
    },
    2000,
    i,
  );
}
// for (let i = 0; i < 10; i += 1) {
//   setTimeout(function () {
//     console.log(i);
//   }, 10);
// }
for (var i = 0; i < 10; i += 1) {
  const j = i;
  setTimeout(function () {
    console.log('lena', j);
  }, 10);
}
