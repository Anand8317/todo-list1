import newTask from './newTask';
import tasks from './array';
import del from './del'

describe('Test add and remove functions', () => {
  test('Adding an Item to the array', () => {
    newTask('First task');
    newTask('Second task');
    newTask('Third task');
    expect(tasks[0].desc).toBe(('First task'));
    expect(tasks[1].desc).toBe(('Second task'));
    expect(tasks.length).toEqual(3)
  });
  test('Removing an item from the array', () => {
    del(1);
    expect(tasks).toHaveLength(2);
    expect(tasks[0].desc).toBe('Second task')
  });
});