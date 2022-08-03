const cdiv = document.querySelector('.container');

  // Add 16 divs
  for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    
    cdiv.appendChild(div);
    div.setAttribute('id', 'farbe')
  }

const button = document.querySelector('.neues');
button.addEventListener ('click',function(){
  const gridsize = prompt ('Enter a number between 1 and 256');
  if (gridsize > 0 && gridsize < 257) {

    // Remove all divs
    while (cdiv.firstChild) {
      cdiv.removeChild(cdiv.firstChild);
    }
    // hier kommen die neuen divs rein und werden mit der Größe des Grids gesetzt
    


    
  }
  else {
    alert ('Please enter a number between 1 and 256');
  }


}
)
  




