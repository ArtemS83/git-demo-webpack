// const prom = new Promise((resorve, reject) => {
//   setTimeout(() => {
//     resorve('Success');
//   }, 2000);
// });
// console.log(prom);
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /*
//      * Если какое-то условие выполняется, то есть все хорошо,
//      * вызываем resolve и получает данные. Условие зависит от задачи.
//      */
//     // resolve('Data passed into resolve function :)');

//     // Если что-то не так, вызваем reject и передаем ошибку
//     reject('Error passed into reject function :(');
//   }, 2000);
// });

// // Выполнится мгновенно
// console.log('BEFORE promise.then');

// const onResolve = data => {
//   console.log('INSIDE promise.then - onResolve');
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = error => {
//   console.log('INSIDE promise.then - onReject');
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject,
// );
// promise.finally(() => console.log('promise.finally'));
// // Выполнится мгновенно
// console.log('AFTER promise.then');
// prom.finally(() => console.log('prom.finally'));
////
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //   resolve(5);
    reject('error');
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    // console.log(error); //55
  });
const makePromise = (text, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        //   resolve(text),
        reject(text),
      delay,
    );
  });
};

const promiseA = makePromise('promiseA', 1000);
const promiseB = makePromise('promiseB', 3000);

/*
 * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
 * Первый выполнится через секунду и просто будет готов
 */
Promise.all([promiseA, promiseB]).then(result => console.log(result)); //["promiseA", "promiseB"]
// .catch(err => console.log(err)); //"promiseA"

/////
const pr = new Promise((resorve, project) => {
  const ok = Math.random() > 0.4;

  setTimeout(() => {
    if (ok) {
      resorve('Resorve OK');
    }

    project('Project error');
  }, 1000);
});
console.log(pr);
pr.then(
  ok => console.log(ok),
  err => console.log(err),
);
pr.then(a => console.log(a))
  .catch(e => console.log(e))
  .finally(() => console.log('finnaly dgf'));
