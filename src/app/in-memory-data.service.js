"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 11, name: 'Matt Smith', email: 'smith@smithco.com' },
            { id: 12, name: 'Jane Williams', email: 'jane@smithco.com' },
            { id: 13, name: 'Lisa Au', email: 'lisa@auco.com' },
            { id: 14, name: 'Steve Steverson', email: 'steve@bread.com' },
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map