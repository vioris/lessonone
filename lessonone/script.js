var budgetMonth = prompt("Ваш бюджет на месяц?","budget"),
  shopName = prompt("Название вашего магазина?","name");

  mainList = {
  	budget:budgetMonth,
 	name:shopName,
 	shopGoods:[],
 	employers:{},
 	open: false
 }
   
 for (let i = 0; i < 3; i++) { 
  let a = prompt(" Какой тип товаров будем продавать? "); 
     mainList.shopGoods[i] = a;
     if((typeof(a)) === 'string' && (typeof(a)) === null && a != '' a.length <50 ){
     	mainList.shopGood[i] = a;
     }
    

}

 let dayMonth = 30,
  budgetDay = dayMonth / 30;

  alert(" Ваш бюджет на день :" + budgetDay);
