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
