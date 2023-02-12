const totalItems = [0, 0, 0, 0];
const itemPrices = [5, 8, 8, 10];
const itemNames = ["mac & cheese", "pasta", "tacos", "enchilada"];
let totalPrice = 0;

function updateOrder(item, add) {
  if (add) {
    totalItems[item] += 1;
    totalPrice += itemPrices[item];
  } else {
    if (totalItems[item] > 0) {
      totalItems[item] -= 1;
      totalPrice -= itemPrices[item];
    }
  }

  // this is stupid
  document.getElementById("num0").innerHTML = totalItems[0];
  document.getElementById("num1").innerHTML = totalItems[1];
  document.getElementById("num2").innerHTML = totalItems[2];
  document.getElementById("num3").innerHTML = totalItems[3];

  document.getElementById("total").innerHTML = totalPrice;
}

function clearOrder() {
  for (let i = 0; i < totalItems.length; i++) {
    totalItems[i] = 0;
  }
  totalPrice = 0;

  document.getElementById("num0").innerHTML = totalItems[0];
  document.getElementById("num1").innerHTML = totalItems[1];
  document.getElementById("num2").innerHTML = totalItems[2];
  document.getElementById("num3").innerHTML = totalItems[3];

  document.getElementById("total").innerHTML = totalPrice;
}

function order() {
  if (totalPrice === 0) {
    alert("No items in cart.");
  } else {
    let orderList = "Order placed!\n";
    for (let i = 0; i < totalItems.length; i++) {
      if (totalItems[i] > 0) {
        orderList += "" + totalItems[i] + " " + itemNames[i] + "\n";
      }
    }
    orderList += "Your total is $" + totalPrice;
    alert(orderList);
  }
}
