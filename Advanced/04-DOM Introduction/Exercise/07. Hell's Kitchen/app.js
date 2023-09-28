function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputArea = document.querySelector('#inputs textarea');
   const bestRestArea = document.querySelector('#bestRestaurant p');
   const bestWorkersArea = document.querySelector('#workers p');

   function onClick() {

      let result = {};
      const restArr = JSON.parse(inputArea.value);

      for (const restaurant of restArr) {
         let [name, workers] = restaurant.split(' - ');
         let workersArr = workers.split(', ');

         if (!result.hasOwnProperty(name)) {
            result[name] = {
               name,
               workers: workersArr,
               bestSalary: 0,
               averageSalary: 0
            };
         } else {
            result[name].workers = result[name].workers.concat(workersArr);
         }

         result[name].bestSalary = bestSalary(result[name].workers);
         result[name].averageSalary = averageSalary(result[name].workers)

         printOutput(result);
      }

      function printOutput(result) {
         let bestRestaurant;
         let averageSalary = 0;
         let workersToPrint = '';

         for (const element in result) {
            if (result[element].averageSalary > averageSalary) {
               averageSalary = result[element].averageSalary;
               bestRestaurant = result[element];
            }
         }

         let sortedWorkers = bestRestaurant.workers.sort((a, b) => Number(b.split(' ')[1]) - Number(a.split(' ')[1]));
         sortedWorkers.forEach(a => {
            let worker = a.split(' ');
            workersToPrint += `Name: ${worker[0]} With Salary: ${worker[1]} `
         });

         bestRestArea.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${sortedWorkers[0].split(' ')[1]}.00`;
         bestWorkersArea.textContent = workersToPrint;
      }

      function bestSalary(workers) {
         let bestSalary = 0;
         workers.forEach(element => {
            let [name, salary] = element.split(' ')
            if (Number(salary) > bestSalary) {
               bestSalary = Number(salary);
            }
         });
         return bestSalary;
      }

      function averageSalary(workers) {
         let avgSalary = 0;
         workers.forEach(element => {
            let [name, salary] = element.split(' ')
            avgSalary += Number(salary)
         });
         return avgSalary /= workers.length;
      }
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]