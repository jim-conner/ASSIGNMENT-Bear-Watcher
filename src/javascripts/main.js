import '../styles/main.scss';
import printBearForm from './bearForm';
import getBearInfo from './river';

const buttonEvents = () => {
  document.querySelector('#add').addEventListener('click', getBearInfo);
};

const init = () => {
  printBearForm();
  buttonEvents();
};

init();
