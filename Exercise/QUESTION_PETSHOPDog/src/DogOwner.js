class DogOwner {
  constructor (newId, newFirstName, newLastName, newBirthDate, theKennel) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.myKennel = theKennel
    this.allMyDogs = []
  }

  sortDogs () {
    this.allMyDogs.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
  }

  addDog (theName, theFavoriteFood, theBreed, theGender) {
    var newDog = new Dog(this, theName, theFavoriteFood, theBreed, theGender)
    this.allMyDogs.push(newDog)
  }

  hasOneDog () {
    return this.allMyDogs.length === 1
  }

  hasFewDogs () {
    return this.hasOneDog()
  }
}
