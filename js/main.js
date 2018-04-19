const btn = document.getElementsByTagName('span');
const btnAdd = document.getElementsByClassName('add');
const close = document.getElementsByClassName('close ');
console.log(close);

for(var i=0; i<btn.length; i++) {
  btn[i].addEventListener("click",
  function(){
    this.parentNode.remove();
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

close[0].addEventListener("click",
  function(e) {
    alert();
  }
);
