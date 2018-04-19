const btn = document.getElementsByTagName('span');
const btnAdd = document.getElementsByClassName('add');
const close = document.getElementsByClassName('close ');
const msg = document.getElementById('count');
const cpt = document.getElementById('cpteur')

console.log(btnAdd);

for(var i=0; i<btn.length; i++) {
  btn[i].addEventListener("click",
  function(){
    this.parentNode.remove();
    compteur();
  });
};
/*
const count = document.createElement('p');
msg.appendChild(count).classList.add('todo-2');
const newText = document.createTextNode(btn.length);
count.appendChild(newText);
*/
function compteur() {
  cpt.textContent = btn.length.toString();
}

btnAdd[0].addEventListener("click",
  function(e){
    e.preventDefault();
    let pop = document.getElementById('popup');
    pop.classList.remove('hide')
    pop.classList.add('show')
  }
);

close[0].addEventListener("click",
  function(e) {
    alert();
  }
);
