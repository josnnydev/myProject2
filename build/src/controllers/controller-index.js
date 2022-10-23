"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getindex = void 0;
const path_1 = __importDefault(require("path"));
class Getindex {
    index(req, res) {
        res.render(path_1.default.join('partials', 'index'));
    }
}
exports.getindex = new Getindex();
