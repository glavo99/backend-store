"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var authHandler_1 = __importDefault(require("../handlers/authHandler"));
var errorHandler_1 = __importDefault(require("../handlers/errorHandler"));
var mainHandler_1 = __importDefault(require("../handlers/mainHandler"));
var proHandler_1 = __importDefault(require("../handlers/proHandler"));
var controllers = __importStar(require("../handlers/orderHandler"));
var handlers = __importStar(require("../handlers/productHandler"));
var userHandlers = __importStar(require("../handlers/userHandler"));
describe('authHandler', function () {
    it('event handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(authHandler_1.default).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('errorHandler', function () {
    it('event handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(errorHandler_1.default).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('mainHandler', function () {
    it('event handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(mainHandler_1.default).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('proHandler', function () {
    it('event handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(proHandler_1.default).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('orderHandler', function () {
    it('Order Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(controllers.index).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('orderHandler', function () {
    it('Order Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(controllers.show).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('orderHandler', function () {
    it('Order Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(controllers.addProduct).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('orderHandler', function () {
    it('Order Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(controllers.create).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('orderHandler', function () {
    it('Order Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(controllers.deleteProduct).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('orderHandler', function () {
    it('Order Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(controllers.showCart).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('productHandler', function () {
    it('product Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(handlers.create).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('productHandler', function () {
    it('product Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(handlers.deleteProduct).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('productHandler', function () {
    it('product Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(handlers.index).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('productHandler', function () {
    it('product Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(handlers.show).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('productHandler', function () {
    it('product Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(handlers.update).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('userHandler', function () {
    it('user Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(userHandlers.index).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('userHandler', function () {
    it('user Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(userHandlers.logIn).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('userHandler', function () {
    it('user Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(userHandlers.protect).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('userHandler', function () {
    it('user Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(userHandlers.show).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
describe('userHandler', function () {
    it('user Handler exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(userHandlers.signUp).toBeDefined();
            return [2 /*return*/];
        });
    }); });
});
