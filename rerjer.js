javascript:(function() {
  var queue = [];

  queue.push(document.body);

  while(queue.length !== 0) {
    var curr = queue.pop();
    var child = curr.firstElementChild;

    if (!child) {
      curr.textContent = curr.textContent.replace(/([aiouyAIOUY]+)|e(?!r|\w)/g, 'er');
    }

    while(child) {
      queue.push(child);
      child = child.nextElementSibling;
    }}
})();void(0);
