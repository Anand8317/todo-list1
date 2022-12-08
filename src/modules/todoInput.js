import trash from '../Images/trash.png';
import threedotsvertical from '../Images/threedotsvertical.png';
import del from './del';
import edit from './edittask';
import { setLs } from './localStorage';
import display from './display';

const todoInput = () => {
  let inputs = document.getElementsByClassName('desc-input');
  inputs = [...inputs];
  inputs.forEach((input) => {
    input.addEventListener('focusin', () => {
      const par = input.parentNode.parentNode;
      par.style.backgroundColor = '#feffca';
      input.style.backgroundColor = '#feffca';
      const img = input.parentNode.nextElementSibling;
      img.src = trash;

      img.addEventListener('click', () => {
        del(par.id);
        setLs();
        display();
        todoInput();
      });
    });

    input.addEventListener('focusout', () => {
      const par = input.parentNode.parentNode;
      edit(input.value, par.id);
      setLs();
      // input.value = input.value;
      par.style.backgroundColor = 'white';
      input.style.backgroundColor = 'white';
      const img = input.parentNode.nextElementSibling;
      img.src = threedotsvertical;
    });

    input.addEventListener('keypress', (event) => {
      const par = input.parentNode.parentNode;

      if (event.key === 'Enter') {
        event.preventDefault();
        edit(input.value, par.id);
        setLs();
        // input.value = input.value;
        par.style.backgroundColor = 'white';
        input.style.backgroundColor = 'white';
        const img = input.parentNode.nextElementSibling;
        img.src = threedotsvertical;
      }
    });
  });
};

export default todoInput;