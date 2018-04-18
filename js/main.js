const btn = document.getElementsByTagName('span');

for(var i=0; i<btn.length; i++) {
  btn[i].addEventListener("click", function(){
    this.parentNode.remove().fadeOut();
  });
}
