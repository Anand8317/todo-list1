import newTask from './newTask';
import tasks from './array';
import del from './del'

describe('Test add and remove functions', () => {
  test('Adding an Item to the array', () => {
    // Arrange
    const item = 'Dry the Clothes';
    const obj = {
      desc: 'Dry the Clothes',
      completed: false,
      index: 1,
    };

    // Act
    newTask(item);

    // Assert
    expect(tasks).toEqual([obj]);
  });
  test('Removing an item from the array', () => {
    del(1);
    expect(tasks).toHaveLength(0);
  });
});