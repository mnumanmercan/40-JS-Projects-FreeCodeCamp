let number = document.querySelector("#counter-num");
const decrease = document.querySelector("#decrease-btn");
const reset = document.querySelector("#reset-btn");
const increase = document.querySelector("#increase-btn");

decrease.addEventListener("click", decrease_event);
increase.addEventListener("click", increase_event);
reset.addEventListener("click", reset_event);

console.log(typeof parseInt(number.textContent));
function decrease_event() {
  let dec_num = parseInt(number.textContent);
  if (dec_num >= 1) {
    dec_num--;
    number.innerText = dec_num;
  }
  log();
}
function increase_event() {
  let inc_num = parseInt(number.textContent);
  inc_num++;
  number.innerText = inc_num;
  log();
}
function reset_event() {
  number.innerText = 0;
  log();
}

function log(){
    console.log(number.textContent)
}