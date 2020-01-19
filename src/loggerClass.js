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
var renderer_1 = __importDefault(require("./renderer"));
var messageTypes_1 = require("./messageTypes");
function validate(message) {
    if (message === undefined) {
        return false;
    }
    else {
        return true;
    }
}
exports.validate = validate;
var LoggerClass = (function () {
    function LoggerClass(loggerConfig) {
        this.messageTypeLongestLength = 0;
        this.loggerConfig = loggerConfig;
        this.registerMessageType(messageTypes_1.successType, false);
        this.registerMessageType(messageTypes_1.noteType, false);
        this.registerMessageType(messageTypes_1.infoType, false);
        this.registerMessageType(messageTypes_1.okayType, false);
        this.registerMessageType(messageTypes_1.verboseType, false);
        this.registerMessageType(messageTypes_1.warningType, false);
        this.registerMessageType(messageTypes_1.errorType, false);
    }
    LoggerClass.prototype.registerMessageType = function (type, addToClass) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (type.text.length > this.messageTypeLongestLength) {
                    this.messageTypeLongestLength = type.text.length;
                }
                return [2];
            });
        });
    };
    LoggerClass.prototype.success = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(validate(message) == true)) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.successType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LoggerClass.prototype.note = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(validate(message) == true)) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.noteType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LoggerClass.prototype.info = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(validate(message) == true)) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.infoType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LoggerClass.prototype.okay = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(validate(message) == true)) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.okayType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LoggerClass.prototype.verbose = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var found, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        found = this.loggerConfig.verboseIdentifier.some(function (argument) { return process.argv.includes(argument); });
                        if (!found) return [3, 2];
                        if (!(validate(message) == true)) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.verboseType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LoggerClass.prototype.warning = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(validate(message) == true)) return [3, 4];
                        if (!(typeof message === 'string')) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.warningType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        return [3, 4];
                    case 2:
                        _d = (_c = console).log;
                        return [4, renderer_1.default(messageTypes_1.warningType, message.message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 3:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    LoggerClass.prototype.error = function (message, exitCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(validate(message) == true)) return [3, 5];
                        if (!(typeof message === 'string')) return [3, 2];
                        _b = (_a = console).log;
                        return [4, renderer_1.default(messageTypes_1.errorType, message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 1:
                        _b.apply(_a, [_e.sent()]);
                        return [3, 4];
                    case 2:
                        _d = (_c = console).log;
                        return [4, renderer_1.default(messageTypes_1.errorType, message.message, this.messageTypeLongestLength, this.loggerConfig)];
                    case 3:
                        _d.apply(_c, [_e.sent()]);
                        _e.label = 4;
                    case 4:
                        if (exitCode) {
                            process.exit(exitCode);
                        }
                        _e.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    return LoggerClass;
}());
exports.LoggerClass = LoggerClass;
//# sourceMappingURL=loggerClass.js.map