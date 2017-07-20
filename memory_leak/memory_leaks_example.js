var memory = [];
var detachedNodes = [];

function addMemory() {

  memory.push(new Array(1000000).join('abc'));

  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement('div'));
  }
}

document.getElementById('add').addEventListener('click', addMemory);


function create() {
  var ul = document.createElement('ul');

  for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
  }

  detachedNodes.push(ul);
}

document.getElementById('create').addEventListener('click', create);
