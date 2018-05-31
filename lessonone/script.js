var budgetMonth = prompt("Ваш бюджет на месяц?","budget"),
  shopName = prompt("Название вашего магазина?","name");

  mainList = {
  	budget:budgetMonth,
 	name:shopName,
 	shopGoods:['goods1', 'goods2','goods3'],
 	employers:{},
 	open: false
 }
   
  for (let i = 0; i < 3; i++) {   
    let j = mainList.shopGoods[i];
    confirm(" Какой тип товаров будем продавать? :" +  j);

}

 let dayMonth = 30,
  budgetDay = dayMonth / 30;

  alert(" Ваш бюджет на день :" + budgetDay);