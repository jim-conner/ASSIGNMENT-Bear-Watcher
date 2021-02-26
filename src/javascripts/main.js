import '../styles/main.scss';
import printBearForm from './bearForm';
import { getBearInfo, removeBear } from './river';

const buttonEvents = () => {
  document.querySelector('#add').addEventListener('click', getBearInfo);
  document.querySelector('#cardHolder').addEventListener('click', removeBear);
};

const init = () => {
  printBearForm();
  buttonEvents();
};

init();
