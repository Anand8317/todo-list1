import tasks from "./array";

export const setLs = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const getLs = () => {
  if (localStorage.getItem("tasks") !== null) {
    let tasks_temp = localStorage.getItem("tasks");
    tasks_temp = JSON.parse(tasks_temp);
    tasks.length = 0;
    tasks_temp.forEach(element => {
      tasks.push(element);
    });
  }
  
}
