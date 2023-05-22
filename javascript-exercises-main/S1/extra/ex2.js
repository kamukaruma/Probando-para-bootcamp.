const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},
{name: "Salmon", isVegan: false},
 {name: "Tofu", isVegan: true},
 {name: "Burger", isVegan: false},
 {name: "Rice", isVegan: true},
 {name: "Pasta", isVegan: true}];
 
for (const iterator of foodSchedule) {
   const vegan = foodSchedule[iterator];
   if (iterator.isVegan == false) {
       iterator.name = fruits.shift()
      
    }
}
console.log(foodSchedule);
 

