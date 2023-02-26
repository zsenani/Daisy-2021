function validate()
{
 var ddl = document.getElementById("tableNum");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "menu_order")
   {
    return false
   }
   return true
}

function updateTables(){


   var select = document.getElementById("tableNum")
   var z 
   for (var i = 0; i < localStorage.length; i++){
   var op = localStorage.getItem(localStorage.key(i))
   if(op == 'table1'){
   		z = 1
   	}
   	else if(op == 'table2'){
   		z = 2
   	}
   	else if(op == 'table3'){
   		z = 3
   	}
   	else if(op == 'table4'){
   		z = 4
   	}
   	else if(op == 'table5'){
   		z = 5
   	}
   	else if(op == 'table6'){
   		z = 6
   	}
   	else if(op == 'table7'){
   		z = 7
   	}
   	else if(op == 'table8'){
   		z = 8
   	}
   	else {
   		continue
   	}
   	select.options[select.options.length] = new Option(op, z)
}

}

var total 
var sor = false

function ready(k, l) {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        if(sor){
        	addToCartClicked(l)
        }
        else{
        	addToCartClicked(k)
        }
        
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {

	if(validate() == false){
    return
    }
     var x = document.getElementById("tableNum")
            x.remove(x.selectedIndex)
    
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
        
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}



const invoices = new Array()

function addTable() {
 
	if(validate() == false){
    alert("Please select a table number");
    return
    }
    

	var cartItems = document.getElementsByClassName('cart-items')[0]
	var ddl = document.getElementById("tableNum")
	var selectedValue = ddl.options[ddl.selectedIndex].value
	
	var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    var priceElement = cartItems.getElementsByClassName('cart-price')
    var qElement = cartItems.getElementsByClassName('cart-quantity-input')
    
    
    
  	var orderinfo = ""
    orderinfo+="INVOICE \n"
    for(var i=0;i<cartItemNames.length;i++){
    orderinfo += cartItemNames[i].innerText+" | "
    orderinfo += priceElement[i].innerText +" | "
    orderinfo +=qElement[i].value+" \n" }
   
    orderinfo += "Total Price : "+ total +' SR'
    
 	invoices[selectedValue] = orderinfo

  if (selectedValue == 1){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('1')">Print</a>`
  }
  
  if(selectedValue == 2){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('2')">Print</a>`
  }
  if (selectedValue == 3){
  alert("hi")
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('3')">Print</a>`
  }
  if(selectedValue == 4){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('4')">Print</a>`
  }
  if (selectedValue == 5){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('5')">Print</a>`
  }
  if(selectedValue == 6){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('6')">Print</a>`
  }
  if (selectedValue == 7){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('7')">Print</a>`
  }
  if(selectedValue == 8){
  var table = document.getElementById("myTable")
  var row = table.insertRow(1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  cell1.innerHTML = selectedValue
  cell2.innerHTML = total +' SR'
  cell3.innerHTML = `<a class="button" onclick="removeTable('8')">Print</a>`
  }
 
}

function removeTable(k) {
	alert(invoices[k])
	for (var i = 0; i < localStorage.length; i++){
	var op = localStorage.getItem(localStorage.key(i))
	op = op.substring(5)
	if(op == k){
		localStorage.removeItem(localStorage.key(i))
	}
	}
    var butClicked = event.target
    butClicked.parentElement.parentElement.remove()
    updateCartTotal()
}



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(k) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[k].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[k].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[k].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
           
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="c cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        
        var price = parseFloat(priceElement.innerText.replace('SR', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =  total +' SR'
}