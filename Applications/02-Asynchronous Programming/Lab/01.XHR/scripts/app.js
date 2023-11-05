function loadRepos() {

   const url = 'https://api.github.com/users/testnakov/repos';

   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', addTextFromRequest);

   function addTextFromRequest() {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
         const result = document.getElementById('res');
         result.textContent = httpRequest.responseText;
      }
   }

   httpRequest.open('GET', url);
   httpRequest.send();
}