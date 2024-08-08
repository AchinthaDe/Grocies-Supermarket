document.addEventListener('DOMContentLoaded', function(event) {
    // Number Inputs
    const inputs = document.getElementsByClassName('NumIn')
    const images = document.getElementById('image')

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = 0
    } 


    // Object Arrays
    const products = {
        dairy :[
            { id: "Yogurt",category:'dairy', image: './Assets/Imgs- Dairy Page/Yoghurt.png', price: 300, input: inputs[0]},
            { id: "Cream",category:'dairy', image: './Assets/Imgs- Dairy Page/Cream.png', price: 300, input: inputs[1]},
            { id: "Cheese",category:'dairy', image: './Assets/Imgs- Dairy Page/cheese.png', price: 400, input: inputs[2]},
            { id: "Butter",category:'dairy', image: './Assets/Imgs- Dairy Page/Butter.png', price: 350, input: inputs[3]},
            { id: "Cottage Cheese",category:'dairy', image: './Assets/Imgs- Dairy Page/Cottage cheese.png', price: 500, input: inputs[4]},
            { id: "Custard",category:'dairy', image: './Assets/Imgs- Dairy Page/Custard.png', price: 500, input: inputs[5]},
            { id: "Ghee",category:'dairy', image: './Assets/Imgs- Dairy Page/Ghee.png', price: 450, input: inputs[6]},
            { id: "Condensed Milk",category:'dairy', image: './Assets/Imgs- Dairy Page/Condensed milk.png', price: 700, input: inputs[7]},
        ],
        fruits :[
            { id: "Pomegranate",category:'fruits', image: './Assets/Imgs- Fruits/pomegranate.png', price: 300, input: inputs[8]},
            { id: "Bannana",category:'fruits', image: './Assets/Imgs- Fruits/Bannana.png', price: 300, input: inputs[9]},
            { id: "Dragonfruit",category:'fruits', image: './Assets/Imgs- Fruits/Dragonfruit.png', price: 400, input: inputs[10]},
            { id: "Lychee",category:'fruits', image: './Assets/Imgs- Fruits/Lychee.png', price: 350, input: inputs[11]},
            { id: "Mango",category:'fruits', image: './Assets/Imgs- Fruits/Mango.png', price: 500, input: inputs[12]},
            { id: "Papaya",category:'fruits', image: './Assets/Imgs- Fruits/Papaya.png', price: 500, input: inputs[13]},
            { id: "Pineapple",category:'fruits', image: './Assets/Imgs- Fruits/Pineapple.png', price: 450, input: inputs[14]},
            { id: "Watermelon",category:'fruits', image: './Assets/Imgs- Fruits/Watermelon.png', price: 700, input: inputs[15]}
        ],
        vegetables :[
            { id: "Asparagus",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Asparagus.png', price: 300, input: inputs[16]},
            { id: "Bell Pepper",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Bell Pepper.png', price: 300, input: inputs[17]},
            { id: "Broccoli",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Broccoli.png', price: 400, input: inputs[18]},
            { id: "Brussel Sprouts",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Brusselspouts.png', price: 350, input: inputs[19]},
            { id: "Carrot",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Carrot.png', price: 500, input: inputs[20]},
            { id: "Cauliflour",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Cauliflour.png', price: 500, input: inputs[21]},
            { id: "Celery",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Celery.png', price: 450, input: inputs[22]},
            { id: "Corn",category:'vegetables', image: './Assets/Imgs - Vegetables Page/Corn.png', price: 700, input: inputs[23]},
        ],
        meat :[
            { id: "Beef",category:'meat', image: './Assets/Imgs - Meat/Beef.png', price: 1200, input: inputs[24]},
            { id: "Chicken",category:'meat', image: './Assets/Imgs - Meat/Chicken.png', price: 1100, input: inputs[25]},
            { id: "Crab",category:'meat', image: './Assets/Imgs - Meat/Crab.png', price: 1300, input: inputs[26]},
            { id: "Lamb",category:'meat', image: './Assets/Imgs - Meat/Lamb.png', price: 1200, input: inputs[27]},
            { id: "Pork",category:'meat', image: './Assets/Imgs - Meat/Pork.png', price: 900, input: inputs[28]},
            { id: "Salmon",category:'meat', image: './Assets/Imgs - Meat/Salmon.png', price: 1500, input: inputs[29]},
            { id: "Shrimp",category:'meat', image: './Assets/Imgs - Meat/Shrimp.png', price: 1200, input: inputs[30]},
            { id: "Tuna",category:'meat', image: './Assets/Imgs - Meat/Tuna.png', price: 700, input: inputs[31]},
        ],
        baking :[
            { id: "Baking Soda",category:'baking', image: './Assets/Imgs - Cooking/Baking Soda.png', price: 500, input: inputs[32]},
            { id: "Eggs",category:'baking', image: './Assets/Imgs - Cooking/Eggs.png', price: 550, input: inputs[33]},
            { id: "Flour",category:'baking', image: './Assets/Imgs - Cooking/Flour.png', price: 300, input: inputs[34]},
            { id: "Honey",category:'baking', image: './Assets/Imgs - Cooking/Honey.png', price: 2000, input: inputs[35]},
            { id: "Olive Oil",category:'baking', image: './Assets/Imgs - Cooking/Olive Oil.png', price: 1500, input: inputs[36]},
            { id: "Salt",category:'baking', image: './Assets/Imgs - Cooking/Salt.png', price: 200, input: inputs[37]},
            { id: "Sugar",category:'baking', image: './Assets/Imgs - Cooking/Sugar.png', price: 300, input: inputs[38]},
            { id: "Vanilla Extract",category:'baking', image: './Assets/Imgs - Cooking/Vanilla Extract.png', price: 500, input: inputs[39]},
        ]
    }

    function calculator() {
        const totalOutput = document.getElementById('total')
        let table = document.getElementById('table-body');
        let Total = 0;
        for (let i = 0; i < table.rows.length; i++) {
            let cells = table.rows[i].getElementsByTagName('td');
            if (cells.length >= 5){
                tableTotal = parseInt(cells[4].innerHTML) || 0
                Total += tableTotal
            }else{
                console.log(`skipped row ${i} with ${cells.length} cells`)
            }
        }
        totalOutput.innerHTML = Total
        console.log(`Total: ${Total}`)
    }

    // Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll('.addToCart');

    // Table variables
    let price = [];
    let qty = [];
    let total = [];
    let n = 0
    let x = 0
    
    function addToCart(buttonID) {
        console.log(buttonID)
        const allProducts = Object.values(products).flat()
        const product = allProducts.find(product => product.id === buttonID);

        let quantity = parseInt(product.input.value)
        if (quantity <=0){
            alert('Quantity added must be greater than 0')
            return
        }
        
        let table = document.getElementById('table-body')
        let newRow = table.insertRow(n)  
        let imgElement = document.createElement('img')

        let existingRow = null

        for (let i = 0; i < table.rows.length; i++){
            if (table.rows[i].cells[0] && table.rows[i].cells[0].innerHTML === product.id){
                existingRow = table.rows[i];
                break;
            }
        }
        if (existingRow){
            let newQty = parseInt(product.input.value)
            let newTotal = parseInt(product.price) * newQty

            existingRow.cells[3].innerHTML = newQty
            existingRow.cells[4].innerHTML = newTotal
            calculator()

        } else {
            let namecell = newRow.insertCell(0)
            let imagecell = newRow.insertCell(1)
            let pricecell = newRow.insertCell(2)
            let qtycell = newRow.insertCell(3)                
            let totalcell = newRow.insertCell(4)
            let delBtncell = newRow.insertCell(5)

            price[x] = product.price;

            let unit = '';
            if (['vegetables', 'fruits', 'meat'].includes(product.category)) {
                unit = ' kg/s';
            } else if (['dairy', 'baking'].includes(product.category)) {
                unit = ' piece/s';
            }

            qty[x] =  parseInt(product.input.value) 
            total[x] = product.price * (parseInt(product.input.value) || 0)

            namecell.setAttribute('data-label', "Name")
            imagecell.setAttribute('data-label', "Picture")
            pricecell.setAttribute('data-label', "Price")
            qtycell.setAttribute('data-label', "Qty")
            totalcell.setAttribute('data-label', "Total") 
           
            namecell.innerHTML = product.id
            pricecell.innerHTML = price[x]
            qtycell.innerHTML = qty[x] + unit
            totalcell.innerHTML = total[x]
            imgElement.src = product.image
            //imgElement.style.width = "120px";  
            imagecell.appendChild(imgElement)
            calculator()
            n++;
            x++;   

            const tableData = []
            const rowData = []




            let delBtn = document.createElement('button')
            delBtn.innerHTML =
            `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
            delBtn.setAttribute('type','button')
            delBtn.style.background = 'none'
            delBtn.style.border = 'none'
            delBtncell.appendChild(delBtn)
            delBtn.addEventListener('click',function(event){
                let target = event.target
                if (target.tagname === 'button' || target.closest('button')){
                    target.closest('tr').remove()
                }
                n--
                calculator()
            })
        }
    }





    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            let buttonID;
            if (event.target.tagName === 'svg' || event.target.tagName === 'path'){
                buttonID = event.target.closest('button').id
            }else{
                buttonID = event.target.id
            }
            
            addToCart(buttonID)
        })
    })





    const clearCart = document.getElementById('clearCart')
    clearCart.addEventListener('click',function(event){
        let tablebody = document.getElementById('table-body')
        tablebody.innerHTML = ''
        n = 0
        x = 0
        calculator()
        console.log('cleared')
    })





    const addToFavourites = document.getElementById('addFavourites')
    addToFavourites.addEventListener('click',function(event){
        let tablebody = document.getElementById('table-body')
        rows = tablebody.querySelectorAll('tr')
        const favourites = []
        
        if (rows.length > 0){
            for (let i=0; i < rows.length; i++){
                const cells = rows[i].querySelectorAll('td')
                if (cells.length >= 5){
                    let TProductId = cells[0].innerHTML
                    let TImage = cells[1].innerHTML
                    let TPrice = cells[2].innerHTML
                    let TInput = cells[3].innerHTML
                    let TTotal = cells[4].innerHTML
                    
                    let favouriteItem = { TProductId, TImage, TPrice, TInput, TTotal }

                    //let tempitem = { id: cells[0].innerText,  image:cells[1].innerHTML, price: cells[3].innerText, input: cells[4].innerText}
                    favourites.push(favouriteItem)

                    localStorage.setItem('favourites', JSON.stringify(favourites))
                }   
            }
        }else{
            alert('You need items in cart to be added as favourites')
        }

    })




    const applyFavourites = document.getElementById('applyFavourites')
    applyFavourites.addEventListener('click',function(event){
        const favourites = JSON.parse(localStorage.getItem('favourites'))

        favourites.forEach(favourite => {
            let table = document.getElementById('table-body')
            let newRow = table.insertRow(n)  

            let namecell = newRow.insertCell(0)
            let imagecell = newRow.insertCell(1)
            let pricecell = newRow.insertCell(2)
            let qtycell = newRow.insertCell(3)
            let totalcell = newRow.insertCell(4)
            let delbtncell = newRow.insertCell(5)

            namecell.innerHTML = favourite.TProductId
            imagecell.innerHTML = favourite.TImage
            pricecell.innerHTML = favourite.TPrice
            qtycell.innerHTML = favourite.TInput
            totalcell.innerHTML = favourite.TTotal
            let delBtn = document.createElement('button')
            delBtn.innerHTML = "Delete"
            delBtn.setAttribute('type','button')
            delbtncell.appendChild(delBtn)
            delBtn.addEventListener('click',function(event){
                event.target.parentElement.parentElement.remove()

                calculator()
        })
        calculator()
    })
        
    })




    const placeOrder = document.getElementById('placeOrder')
    placeOrder.addEventListener('click',function(){
    console.log('hi')
    const order = []
        let tablebody = document.getElementById('table-body')
        let rows = tablebody.querySelectorAll('tr')
        console.log(rows.length)
        if (rows.length > 0){
            for (let i=0; i < rows.length; i++){
                const cells = rows[i].querySelectorAll('td')
                if (cells.length >= 5){
                    let TProductId = cells[0].innerHTML
                    let TImage = cells[1].innerHTML
                    let TPrice = cells[2].innerHTML
                    let TInput = cells[3].innerHTML
                    let TTotal = cells[4].innerHTML
                    
                    let orderItems = { TProductId, TImage, TPrice, TInput, TTotal }

                    order.push(orderItems)
                    console.log(order)
                    localStorage.setItem('order', JSON.stringify(order))
                    window.location.href = 'Order.html'
                }
            }


        }else{alert('You need more than 1 item to place an order')} 


})

    
})





