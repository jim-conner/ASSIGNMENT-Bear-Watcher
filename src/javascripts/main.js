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
    <label for="formGroupExampleInput2">Bear Image URL</label>
    <input type="text" class="form-control" id="imageUrl" placeholder="Add a bear image">
  </div>
  <button type="submit" id="submit" class="btn btn-primary">Submit</button>
  </form>`;

  printToDom('#bear-form', domString);
};

const addBear = (taco) {
  domstring = '';
  taco.forEach((card, i) => {
    `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="('${card.imageUrl}')" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">Some quick example text to build on the card title & content.</p>
          <button type="button" id="addBear" class="btn btn-primary" id="${i}">Add Bear</button>
        </div>
    </div>`
  });
};

const getBearInfo = (e) => {
  e.preventDefault();
  
  const name = document.querySelector("#name").value;
  const image = document.querySelector("#imageUrl").value;

  const obj = {
    name,
    imageUrl,
  };

  bears.push(obj);

  addBear(bears);

  document.querySelector("#form").reset();
}; 

buttonEvents = () => {
  document.querySelector("#submit").addEventListener("click", printBearForm);
};

const init = () => {
  printBearForm();
  addBear();
  getBearInfo();

};

init();
