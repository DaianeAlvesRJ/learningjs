'use strict'

var users = []

var user = {
    login: null,
    password: null,
    name: null,
    email: null,
    telephone: null,
    age: null,
    address: {
        street: null,
        number: null,
        neighborhood: null,
        city: null,
        state: null,
        country: null,
        zipcode: null,
    }    
}
function addUser( user ) {
   users.push(user)
}
function setLogin(user,login){
    user.login = login    
}
function setPassword(user, password){
    user.password = password
}
function setName(user,name){
    user.name = name
}
function setEmail(user, email){
    user.email = email
}
function setTelefone(user, telephone){
    user.telephone = telephone
}
function setAge(user, age) {
    user.age = age
}
function setStreet(user, street){
   user.address.street = street
}

function setNumber(user, number){
   user.address.number = number
}

function setNeighborhood(user, neighborhood){
    user.address.neighborhood = neighborhood
}
function setCity(user, city){
    user.address.city = city
}
function setState(user, state){
    user.address.state = state
}
function setCounty(user, country){
    user.address.country = country
}
function setZipcode(user, zipcode){
    user.address.zipcode = zipcode
}
setLogin(user, 123)
setPassword(user,'minhasenha')
setName(user, 'Daiane Alves')
setEmail(user, 'daiane@daiane.com')
setTelefone(user,970110918)
setAge(user, 27)
setStreet(user,'Alameda Antoninha')
setNumber(user, 153)
setNeighborhood(user, 'Piabeta')
setCity(user, 'Mage')
setState(user,'Rio de Janeiro')
setCounty(user, 'Brasil' )
setZipcode(user, 24756000)
addUser(user)
addUser(user)
addUser(user)
console.log(user)
console.log(users)
