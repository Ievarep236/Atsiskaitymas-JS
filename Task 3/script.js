/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const createCards = (data) => {
  const outputDiv = document.getElementById('output');
  const pMessage = document.getElementById('message');
  pMessage.remove();

  data.forEach((item) => {
    const cardContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const avatarImg = document.createElement('img');
    const loginP = document.createElement('p');

    loginP.classList = 'avatarText';
    imageContainer.classList = 'imgcontainer';
    cardContainer.classList = 'cardContainer';

    loginP.textContent = item.login;
    avatarImg.src = item.avatar_url;
    avatarImg.alt = 'avatar';

    imageContainer.append(avatarImg);
    cardContainer.append(imageContainer, loginP);
    outputDiv.append(cardContainer);
  });
};

const getData = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    console.log(data);
    createCards(data);
  } catch (err) {
    console.log(err);
  }
};

const button = document.getElementById('btn');
if (button) {
  button.addEventListener('click', (e) => {
    getData();
  });
}
