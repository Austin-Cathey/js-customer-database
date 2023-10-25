// from replay
/* let customersContainer = document.querySelector('.customer-container')
let database = customers.map((customer) => customerDirectoryCard(customer))

function customerDirectoryCard(customer){
    let customerCard = document.createElement('div');
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`
    customerCard.appendChild(customerName)
    customersContainer.appendChild(customerCard)
} */

// live demo 1

const entryPoint = document.querySelector('.customer-container');

function customerToHTML(customer){

    let customerName = customer.name.first.charAt(0).toUpperCase() + customer.name.first.
    slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)
    
    return `<div class="customerCard">
    <img src="${customer.picture.large}" class="customerPhoto">
    <h2 class="customer-name">${customerName}</h2>
    <a href="mailto:${customer.emaiil}" class="email">${customer.email}</a>
    <ul class="customer-info">
    <li class="address-line1">${customer.location.street.number} ${customer.location.street.name}</li>
    <li class="address-line2">${customer.location.city}, 
    ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</li>
    <li class="dob">DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}</li>
    <li class="customerSince">Customer since: ${moment(customer.registered.date).format("MMM D, YYYY")}</li>
    </ul>
    </div>`
};

let allCustomers = customers.map((customer) => 
customerToHTML(customer)).join('\n');

entryPoint.innerHTML = allCustomers;



// live demo 2
/* 
const container = document.querySelector('.customer-container');

customers.map((customer) => customerCard(customer));

function customerCard(customer) {

    let customerCard = document.createElement('div');
    let customerPhoto = document.createElement('img');
    let customerName = document.createElement('h2');
    let customerInfo = document.createElement('ul');
    let address1 = document.createElement('li');
    let address2 = document.createElement('li');
    let dob = document.createElement('li');
    let regDate = document.createElement('li');

    customerName.classList.add('customer-name');

    customerPhoto.src = customer.picture.large;
    customerName.innerText = customer.name.first.charAt(0).toUpperCase() + customer.name.first.
    slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)
address1.innerText = customer.location.street.number + " " + customer.location.street.name;
    address2.innerText = customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode                                                                                                                   

    customerCard.append(address1);
    customerCard.append(address2);
    customerCard.append(dob);
    customerCard.append(regDate);

    customerCard.append(customerPhoto);
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerInfo)

    container.appendChild(customerCard);
};
 */
