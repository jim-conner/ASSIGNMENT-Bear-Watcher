import '../styles/main.scss';
// import getBearForm from './bearForm';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const getBearForm = () => {
  const domString = `<form>
  <h5 class="bear-name"></h5>
  <div class="form-group">
    <label for="formGroupExampleInput">Bear Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Add bear name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Bear Image URL</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Add a bear image">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;

  printToDom('#form', domString);
};

// const addBear = (taco) {
//   domstring = '';
//   taco.forEach((card, i) => {
//   });
// };

const init = () => {
  getBearForm();
};

init();

// export default printToDom;
