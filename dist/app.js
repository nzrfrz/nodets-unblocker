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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
var Unblocker = require('unblocker');
const app = (0, express_1.default)();
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server Running on:\n http://localhost:${process.env.PORT}`);
        });
    }
    catch (error) {
        console.log("Server Error: \n", error.toString());
    }
});
const unblockerConfig = {
    prefix: '/proxy/',
};
const unblocker = new Unblocker(unblockerConfig);
app.use(unblocker);
startServer();
//# sourceMappingURL=app.js.map