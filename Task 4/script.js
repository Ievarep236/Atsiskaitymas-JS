/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const createCards = (data) => {
  const outputDiv = document.getElementById('output');

  data.forEach((item) => {
    const brandContainer = document.createElement('div');
    const brand = document.createElement('h2');
    const list = document.createElement('ul');
    brandContainer.classList = 'brandContainer';
    brand.classList = 'brand';
    list.classList = 'list';

    brand.textContent = item.brand;
    item.models.forEach((modelItem) => {
      const listitem = document.createElement('li');
      listitem.classList = 'listitem';
      listitem.textContent = modelItem;
      list.append(listitem);
    });
    brandContainer.append(brand, list);
    outputDiv.append(brandContainer);
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

getData();
