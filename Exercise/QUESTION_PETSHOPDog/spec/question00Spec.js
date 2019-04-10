/*globals describe beforeEach it expect Kennel DogOwner Dog*/
describe("Basic Check For Original Source Code", function () {
    'use strict';
    describe("Kennel", function () {
        var theKennel;
        beforeEach(function () {
            theKennel = new Kennel();
        });

        describe("the allMyDogOwners property", function () {
            it("should have an .allMyDogOwners property", function () {
                expect(theKennel.hasOwnProperty('allMyDogOwners')).toBeTruthy();
            });
            it("should reference an array", function () {
                expect(Array.isArray(theKennel.allMyDogOwners)).toBeTruthy();
            });
        });

        it("should have an .addDogOwner function", function () {
            expect(typeof theKennel.addDogOwner).toBe('function');
        });

        it("should have a .findDogOwner function", function () {
            expect(typeof theKennel.findDogOwner).toBe('function');
        });

        it("should have a .sortDogOwners function", function () {
            expect(typeof theKennel.sortDogOwners).toBe('function');
        });
    });

    describe("DogOwner", function () {
        var dogOwner;
        beforeEach(function () {
            dogOwner = new DogOwner();
        });

        it("should have an .id property", function () {
            expect(dogOwner.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a .firstName property", function () {
            expect(dogOwner.hasOwnProperty('firstName')).toBeTruthy();
        });

        it("should have a .lastName property", function () {
            expect(dogOwner.hasOwnProperty('lastName')).toBeTruthy();
        });

        it("should have a .birthDate property", function () {
            expect(dogOwner.hasOwnProperty('birthDate')).toBeTruthy();
        });

        it("should have a .myKennel reference", function () {
            expect(dogOwner.hasOwnProperty('myKennel')).toBeTruthy();
        });

        describe("the allMyDogs property", function () {
            it("should have an .allMyDogs reference", function () {
                expect(dogOwner.hasOwnProperty('allMyDogs')).toBeTruthy();
            });

            it("should reference an array", function () {
                expect(Array.isArray(dogOwner.allMyDogs)).toBeTruthy();
            });
        });

        it("should have a .sortDogs function", function () {
            expect(typeof dogOwner.sortDogs).toBe('function');
        });
    });
});