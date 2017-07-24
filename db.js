var faker =require('faker')

module.exports = function() {
  var data =  { user: [] }

  for(var i = 1; i<=100; i++) {
    data.user.push({
      id:i, 
      name:faker.name.firstName(),
      lastname:faker.name.lastName(),
      address: faker.address.zipCode()+" "+faker.address.state()+"   "+faker.address.country()
      
    })
  }
  return data
}