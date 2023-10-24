let customersContainer = document.querySelector('.customer-container')
let database = customers.map((customer) => customerDirectoryCard(customer))

function customerDirectoryCard(customer){
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`
    customerCard.appendChild(customerName)
    customersContainer.appendChild(customerCard)
}





