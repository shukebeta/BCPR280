/*globals describe beforeEach Controller it expect Kennel DogOwner Dog*/
describe("Question Three", function () {
    'use strict';
    describe("Kennel.getDogOwners function", function () {
        var theKennel;
        beforeEach(function () {
            theKennel = Controller.setup();
        });

        it("should return a string", function () {
            expect(typeof theKennel.getDogOwners()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theKennel = new Kennel();
            expect(theKennel.getDogOwners()).toBe('');
        });

        it("should return correctly formatted data in the right order", function () {
            expect(theKennel.getDogOwners()).toBe('Andrew, Carter [ACR]\nBrad, McCaw [BMC]\nDan, Ellis [DEL]\nRichie, Thorn [RTH]\n');
        });
    });
});