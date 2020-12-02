const btn = document.getElementsByClassName('btn')[0];
const div = document.getElementById('toggle');
btn.onclick = function () {
  if (document.getElementById('title')) {
    const title = document.getElementById('title');
    const text = document.getElementById('text');
    title.remove();
    text.remove();
  } else {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.id = 'title';
    p.id = 'text';
    h1.className = 'popover';
    p.className = 'popover';
    h1.textContent = 'Popover title';
    p.textContent = 'And here is some amazing content. It is very engaging. Right?';
    div.insertAdjacentElement('afterbegin', p);
    div.insertAdjacentElement('afterbegin', h1);
    div.style.position = 'absolute';
    div.style.left = '41.5%';
    div.style.top = '19%';
  }
};
