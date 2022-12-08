import tasks from './array';

const edit = (newDesc, ind) => {
  tasks[ind - 1].desc = newDesc;
};

export default edit;