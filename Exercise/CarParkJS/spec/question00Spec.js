/* globals: describe beforeEach it expect CarPark Client Zone*/

describe("Basic Check For Original Source Code", function () {
    'use strict';
    describe("CarPark", function () {
        var theCarPark;
        beforeEach(function () {
            theCarPark = new CarPark();
        });

        it("should have an allMyZones property", function () {
            expect(theCarPark.hasOwnProperty('allMyZones')).toBeTruthy();
        });

        describe("the allMyZones property", function () {
            it("should reference an array", function () {
                expect(Array.isArray(theCarPark.allMyZones)).toBeTruthy();
            });
        });

        it("should have an addZone function", function () {
            expect(typeof theCarPark.addZone).toBe('function');
        });
    });

    describe("Zone", function () {
        var zone = new Zone();

        it("should have an .id property", function () {
            expect(zone.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a .location property", function () {
            expect(zone.hasOwnProperty('location')).toBeTruthy();
        });
        describe("the allMyClients property", function () {
            it("should have a .allMyClients reference", function () {
                expect(zone.hasOwnProperty('allMyClients')).toBeTruthy();
        });
            it("should reference an array", function () {
                expect(Array.isArray(zone.allMyClients)).toBeTruthy();
            });
        });

    });

 


});