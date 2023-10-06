function solve() {

   const addButtons = document.querySelectorAll('.add-product');
   const textArea = document.querySelector('textarea');
   const checkoutButton = document.querySelector('button.checkout');
   checkoutButton.addEventListener('click', checkout);

   for (const btn of addButtons) {
      btn.addEventListener('click', addToCart);
   }

   let cartArr = [];
   let totalPrice = 0;

   function addToCart(event) {

      const productInfo = event.target.parentNode.parentNode;
      const name = productInfo.querySelector('div.product-details div.product-title').textContent;
      const price = productInfo.querySelector('div.product-line-price').textContent;

      if (!cartArr.includes(name)) cartArr.push(name);
      totalPrice += Number(price);
      textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
   }

   function checkout(event) {

      for (const btn of addButtons) {
         btn.disabled = true;
      }
      checkoutButton.disabled = true;

      textArea.textContent += `You bought ${cartArr.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
}