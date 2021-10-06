"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shopping_cart_1 = require("./lib/shopping-cart");
var calculate_total_amount_1 = require("./lib/calculate-total-amount");
var order_1 = require("./lib/order");
var cart = new shopping_cart_1.ShoppingCart();
console.log("The cart's total is " + (0, calculate_total_amount_1.calculateTotalAmount)(cart));
var order = new order_1.Order();
console.log("The order's total is " + (0, calculate_total_amount_1.calculateTotalAmount)(order));
