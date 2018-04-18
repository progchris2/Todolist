const btn = document.getElementsByTagName('span');
const btnAdd = document.getElementsByClassName('add');
console.log(btnAdd)

for(var i=0; i<btn.length; i++) {
  btn[i].addEventListener("click",
  function(){
    this.parentNode.remove().fadeOut();
  });
};

btnAdd[0].addEventListener("click",
  function(e){
    e.preventDefault();
    let pop = document.getElementById('popup');
    pop.classList.remove('hide')
    pop.classList.add('show')
  }
);
