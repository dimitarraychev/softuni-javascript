function skiTrip (input) {
   let days = Number(input[0]);
   let room = input[1];
   let rate = input[2];

   let nights = days - 1;
   let totalPrice = 0;

   switch (room) {
      case "room for one person":
         totalPrice = nights * 18;
         break;
      case "apartment":
         totalPrice = nights * 25;
         if (days < 10) {
            totalPrice *= 0.7;
         } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.65;
         } else {
            totalPrice *= 0.5;
         }
         break;
      case "president apartment":
         totalPrice = nights * 35;
         if (days < 10) {
            totalPrice *= 0.9;
         } else if (days >= 10 && days <= 15) {
            totalPrice *= 0.85;
         } else {
            totalPrice *= 0.8;
         }
         break;
        
   }
   
   if (rate === "positive") {
      totalPrice *= 1.25;
   } else {
      totalPrice *= 0.9;
   }
   console.log(totalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);