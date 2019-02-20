"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.title = "User Management Portal";
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        template: "\n  <h2> User Details</h2>\n  <table style=\"width:100%\" class=\"users\">\n    <tr>\n      <th>User</th>\n      <th>User id</th> \n      <th>XXXXX</th>\n    </tr>\n    <tr *ngFor=\"let user of users\" \n    [class.selected]=\"user === selectedUser\"\n    (click)=\"onSelect(user)\">\n      <td>{{user.name}}\n      <td >{{user.id}}</td> \n      <td>yyy</td>\n    </tr>\n  </table>\n  <user-detail [user]=\"selectedUser\"></user-detail>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: purple;\n    }\n    .userss {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .users td {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .users td.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .users td:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .users .text {\n      position: relative;\n      top: -3px;\n    }\n  "],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map