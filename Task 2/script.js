/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.getElementById('btn__element');
let numberofclicks = 0;
if (button) {
  button.addEventListener('click', (e) => {
    numberofclicks += 1;
    const number = document.getElementById('btn__state');
    number.textContent = numberofclicks;
  });
}
