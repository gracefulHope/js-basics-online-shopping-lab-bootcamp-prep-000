var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * Math.floor(100))
 var newItem = { [item]: itemPrice }
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var statement = "In your cart, you have "
  var num = 0
  if (cart.length === 0){
    statement = "Your shopping cart is empty."
  } else {
    var item = {}
    var itemName
    var price = 0
    while (num < cart.length){
      item = cart[num]
      itemName = Object.keys(item)
      price = item[itemName]
      statement = statement + `${itemName} at $${price}`
      num++
      if (num === cart.length){
        statement = statement + "."
      } else if (num === cart.length - 1){
        if (cart.length > 2) {
          statement = statement + ","
        }
        statement = statement + " and "
        
      } else {
        statement = statement +", "
      }
      
  }
  }
  console.log(`${statement}`) 
}

function total() {
  var num = 0
  var total = 0
  if (cart.length === 0){
    return total
  } else {
    var item = {}
    var itemName
    while(num < cart.length) {
      item = cart[num]
      itemName = Object.keys(item)
      console.log(`Cart Item: ${itemName}`)
      console.log(`Cart Item: ${item[itemName]}`)
      total = total + parseInt(item[itemName])
      console.log(`Total = ${total}`)
      num++
    }
    console.log(`${total}`)
    return total
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
