const btn = document.getElementsByTagName('span');
const msg = document.getElementById('count');
const cpt = document.getElementById('cpteur');
const pop = document.getElementById('popup');

cpt.innerHTML = btn.length.toString();
for(var i=0; i<btn.length; i++) {
  btn[i].addEventListener("click",
  function(){
    this.parentNode.remove();
    cpt.innerHTML = btn.length.toString();
  });
};
/*
const count = document.createElement('p');
msg.appendChild(count).classList.add('todo-2');
const newText = document.createTextNode(btn.length);
count.appendChild(newText);
*/

document.getElementsByClassName('add')[0].addEventListener("click",
  function(e){
    e.preventDefault();
    pop.classList.remove('hide')
    pop.classList.add('show')
  }
);

// function pop up view
document.getElementsByClassName('add')[0].addEventListener("click",
  function(e){
    e.preventDefault();
    this.parentNode.classList.remove('hide');
    pop.classList.remove('hide');
    pop.classList.add('show');
  }
);

// function pop up close
document.getElementById('close').addEventListener("click",
  function(e) {
    e.preventDefault();
    pop.classList.remove('show');
    pop.classList.add('hide');

    document.getElementById('theme').value = '';
    document.getElementById('img').value = '';
    document.getElementById('texte').value = '';
  }
);

//add datas
document.getElementById('btn-add').addEventListener("click",
  function(e) {
    e.preventDefault();
    let theme = document.getElementById('theme').value;
    let image = document.getElementById('img').value;
    let texte = document.getElementById('texte').value;

    createElementDom(image, theme, texte);
    cpt.innerHTML = btn.length.toString();

    pop.classList.remove('show');
    pop.classList.add('hide');
  }
);

function createElementDom(el, elt, elmt) {
  //create parent div
  let div = document.createElement('div');
  document.getElementById('section').appendChild(div).classList.add('block-list');


  //create first child div: img
  let img = document.createElement('img');
  div.appendChild(img).classList.add('avatar');
  img.src = document.createTextNode(el);

  //create second child div: span
  let divChild = document.createElement('div');
  div.appendChild(divChild).classList.add('list');

  let h2 = document.createElement('h2');
  divChild.appendChild(h2);
  h2.appendChild(document.createTextNode(elt));

  let p = document.createElement('p');
  divChild.appendChild(p);
  p.appendChild(document.createTextNode(elmt));

  let span = document.createElement('span');
  div.appendChild(span);
  span.addEventListener('click',
    function() {
      cpt.innerHTML = (btn.length - 1).toString();
      this.parentNode.remove();
    }
  );

  //create trash: i
  let elementI = document.createElement('i')
  span.appendChild(elementI);
  elementI.className = "fas fa-trash elem";


  document.getElementById('theme').value = '';
  document.getElementById('img').value = '';
  document.getElementById('texte').value = '';
}
