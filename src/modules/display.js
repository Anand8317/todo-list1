import tasks from "./array";
import threedotsvertical from '../Images/threedotsvertical.png';

const display = () => {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';
  tasks.forEach((element) => {
    todoList.innerHTML += `
      <div class="list-items" id=${element.index}>
        <div class="input2-container">
          <input type="checkbox" class="checkbox">
          <input type="text" class="desc-input" id=${element.index + 'i'}>
        </div>  
        <img alt="bar" src=${threedotsvertical} class="bar hover1">
      </div>
      <hr>
    `;
    const descInput = document.getElementById(element.index + 'i');
    document.getElementById(element.index + 'i').setAttribute('value', element.desc);
  });
}

export default display;