function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchField = document.getElementById('searchField');
   const rows = document.querySelectorAll('tbody tr');

   function onClick() {

      const searchText = searchField.value;

      for (const row of rows) {
         let rowData = row.querySelectorAll('td');

         for (const data of rowData) {
            if (data.textContent.includes(searchText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }
   }
}