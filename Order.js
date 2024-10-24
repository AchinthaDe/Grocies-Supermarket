document.addEventListener('DOMContentLoaded', function(event) {

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


    function addToTable(){
        const order = JSON.parse(localStorage.getItem('order'))
        console.log(order)

        order.forEach( orderItem => {
            n = 0
            let table = document.getElementById('table-body')
            let newRow = table.insertRow(n)  
            let imgElement = document.createElement('img')

            let namecell = newRow.insertCell(0);
            let imagecell = newRow.insertCell(1)
            let pricecell = newRow.insertCell(2)
            let qtycell = newRow.insertCell(3)                
            let totalcell = newRow.insertCell(4)

            namecell.setAttribute('data-label', "Name")
            imagecell.setAttribute('data-label', "Picture")
            pricecell.setAttribute('data-label', "Price")
            qtycell.setAttribute('data-label', "Qty")
            totalcell.setAttribute('data-label', "Total") 
                
            namecell.innerHTML = orderItem.TProductId
            pricecell.innerHTML = orderItem.TPrice
            qtycell.innerHTML = orderItem.TInput
            totalcell.innerHTML = orderItem.TTotal
            imagecell.innerHTML = orderItem.TImage
            imgElement.style.width = "100%";  
            calculator()
        })
    }
    addToTable()

    let submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click',function(event){
        const currentDate = new Date()
        const deliveryDate = new Date()
        deliveryDate.setDate(currentDate.getDate() + 3)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const DeliveryDate = deliveryDate.toLocaleDateString(undefined, options);
        alert(`Thank you for your purchase. Your order will arrive on ${DeliveryDate}`)
    }) 
})