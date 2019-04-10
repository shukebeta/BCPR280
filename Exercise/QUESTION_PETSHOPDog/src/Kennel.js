/* global  DogOwner */
class Kennel { // eslint-disable-line no-unused-vars
  constructor () {
    this.allMyDogOwners = []
  }

  addDogOwner (newId, newFirstName, newLastName, newBirthDate) {
    let newDogOwner = new DogOwner(newId, newFirstName, newLastName, newBirthDate, this)
    this.allMyDogOwners.push(newDogOwner)
  }

  findDogOwner (targetOwnerId) {
    return this.allMyDogOwners.find(aDogOwner => aDogOwner.id === targetOwnerId)
  }

  sortDogOwners () {
    this.allMyDogOwners.sort(function (a, b) {
      return a.id.localeCompare(b.id)
    })
  }

  getDogOwners () {
    this.sortDogOwners()
    var output = ''
    for (let i = 0, aDogOwner, total = this.allMyDogOwners.length; i < total; i++) {
      aDogOwner = this.allMyDogOwners[i]
      output += aDogOwner.firstName + ', ' + aDogOwner.lastName + ' [' + aDogOwner.id + ']\n'
    }
    return output
  }

  getThoseWithOneDog () {
    let output = ''
    this.sortDogOwners()
    for (var i = 0, theDog, aDogOwner, total = this.allMyDogOwners.length; i < total; i++) {
      aDogOwner = this.allMyDogOwners[i]
      if (aDogOwner.hasOneDog()) {
        output += aDogOwner.firstName + ', ' + aDogOwner.lastName + ' [' + aDogOwner.id + ']\n\t'
        theDog = aDogOwner.allMyDogs[0]
        output += theDog.name + ' (' + theDog.gender + ') the ' + theDog.breed + ' likes to eat ' + theDog.favoriteFood + '\n'
      }
    }
    return output
  }

  getThoseWithFewDogs () {
    return this.getThoseWithOneDog()
  }
}
