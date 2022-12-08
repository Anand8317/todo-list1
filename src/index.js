import './style.css';
import refresh from './Images/refresh.png';
import enter from './Images/enter.png';
import newTask from './modules/newTask';
import {setLs, getLs} from './modules/localStorage'
import display from './modules/display';
import todoInput from './modules/todoInput'

const imgRefresh = document.getElementById('refresh');
imgRefresh.src = refresh;
const imgEnter = document.getElementById('enter');
imgEnter.src = enter;

getLs();
display();
todoInput();

const input = document.getElementById('input1');
const input_img = document.getElementById('enter');

input_img.addEventListener("click", () => {
  newTask(input.value);
  input.value = "";
  display();
  setLs();
  todoInput();
  
})

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    input_img.click();
  }
})










