import tasks from './array';

const clearAllCompleted = () => {
  const newTasks = tasks.filter(((task) => !task.completed));
  for (let i = 0; i < newTasks.length; i += 1) {
    newTasks[i].index = i + 1;
  }
  tasks.length = 0;
  newTasks.forEach((newTask) => tasks.push(newTask));
};

export default clearAllCompleted;