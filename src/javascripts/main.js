import '../styles/main.scss';
// import getBearForm from './bearForm';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bears = [];

const printBearForm = () => {
  const domString = `<form>
  <h5 class="bear-name"></h5>
  <div class="form-group">
    <label for="formGroupExampleInput">Bear Name</label>
    <input type="text" class="form-control" id="name" placeholder="Add bear name">
  </div>
  <div class="form-group">
    <label for="imageUrl">Bear Image</label>
    <input type="url" class="form-control" id="image" placeholder="Add a bear image URL">
  </div>
  <button type="submit" id="add" class="btn btn-primary">Add Bear</button>
  </form>`;

  printToDom('#bearForm', domString);
};

const addBear = (taco) => {
  let domString = '';
  taco.forEach((card, i) => {
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <img class="card-img-top" src="${card.image}" alt="Bear Image" width="100" height="150">
                      <h5 class="card-title">${card.name}</h5>
                      <button type="button" id="delete" class="btn btn-primary" id="${i}">Remove Bear</button>
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

const buttonEvents = () => {
  document.querySelector('#add').addEventListener('click', getBearInfo);
};

const init = () => {
  printBearForm();
  buttonEvents();
};

init();
