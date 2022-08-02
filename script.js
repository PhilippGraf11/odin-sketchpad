const cdiv = document.querySelector('.container');

  // Add 16 divs
  for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    
    cdiv.appendChild(div);
    div.setAttribute('id', 'farbe')
  }
  // when the button is clicked, the grid size is changed
  const button = document.querySelector('.neues');
  button.addEventListener('click', function() {
    const cdiv = document.querySelector('.container');
    cdiv.innerHTML = '';
    const input = prompt('Enter a number between 1 and 256');
    for (let i = 1; i < input; i++) {
      const div = document.createElement('div');
      cdiv.appendChild(div);
      div.setAttribute('id', 'farbe')
    }
   
    }
  
    );




