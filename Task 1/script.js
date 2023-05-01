/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input').value;
    const outputdiv = document.getElementById('output');
    const p = document.querySelectorAll('p');

    if (p) {
      p.forEach((item) => {
        item.remove();
      });
    }

    const svarai = Math.round(input * 2.2046);
    const gramai = Math.round(input / 0.001);
    const unijos = Math.round(input * 35.274);

    const svaraiP = document.createElement('p');
    const gramaiP = document.createElement('p');
    const unijosP = document.createElement('p');
    svaraiP.classList = 'answer';
    gramaiP.classList = 'answer';
    unijosP.classList = 'answer';

    svaraiP.textContent = `${svarai} lb`;
    gramaiP.textContent = `${gramai} g`;
    unijosP.textContent = `${unijos} oz`;
    outputdiv.append(svaraiP, gramaiP, unijosP);
  });
}
