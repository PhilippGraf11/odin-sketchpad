const cdiv = document.querySelector(".container");
for (let i = 0; i < 255; i++) {
  const div = document.createElement("div");
  cdiv.appendChild(div);
  div.setAttribute("class", "farbe");
}
const button = document.querySelector(".neues");
button.addEventListener("click", function () {
  const gridsize = prompt("Enter a number between 1 and 255");
  if (gridsize != null) {
    cdiv.innerHTML = ""; // empty the grid
    //use square root to calculate width
   
    
      // get user input and add divs
      let size= (600 / Math.round(Math.sqrt(gridsize)));
      for (let i = 0; i < gridsize; i++) {
        const div = document.createElement("div");
        cdiv.appendChild(div);
        div.setAttribute("style", "width:"+ size +"px;height:"+ size +"px");
        div.setAttribute("class", "farbe")
      }
    
  }
});

  




