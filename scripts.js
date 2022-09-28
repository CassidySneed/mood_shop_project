import data from './data.js'

const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	console.log(img) // Check the console!
	itemsContainer.appendChild(newDiv)
    // create a paragraph element for a description
    const desc = document.createElement('P'); 
    // give the paragraph text from the data
    desc.innerText = data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)
    // create a paragraph element for price
    const price = document.createElement('P')
    // give the price text from the data
    price.innerText = data [i].price
    // append the price to the div
    newDiv.appendChild(price)
    // create button 
    const button = document.createElement ("button"); 
    //adding id name to the button 
    button.id = data[i].name
    //create a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

}

    //making the cart 
    const cart = [ ]

    function addItem(item, price){
        for (let i = 0; i < cart.length; i += 1){
            if (cart[i].item === item) {
                cart [i].qty += 1
                return

            }
        }
        const storage = {item, price, qty:1 }
        cart.push(storage)

    }

    //Show Items
    function showItems(){
        const qty = getQty()
        console.log(`You have ${qty} items in your cart`)

        for (let i = 0; i < cart.length; i += 1){
            console.log(`-${cart[i].item} $${cart[i].price} x ${cart[i].qty}`)
        }


        
        console.log(`Total in cart: $${getTotal()}`)

    }


    //Get Qty 
    function getQty () {
        let qty = 0 
        for (let i =0; i < cart.length; i += 1){
            qty += cart[i].qty

        }
        return qty 
        
    }

    //Get total 
    function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1){
        total += cart[i].price * cart[i].qty

        }

    return total.toFixed(2)

    }




    addItem('happy', 0.99)
    addItem('sad', 2.54)
    addItem('angry', 5.50)
    addItem('happy', 0.99)
    addItem('happy', 0.99)
    addItem('sad', 2.54)



    showItems()



