"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
class Margherita extends Pizza_1.default {
    constructor(size) {
        super(size);
        this.ingredients.push('basil', 'fresh mozzarella', 'tomatoes');
    }
}
exports.default = Margherita;
