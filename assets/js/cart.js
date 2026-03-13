function addToCart(name, price, button) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let existingItem = cart.find(item => item.name === name)

    if(existingItem) {
        cart = cart.filter(item => item.name !== name)
        button.innerHTML = `
      <img src="/assets/images/cart.svg" height="18">
      Add to cart
    `
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        })

        button.innerHTML = `
      ✓ Added
    `
        
        // alert(`${name} has been Added to cart, you can increase quantity in order page`)
        // yenza kube yi toast lapha
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    updateCartCount()

    
}

function updateCartCount() {

  let cart = JSON.parse(localStorage.getItem("cart")) || []

  let total = 0

  cart.forEach(item => {
    total += item.quantity
  })

  let counter = document.getElementById("cart-count")

  if(counter){
    counter.textContent = total
  }

}

updateCartCount();