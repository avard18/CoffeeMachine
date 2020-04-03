
const vendingMachine = {
    drinks: [
        {
            name: 'Coffee',
            price: 100,
            code: "A0",
            quantity: 4,
        },
        {
            name: 'Tea',
            price: 50,
            code: "A1",
            quantity: 4,

        },
        {
            name: 'Choco',
            price: 200,
            code: "A2",
            quantity: 0,

        },

    ]
};

const choice = prompt(List(vendingMachine));
const money = +prompt(' Insert money');
let selectedDrink;
for(let i=0;i<vendingMachine.drinks.length;i++) {
    if (vendingMachine.drinks[i].code === choice) {
        selectedDrink = vendingMachine.drinks[i];
        break;
    }
}
if(selectedDrink.quantity==0){
    alert("Missing "+`${selectedDrink.name}`);
}
else
alert("Your order "+`${selectedDrink.name}`+" Your exchange is  "+`${money-selectedDrink.price}`);


function List (vendingMachine){
    let str ='';
    for (let i=0; i<vendingMachine.drinks.length;i++){
        str+=vendingMachine.drinks[i].name;
        str+= ' '+ vendingMachine.drinks[i].code+' ' ;
    }
    return str;
}
let more = prompt("Press 1 to add a product");
if (more==1){
    let another ;
    let selection =prompt(List(vendingMachine));
    let amt = +prompt("Specify the quantity");
    for (let i = 0;i<vendingMachine.drinks.length;i++){
        if(vendingMachine.drinks[i].code===selection){
            another= vendingMachine.drinks[i];
        }
    }
    alert("quantity of "+`${another.name}`+ " is "+`${another.quantity+=amt}`);    
    }
    
    alert("Thank You for your purchase");