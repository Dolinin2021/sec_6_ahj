import dragNdrop from './dragNdrop';

export default function addTask(elem) {
  const parent = elem.closest('.boards__item');
  const list = parent.querySelector('.list');
  const addBtn = parent.querySelector('.add__item-btn');
  const cancelBtn = parent.querySelector('.cancel__item-btn');
  const textarea = parent.querySelector('.textarea');
  const form = parent.querySelector('.form');
  const btn = parent.querySelector('.add__btn');

  let value;

  function clear() {
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'flex';
  }

  btn.addEventListener('click', () => {
    form.style.display = 'block';
    btn.style.display = 'none';
    addBtn.style.display = 'none';

    textarea.addEventListener('input', (e) => {
      value = e.target.value;
      if (value) {
        addBtn.style.display = 'block';
      } else {
        addBtn.style.display = 'none';
      }
    });
  });

  cancelBtn.addEventListener('click', () => {
    clear();
  });

  addBtn.addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.classList.add('list__item');
    newItem.draggable = true;
    newItem.textContent = value;
    list.append(newItem);

    form.style.display = 'none';
    btn.style.display = 'flex';
    clear();

    dragNdrop();
  });
}
