function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let existingItem = cart.find(item => item.name === name)

    if(existingItem) {
        cart = cart.filter(item => item.name !== name)
        alert(`${name} has been removed from cart`)
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        })
        
        alert(`${name} has been Added to cart, you can increase quantity in order page`)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    
}