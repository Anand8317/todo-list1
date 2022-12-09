import tasks from './array';
import { setLs } from './localStorage';

const updateCheckboxStatus = (status, index) => {
  if (status === true) {
    tasks[index - 1].completed = true;
  } else if (status === false) {
    tasks[index - 1].completed = false;
  }
  setLs();
};

export default updateCheckboxStatus;