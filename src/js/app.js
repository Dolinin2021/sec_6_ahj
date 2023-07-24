import dragNdrop from "./dragNdrop.js";
import addTask from "./addTask.js";
import changeTitle from "./changeTitle.js";
import addBoard from "./addBoard.js";

const button = document.querySelector('.button');
const addBtns = document.querySelectorAll('.add__btn');

addBtns.forEach((button) => {
    button.addEventListener('click',(e) => {
        addTask(e.target);     
    });
});

button.addEventListener('click', addBoard);

changeTitle();

dragNdrop();
