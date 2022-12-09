import tasks from './array';

const updateCheckboxStatus = (status, index) => {
  if (status === true) {
    tasks[index - 1].completed = true;
  } else if (status === false) {
    tasks[index - 1].completed = false;
  }
};

export default updateCheckboxStatus;