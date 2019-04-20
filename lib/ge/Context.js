"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tolerance_1 = require("./Tolerance");
var Context = /** @class */ (function () {
    function Context() {
        this.tolerance = new Tolerance_1.Tolerance();
    }
    Context.getInstance = function () {
        return Context.s_Instance;
    };
    Context.s_Instance = new Context();
    return Context;
}());
exports.Context = Context;
