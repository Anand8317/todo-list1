/* @jest-environment jsdom */

import edit from './edittask';
import newTask from './newTask';
import tasks from './array';
import updateCheckboxStatus from './updateCheckboxStatus';

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
});
