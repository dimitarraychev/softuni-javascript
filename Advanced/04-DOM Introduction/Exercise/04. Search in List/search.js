function search() {

   const towns = document.querySelectorAll('#towns li');
   const input = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let matches = 0;

   for (const town of towns) {
      if (town.textContent.includes(input)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
         matches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = 'none';
      }
   }

   result.textContent = `${matches} matches found`;
}