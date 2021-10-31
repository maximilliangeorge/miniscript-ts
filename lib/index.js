"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
var miniscript_js_1 = __importDefault(require("./miniscript.js"));
var Policy = /** @class */ (function () {
    function Policy() {
    }
    Policy.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, miniscript_js_1.default)()];
                    case 1:
                        _a.instance = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Policy.prototype.compile = function (src) {
        var _a = this.instance, cwrap = _a.cwrap, _malloc = _a._malloc, _free = _a._free, UTF8ToString = _a.UTF8ToString;
        var _compile = cwrap('miniscript_compile', 'none', ['string', 'number', 'number', 'number', 'number', 'number', 'number']);
        var msOut = _malloc(10000);
        var costOut = _malloc(500);
        var asmOut = _malloc(100000);
        _compile(src, msOut, 10000, costOut, 500, asmOut, 100000);
        var out = {
            ms: UTF8ToString(msOut),
            cost: UTF8ToString(costOut),
            asm: UTF8ToString(asmOut)
        };
        _free(msOut);
        _free(costOut);
        _free(asmOut);
        return out;
    };
    Policy.prototype.analyze = function (src) {
        var _a = this.instance, _malloc = _a._malloc, _free = _a._free, UTF8ToString = _a.UTF8ToString, cwrap = _a.cwrap;
        var _analyze = cwrap('miniscript_analyze', 'none', ['string', 'number', 'number', 'number', 'number']);
        var msOut = _malloc(10000);
        var costOut = _malloc(500);
        var asmOut = _malloc(100000);
        _analyze(src, msOut, 10000, costOut, 500, asmOut, 100000);
        var out = {
            ms: UTF8ToString(msOut),
            cost: UTF8ToString(costOut),
            asm: UTF8ToString(asmOut)
        };
        _free(msOut);
        _free(costOut);
        _free(asmOut);
        return out;
    };
    return Policy;
}());
exports.Policy = Policy;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var policy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                policy = new Policy();
                return [4 /*yield*/, policy.init()];
            case 1:
                _a.sent();
                console.log(policy.compile('and(pk(A),or(pk(B),or(9@pk(C),older(1000))))'));
                console.log(policy.analyze('and_v(v:pk(K),pk(A))'));
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=index.js.map