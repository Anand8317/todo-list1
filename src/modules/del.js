import tasks from './array';

const del = (ind) => {
  tasks.splice(ind - 1, 1);
  for (let i = ind - 1; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
};

export default del;