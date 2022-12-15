import newTask from './newTask';
import tasks from './array';
import del from './del';

describe('Test add and remove functions', () => {
  test('Adding an Item to the array', () => {
    // Arrange
    const newTask1 = 'First task';
    const newTask2 = 'Second task';
    const newTask3 = 'Third task';
    const expectedLength = 3;

    // Act
    newTask(newTask1);
    newTask(newTask2);
    newTask(newTask3);

    // Assert
    expect(tasks[0].desc).toBe(newTask1);
    expect(tasks[1].desc).toBe(newTask2);
    expect(tasks.length).toEqual(expectedLength);
  });

  test('Removing an item from the array', () => {
    // Arrange
    const newTask2 = 'Second task';
    const expectedLength = 2;

    // Act
    del(1);

    // Assert
    expect(tasks).toHaveLength(expectedLength);
    expect(tasks[0].desc).toBe(newTask2);
  });

  test('Removing an item from the empty array', () => {
    // Arrange
    const expectedLength = 0;

    // Act
    tasks.length = 0;
    del(1);

    // Assert
    expect(tasks).toHaveLength(expectedLength);
  });
});