function create(words) {
   
   const content = document.querySelector('#content');

   for (const word of words) {
      let newDiv = document.createElement('div');
      let newPar = document.createElement('p');
      newPar.textContent = word;
      newPar.style.display = 'none';

      newDiv.addEventListener('click', displayPar);
      newDiv.appendChild(newPar);
      content.appendChild(newDiv);
   }

   function displayPar(event) {
      const parToDisplay = event.target.firstChild;
      parToDisplay.style.display = 'block';
   }
}