function toggle(el) {
  var d = el.parentElement.querySelector('.details');
  var a = el.querySelector('.arrow');
  var open = d.classList.toggle('open');
  a.textContent = open ? '▾' : '▸';
}
