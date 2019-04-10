/*globals describe beforeEach Controller it expect Kennel DogOwner Dog*/
describe("Question Six", function () {
    'use strict';
    describe("DogOwner.hasFewDogs function", function () {
        var aDogOwner, aDog;
        beforeEach(function () {
            aDogOwner = new DogOwner();
            aDog = new Dog();
        });

        it("should exist", function () {
            expect( aDogOwner.hasFewDogs ).toBeDefined();
        });

        it("should return a boolean", function () {
            expect(typeof aDogOwner.hasFewDogs()).toBe('boolean');
        });

        it("should return false if the number of Dog that person owns is equal zero.", function () {
            aDogOwner = new DogOwner('tao', null, null, null, null);
            expect(aDogOwner.hasFewDogs()).toBe(false);
        });

        it("should return true if the number of Dog that person owns is equal one.", function () {
            aDogOwner = new DogOwner('tao', null, null, null, null);
            aDog = aDogOwner.addDog(null, null, null, null);
            expect(aDogOwner.hasFewDogs()).toBe(true);
        });

        it("should return false if the number of Dog that person owns is more than one.", function () {
            aDogOwner = new DogOwner('tao', null, null, null, null);
            aDog = aDogOwner.addDog(null, null, null, null);
            aDog = aDogOwner.addDog(null, null, null, null);
            expect(aDogOwner.hasFewDogs()).toBe(false);
        });

        it("should return false if the number of Dog that person owns is more than two.", function () {
            aDogOwner = new DogOwner('tao', null, null, null, null);
            aDog = aDogOwner.addDog(null, null, null, null);
            aDog = aDogOwner.addDog(null, null, null, null);
            aDog = aDogOwner.addDog(null, null, null, null);
            expect(aDogOwner.hasFewDogs()).toBe(false);
        });
    });
});