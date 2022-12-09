import tasks from './array';

const clearAllCompleted = () => {
  const new_tasks = tasks.filter((task => !task.completed));
  for (let i=0; i<new_tasks.length; i+=1) {
    new_tasks[i].index = i+1;
  }
  tasks.length = 0;
  new_tasks.forEach(new_task => tasks.push(new_task));
};

export default clearAllCompleted;