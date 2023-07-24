import dragNdrop from './dragNdrop';
import addTask from './addTask';
import changeTitle from './changeTitle';
import addBoard from './addBoard';

const button = document.querySelector('.button');
const addBtns = document.querySelectorAll('.add__btn');

addBtns.forEach((elem) => {
  elem.addEventListener('click', (e) => addTask(e.target));
});

button.addEventListener('click', addBoard);

changeTitle();

dragNdrop();
