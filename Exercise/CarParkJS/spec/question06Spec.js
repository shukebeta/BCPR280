describe("Question Six", function () {
    'use strict';
    describe("client.isTemp function", function () {
        var aClient = new Client();
        
        it("should exist", function () {
            expect(aClient.isTemp()).toBeDefined();
        });
        
        it("should return a boolean", function () {
            expect(typeof aClient.isTemp()).toBe('boolean');
        });

        it("should return true if the .isPermanent property is false.", function () {
            var aClient;
            aClient= new Client(null, null, null, null, null, false);
            expect(aClient.isTemp()).toBe(true);
        });
            
        it("should return false if the .isPermanent property is true.", function () {
            var aClient;
            aClient = new Client(null, null, null, null, null, true);
            expect(aClient.isTemp()).toBe(false);
        });
    });
});