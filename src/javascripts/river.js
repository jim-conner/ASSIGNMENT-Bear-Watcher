import printToDom from './printToDom';

const bears = [];

const addBear = (taco) => {
  let domString = '';
  taco.forEach((card, i) => {
    domString += `
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <img class="card-img-top" src="${card.image}" alt="Bear Image" width="100" height="150">
                  <h5 class="card-title">${card.name}</h5>
                  <button type="button" id="delete" class="btn btn-primary" id="${i}">Remove Bear</button>
                </div>
                </div>
            </div>`;
  });
  printToDom('#cardHolder', domString);
};

const getBearInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const image = document.querySelector('#image').value;

  const obj = {
    name,
    image,
  };

  bears.push(obj);

  addBear(bears);

  document.querySelector('form').reset();
};

export default getBearInfo;
