import tasks from './array';

const newTask = (task) => {
  tasks.push({ desc: task, completed: false, index: tasks.length + 1 });
};

export default newTask;