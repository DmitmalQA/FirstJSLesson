let person = {
    firstName: 'Test First Name',
    lastName: 'Test Last Name',
    age: 32,
}

console.log(person)
person.email = 'test@test.com'
delete person.age
console.log(person)