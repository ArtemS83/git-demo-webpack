const dt = new Date(-5000000);
console.log(dt);
console.log(dt.getDate());
dt.setDate(-55555);
console.log(dt);
setInterval(() => {
  //   console.log(new Date());
}, 1000);

let interwalId = null;
const timer = {
  start() {
    const startTime = Date.now();
    interwalId = setInterval(() => {
      const currentTime = Date.now();

      //   console.log('startTime', startTime);

      //   console.log('currentTime', currentTime);
      const deltaTime = currentTime - startTime;
      getTimeComponents(deltaTime);
      //   console.log('deltaTime', deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(interwalId);
    interwalId = null;
  },
};

timer.start();
setTimeout(() => {
  timer.stop();
  console.log('stop 5s');
}, 5000);
/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Возвращает обьект со свойствами hours, mins, secs
 * - Адская копипаста со стека 💩
 */
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  console.log(`${hours}:${mins}:${secs}`); // timer on console log
  //   return { hours, mins, secs };
}

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
  return String(value).padStart(2, '0');
}
