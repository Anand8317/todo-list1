import tasks from './array';
import threedotsvertical from '../Images/threedotsvertical.png';

const display = () => {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';
  tasks.forEach((element) => {
    todoList.innerHTML += `
      <div class="list-items" id=${element.index}>
        <div class="input2-container">
          <input type="checkbox" class="checkbox">
          <input type="text" class="desc-input" id=${`${element.index}i`}>
        </div>  
        <img alt="bar" src=${threedotsvertical} class="bar hover1">
      </div>
      <hr>
    `;
    document.getElementById(`${element.index}i`).setAttribute('value', element.desc);
  });

  let checkbox = document.getElementsByClassName('checkbox');
  checkbox = [...checkbox];
  checkbox.forEach((element) => {
    const { parentNode } = element.parentNode;
    if (tasks[parentNode.id - 1].completed === true) {
      element.checked = true;
      const crossInput = element.nextElementSibling;
      crossInput.style.textDecoration = 'line-through';
    }
  });
};

export default display;