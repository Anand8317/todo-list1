import './style.css';
import refresh from './Images/refresh.png';
import enter from './Images/enter.png';
import bar from './Images/bar.png';

const tasks = [{ desc: 'Buy fruits', completed: false, index: 0 }, { desc: 'Reply the pending emails', completed: false, index: 1 }, { desc: 'Do household work', completed: false, index: 2 }];

const todoList = document.querySelector('.todo-list');

tasks.forEach((element) => {
  todoList.innerHTML += `
    <div class="list-items" id=${element.index}>
      <div>
        <input type="checkbox" class="checkbox">
        ${element.desc}
      </div>  
      <img alt="bar" src=${bar} class="bar">
    </div>
    <hr>
  `;
});

const imgRefresh = document.getElementById('refresh');
imgRefresh.src = refresh;
const imgEnter = document.getElementById('enter');
imgEnter.src = enter;
