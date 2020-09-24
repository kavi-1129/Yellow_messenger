//BUSINESS LOGIC

function Topping(toppingName) {
  this.toppingName = toppingName;
}

function PizzaOrder(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function testVariable() {
            var strText = document.getElementById("v").value;
            var strText1 = document.getElementById("v1").value;
            var strText2 = document.getElementById("v2").value;        
            var result = "Name :"+strText;
            var result1="Phone :"+strText1;
            var result2="Address :"+strText2;
            document.getElementById('spanResult').textContent = result;
            document.getElementById('spanResult1').textContent = result1;
document.getElementById('spanResult2').textContent = result2;
}


//Create the array of toppings
PizzaOrder.prototype.addTopping = function() {
  var topping = new Topping();
  this.toppings.push(topping);
}

//Create the price based on the size of the pizza, and how many toppings are added.
PizzaOrder.prototype.totalPrice = function() {
  var topping = new Topping;
  var orderCost = 0;
  if(this.pizzaSize === "small") {
    orderCost +=100;
  } else if(this.pizzaSize === "medium") {
    orderCost += 150;
  } else {
    orderCost += 300;
  }
  //Loop to add one dollar each time a topping is added
  if(this.toppings.length > 0) {
    debugger;
    for(var i = 1; i <= this.toppings.length; i++) {
      orderCost += 50;
    }
  }
  return orderCost;
}

//USER INTERFACE LOGIC

$(document).ready(function() {
	$("#startOrder").click(function() {
		$("#startOrder").hide();
		$("#pizzaForm").fadeIn(1000);
	});

	$("#add-topping").click(function() {
		$("#new-toppings").append('<div class="new-toppings">' +
																'<div class="form-group">' +
																	'<select id="added-toppings" class="form-control">' +
                                    '<option value="selectOne">- Select One-</option>' +
                                    '<option value="extraCheese">Extra Cheese | Rs.50.00</option>' +
                                    '<option value="ricottaCheese">Ricotta Cheese | Rs.50.00</option>' +
                                    '<option value="fetaCheese">Feta Cheese | Rs.50.00</option>' +
																		'<option value="olives">Olives | Rs.50.00</option>' +
                                    '<option value="greenPeppers">Green Peppers | Rs.50.00</option>' +
                                    '<option value="artichokes">Artichokes | Rs.50.00</option>' +
                                    '<option value="onions">Onions | Rs.50.00</option>' +
                                    '<option value="spinach">Spinach | Rs.50.00</option>' +
																		'<option value="mushrooms">Mushrooms | Rs.50.00</option>' +
																		'<option value="pepperoni">Pepperoni | Rs.50.00</option>' +
																		'<option value="sausage">Sausage | Rs.50.00</option>' +
                                    '<option value="canadianBacon">Canadian Bacon | Rs.50.00</option>' +
																		'<option value="doubleMeat">Double Meat | Rs.50.00</option>' +
																	'</select>' +
																'</div>')
	});

	$("form#pizzaForm").submit(function(event) {
    debugger;
    $("#pizzaForm").hide();

		var inputtedSize = $("select#size").val();
		var newPizzaOrder = new PizzaOrder(inputtedSize, 0);

    //This adds the topping to the Pizza object to be counted as an added topping
		$(".new-toppings").each(function() {
			var inputtedName = $(this).find("select#added-toppings").val();
      var newTopping = new Topping(inputtedName, 0);
			return newPizzaOrder.addTopping();
		})

		var price = newPizzaOrder.totalPrice();
		$("#orderSummary").show(function() {
			$("#totalCost").text(price);
		});
    

		event.preventDefault();
	});
});
