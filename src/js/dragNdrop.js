let dragItem = null;

export default function dragNdrop() {
  const listItems = document.querySelectorAll('.list__item');
  const lists = document.querySelectorAll('.list');

  function dragstart(item) {
    dragItem = item;
    setTimeout(() => {
      dragItem.style.display = 'none';
    }, 0);
  }

  function dragend(item) {
    setTimeout(() => {
      item.style.display = 'block';
      dragItem = null;
    }, 0);
  }

  function drop() {
    this.style.backgroundColor = 'rgba(0,0,0,0)';
    this.append(dragItem);
  }

  for (let i = 0; i < listItems.length; i += 1) {
    const item = listItems[i];

    item.addEventListener('dragstart', dragstart(item));

    item.addEventListener('dragend', dragend(item));

    item.addEventListener('dblclick', () => {
      item.remove();
    });

    for (let j = 0; j < lists.length; j += 1) {
      const list = lists[j];

      list.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      list.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0,0,0,.3)';
      });

      list.addEventListener('dragleave', function () {
        this.style.backgroundColor = 'rgba(0,0,0,0)';
      });

      list.addEventListener('drop', drop);
    }
  }
}
