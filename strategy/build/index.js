"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = __importDefault(require("./MiniDuckSimulator/Ducks/MallardDuck"));
var mallard = new MallardDuck_1.default();
mallard.display();
mallard.performFly();
