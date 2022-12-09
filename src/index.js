import './style.css';
import refresh from './Images/refresh.png';
import enter from './Images/enter.png';
import newTask from './modules/newTask';
import { setLs, getLs } from './modules/localStorage';
import display from './modules/display';
import todoInput from './modules/todoInput';
import updateCheckboxStatus from './modules/updateCheckboxStatus';
import clearAllCompleted from './modules/clearAllCompleted';

const imgRefresh = document.getElementById('refresh');
imgRefresh.src = refresh;
const imgEnter = document.getElementById('enter');
imgEnter.src = enter;

getLs();
display();
todoInput();

const input = document.getElementById('input1');
const inputImg = document.getElementById('enter');

inputImg.addEventListener('click', () => {
  newTask(input.value);
  input.value = '';
  display();
  setLs();
  todoInput();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    inputImg.click();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.checkbox')) {
    const checkbox = e.target.closest('.checkbox');
    const { parentNode } = checkbox.parentNode;
    const crossInput = checkbox.nextElementSibling;

    if (checkbox.checked === true) {
      updateCheckboxStatus(true, parentNode.id);
      crossInput.style.textDecoration = 'line-through';
    }

    if (checkbox.checked === false) {
      updateCheckboxStatus(false, parentNode.id);
      crossInput.style.textDecoration = 'none';
    }
  }
});

const clearButton = document.querySelector('#footer');
clearButton.addEventListener('click', () => {
  clearAllCompleted();
  setLs();
  display();
  todoInput();
});

imgRefresh.addEventListener('click', () => {
  display();
  todoInput();
});
