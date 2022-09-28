import data from './data.js'; 

const itemsContainer = document.querySelector('#items'); 
const itemList = document.getElementById('item-list'); 
const cartQty = document.getElementById('cart-qty'); 
const cartTotal = document.getElementById ('cart-total'); 
const all_items_button = Array.from(document.querySelectorAll("button"))



console.log(all_items_button)
//console.log(itemList)

//adding event listener to the button 
all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))


// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'; 


	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image; 
	img.width = 300; 
	img.height = 300; 
	// Add the image to the div
	newDiv.appendChild(img); 
    console.log(img);  // Check the console!
	itemsContainer.appendChild(newDiv); 


    // create a paragraph element for a description
    const desc = document.createElement('P'); 
    // give the paragraph text from the data
    desc.innerText = data[i].desc; 
    // append the paragraph to the div
    newDiv.appendChild(desc); 


    // create a paragraph element for price
    const price = document.createElement('P'); 
    // give the price text from the data
    price.innerText = data [i].price; 
    // append the price to the div
    newDiv.appendChild(price); 


    // create button 
    const button = document.createElement ("button"); 
    //adding id name to the button 
    button.id = data[i].name; 
    //create a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price; 
    button.innerHTML = "Add to Cart"; 
    newDiv.appendChild(button); 

    const allItemsButton = Array.from(document.querySelectorAll("button")); 
    console.log(allItemsButton); 

    allItemsButton.forEach((item) =>
    item.addEventListener("click", () => {
    addItem(item.getAttribute("id"), item.getAttribute("data-price")); // name from button ID and price from data-price
    showItems();
  })
);

}

    //making the cart 
    const cart = [ ]; 

    //Add Item -----------------------------------
    function addItem(name, price) {
        for (let i = 0; i < cart.length; i += 1) {
          if (cart[i].name === name) {
            cart[i].qty += 1;
            showItems();
            return;
          }
        }
        const item = { name, price, qty: 1 };
        cart.push(item);
      }
    //Show Items ------------------------------------------------------------
    function showItems() {
        // console.log(`You have ${getQty()} items in your cart`);
        cartQty.innerHTML = `You have ${getQty()} items in your cart`;
      
        let itemStr = "";
        for (let i = 0; i < cart.length; i += 1) {
          // console.log(`-  ${cart[i].name} ${cart[i].price} x ${cart[i].qty}`);
      
          const { name, price, qty } = cart[i];
      
          itemStr += `<li>${name} $${price} x ${qty} = ${qty *price}</li>`
        itemList.innerHTML = itemStr; // goes into the item list id and adds a <li> tag
      
        // console.log(`Total in cart: $${getTotal()}`);
        cartTotal.innerHTML = `Total in cart: $${getTotal()}`;
      }

       //Get total -------------------------------------------------------------
      function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i += 1){
            total += cart[i].price * cart[i].qty;
    
            }
    
        return total.toFixed(2); 
    
        }


    //Get Qty ----------------------------------------------------------------
    function getQty () {
      let qty = 0; 
      for (let i =0; i < cart.length; i += 1){
          qty += cart[i].qty; 

      }
      return qty 
      
  }

   function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === name.toLowerCase()) {
      if (qty > 0) {
        cart[i].qty -= qty;
      }
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1); // start at index i, and remove that 1 singular item.
      }
      showItems();
      return;
    }
  }
}


//Remove items from cart--------------------------------------
    function removeItem(name, qty = 0 ){
        for (let i = 0; i < cart.length; i +=1 ){
            if (cart[i].name.toLowerCase() === name.toLowerCase()) {
                if (qty > 0) {
                  cart[i].qty -= qty;
                }
                if (cart[i].qty < 1 || qty === 0) {
                  cart.splice(i, 1); // start at index i, and remove that 1 singular item.
                }
                showItems();
                return;
              }
            }
          }

 // update cart -----------------------------------------------------
        function updateCart(name, qty) {
        for (let i = 0; i < cart.length; i += 1) {
            if (cart[i].name === name) {
            if (qty < 1) {
                removeItem(name);
                return;
            }
            cart[i].qty = qty;
            showItems();
            return;
            }
        }
        }

        

    // addItem('happy', 0.99)
    // addItem('sad', 2.54)
    // addItem('angry', 5.50)
    // addItem('happy', 0.99)
    // addItem('happy', 0.99)
    // addItem('sad', 2.54)

    showItems(); 


    }
