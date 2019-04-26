/*globals describe beforeEach it expect Guess*/
describe("Basic Check For Original Source Code", function () {
  'use strict';
  describe("ComputerExtended", function () {
      var npc;
      beforeEach(function () {
        npc = new ComputerExtended();
      });

      describe("the candidateList property", function () {
        it("should have a candidateList property", function () {
          expect(npc.hasOwnProperty('candidateList')).toBe(true);
        });
        
        it("should be an array", function () {
          expect(Array.isArray(npc.candidateList)).toBe(true);
        });
      });

      describe("the tryCount property", function () {
        it("should have a tryCount property", function () {
          expect(npc.hasOwnProperty('tryCount')).toBe(true);
        });
        
        it("should be an integer", function () {
          expect(Number.isInteger(npc.tryCount)).toBe(true);
        });
      });

      it("should have a getGuess function", function () {
        expect(typeof npc.getGuess).toBe('function');
      });

      it("should have a refineCandidateList function", function () {
        expect(typeof npc.refineCandidateList).toBe('function');
      });

      it("should have a saveGuess function", function () {
        expect(typeof npc.saveGuess).toBe('function');
      });

      it("should have a constructor function", function () {
        expect(typeof npc.constructor).toBe('function');
      });

  });
});
