/* global Kennel */
class Controller { // eslint-disable-line no-unused-vars
  static setup () {
    let theKennel = new Kennel()

    // ADD CODE HERE TO CREATE THE DOGOWNERS
    /*
    BMC   Brad    McCaw   12/13/1982
    RTH   Richie  Thorn   8/05/1980
    DEL   Dan     Ellis   16/02/1984
    ACR   Andrew  Carter  30/11/1987
    */
    let dogOwners = [
      {
        id: 'BMC',
        firstName: 'Brad',
        lastName: 'McCaw',
        birthDate: new Date('12/12/1982')
      },
      {
        id: 'RTH',
        firstName: 'Richie',
        lastName: 'Thorn',
        birthDate: new Date('05/08/1980')
      },
      {
        id: 'DEL',
        firstName: 'Dan',
        lastName: 'Ellis',
        birthDate: new Date('02/16/1984')
      },
      {
        id: 'ACR',
        firstName: 'Andrew',
        lastName: 'Carter',
        birthDate: new Date('11/30/1987')
      }
    ]

    for (let i = 0, aDogOwner, total = dogOwners.length; i < total; i++) {
      aDogOwner = dogOwners[i]
      theKennel.addDogOwner(aDogOwner.id, aDogOwner.firstName, aDogOwner.lastName, aDogOwner.birthDate)
    }

    // ADD CODE HERE TO CREATE THE DOGS

    /*
    DogOwner ID     Name         Breed         Gender      Favorite Food
      BMC          Speedy     Pomeranian        N           Ekanuba
      RTH          Victor      Beagle           M           Chef
      RTH          Killer      Mastiff          N           Purina
      DEL          Ruftero     Poodle           F           Ekanuba
      DEL          Sausage    Dachshund         F           Purina
      ACR          Random      Mastiff          F            Cat
    */

    let dogs = [
      {
        dogOwnerId: 'BMC',
        name: 'Speedy',
        breed: 'Pomeranian',
        gender: 'N',
        favoriteFood: 'Ekanuba'
      },
      {
        dogOwnerId: 'RTH',
        name: 'Killer',
        breed: 'Mastiff',
        gender: 'N',
        favoriteFood: 'Purina'
      },
      {
        dogOwnerId: 'RTH',
        name: 'Victor',
        breed: 'Beagle',
        gender: 'M',
        favoriteFood: 'Chef'
      },
      {
        dogOwnerId: 'DEL',
        name: 'Ruftero',
        breed: 'Poodle',
        gender: 'F',
        favoriteFood: 'Ekanuba'
      },
      {
        dogOwnerId: 'DEL',
        name: 'Sausage',
        breed: 'Dachshund',
        gender: 'F',
        favoriteFood: 'Purina'
      },
      {
        dogOwnerId: 'ACR',
        name: 'Random',
        breed: 'Mastiff',
        gender: 'F',
        favoriteFood: 'Cat'
      }
    ]

    for (let i = 0, aDog, theDogOwner, total = dogs.length; i < total; i++) {
      aDog = dogs[i]
      theDogOwner = theKennel.findDogOwner(aDog.dogOwnerId)
      theDogOwner.addDog(aDog.name, aDog.favoriteFood, aDog.breed, aDog.gender)
    }
    return theKennel
  }
}
