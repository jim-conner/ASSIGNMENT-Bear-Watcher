import printToDom from './printToDom';

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

export default printBearForm;
