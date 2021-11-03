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
exports.analyzeMiniscript = exports.compilePolicy = void 0;
var miniscript_js_1 = __importDefault(require("./miniscript.js"));
function compilePolicy(policy) {
    return __awaiter(this, void 0, void 0, function () {
        var instance, cwrap, _malloc, _free, UTF8ToString, compile, msOut, costOut, asmOut, compiled;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, miniscript_js_1.default)()];
                case 1:
                    instance = _a.sent();
                    cwrap = instance.cwrap, _malloc = instance._malloc, _free = instance._free, UTF8ToString = instance.UTF8ToString;
                    compile = cwrap('miniscript_compile', 'none', ['string', 'number', 'number', 'number', 'number', 'number', 'number']);
                    msOut = _malloc(10000);
                    costOut = _malloc(500);
                    asmOut = _malloc(100000);
                    compile(policy, msOut, 10000, costOut, 500, asmOut, 100000);
                    compiled = {
                        ms: UTF8ToString(msOut),
                        cost: UTF8ToString(costOut),
                        asm: UTF8ToString(asmOut)
                    };
                    _free(msOut);
                    _free(costOut);
                    _free(asmOut);
                    return [2 /*return*/, compiled];
            }
        });
    });
}
exports.compilePolicy = compilePolicy;
function analyzeMiniscript(miniscript) {
    return __awaiter(this, void 0, void 0, function () {
        var instance, _malloc, _free, UTF8ToString, cwrap, _analyze, analyzeOut, asmOut, analyzed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, miniscript_js_1.default)()];
                case 1:
                    instance = _a.sent();
                    _malloc = instance._malloc, _free = instance._free, UTF8ToString = instance.UTF8ToString, cwrap = instance.cwrap;
                    _analyze = cwrap('miniscript_analyze', 'none', ['string', 'number', 'number', 'number', 'number']);
                    analyzeOut = _malloc(50000);
                    asmOut = _malloc(100000);
                    _analyze(miniscript, analyzeOut, 50000, asmOut, 100000);
                    analyzed = {
                        analyzeOut: UTF8ToString(analyzeOut),
                        asmOut: UTF8ToString(asmOut)
                    };
                    _free(analyzeOut);
                    _free(asmOut);
                    return [2 /*return*/, analyzed];
            }
        });
    });
}
exports.analyzeMiniscript = analyzeMiniscript;
//# sourceMappingURL=index.js.map