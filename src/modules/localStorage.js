import tasks from './array';

export const setLs = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getLs = () => {
  if (localStorage.getItem('tasks') !== null) {
    let tasksTemp = localStorage.getItem('tasks');
    tasksTemp = JSON.parse(tasksTemp);
    tasks.length = 0;
    tasksTemp.forEach((element) => {
      tasks.push(element);
    });
  }
};
