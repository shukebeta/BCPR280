/*globals describe beforeEach Controller it expect Kennel DogOwner Dog*/
describe("Question Seven", function () {
    'use strict';
    describe("Kennel.getThoseWithFewDogs function", function () {
        var theKennel;
        beforeEach(
            function () {
                theKennel = Controller.setup();
            }
        );

        it("should return a string", function () {
            expect(typeof theKennel.getThoseWithFewDogs()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theKennel = new Kennel();
            expect(theKennel.getThoseWithFewDogs()).toBe('');
        });

        it("should correctly report details of DogOwner who has 1 Dog in order", function () {
            expect(theKennel.getThoseWithFewDogs()).toBe('Andrew, Carter [ACR]\n\tRandom (F) the Mastiff likes to eat Cat\nBrad, McCaw [BMC]\n\tSpeedy (N) the Pomeranian likes to eat Ekanuba\n');
        });

    });
});