/* @jest-environment jsdom */

import edit from './edittask';
import newTask from './newTask';
import tasks from './array';
import updateCheckboxStatus from './updateCheckboxStatus';
import clearAllCompleted from './clearAllCompleted';

describe('Testing edit task, status update and clear all button', () => {
  test('Testing the edit task function', () => {
    // Arrange
    const desc = 'Hello';
    const newDesc = 'Hello World';
    const index = 1;

    // Act
    newTask(desc);
    edit(newDesc, index);

    // Assert
    expect(tasks[index - 1].desc).toEqual(newDesc);
  });

  test('Testing the function for updating item status', () => {
    // Arrange
    const index = 1;
    document.body.innerHTML += `
      <div class="list-items">
        <div class="input2-container">
          <input type="checkbox" class="checkbox" checkbox>
          <input type="text" class="desc-input" value="Hello World"}>
        </div>
        <img alt="bar" class="bar hover1">
      </div>
      <hr>
    `;
    const checkbox = document.querySelector('.checkbox');
    const result = checkbox.Checked;

    // Act
    newTask('Hello World');
    updateCheckboxStatus(result, index);

    // Assert
    expect(tasks[index - 1].status).toBe(result);
  });

  test('Test clear all completed function', () => {
    // Arrange
    document.body.innerHTML = `
      <div class="sub-container">
        <h3>Today's To Do</h3>
        <img alt="refresh" id="refresh" class="img2 hover1">
      </div>
      <hr>
      <div class="sub-container">
        <input placeholder="Add to your list..." id="input1">
        <img alt="enter" id="enter" class="img2 hover1">
      </div>
      <hr>
      <div class="sub-container" id="todo-container">
        <ul class="todo-list">
          <div class="list-items" id=1>
            <div class="input2-container">
              <input type="checkbox" class="checkbox" checked>
              <input type="text" class="desc-input" id=1}>
            </div>
            <img alt="bar" class="bar hover1">
          </div>
          <div class="list-items" id=2>
            <div class="input2-container">
              <input type="checkbox" class="checkbox" Checked>
              <input type="text" class="desc-input">
            </div>
            <img alt="bar" class="bar hover1">
          </div>
          <div class="list-items" id=3>
            <div class="input2-container">
              <input type="checkbox" class="checkbox" Checkbox>
              <input type="text" class="desc-input" id=1}>
            </div>
            <img alt="bar" class="bar hover1">
          </div>
      <hr>
        </ul>
      </div>
      <div class="sub-container23" id="footer">
        <p>Clear all completed</p>
      </div>
      <hr>
      </section>
    `;
    const checkboxes = document.querySelectorAll('.checkbox');
    const checkboxes1 = [...checkboxes];

    // Act
    tasks.length = 0;
    newTask('First Task');
    newTask('Second Task');
    updateCheckboxStatus(checkboxes1[0].checked, 1);
    updateCheckboxStatus(checkboxes1[1].checked, 2);
    clearAllCompleted();

    // Assert
    expect(tasks.length).toEqual(0);
  });
});
