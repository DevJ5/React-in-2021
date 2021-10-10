"use strict";
// Generic Functions
var genericArrowFunction = function (x) {
    return x;
};
function genericFunction(x) {
    return x;
}
// Generic Classes
var GenericClass = /** @class */ (function () {
    function GenericClass(props) {
        this.props = props;
    }
    GenericClass.prototype.getProps = function () {
        return this.props;
    };
    return GenericClass;
}());
var chocoCakes = [{ expiryDate: new Date() }];
var vanillaCakes = [{ expiryDate: new Date() }];
// Inline
var getExpiredItems = function (items) {
    var currentDate = new Date().getTime();
    return items.filter(function (item) { return item.expiryDate.getDate() < currentDate; });
};
// Type arguments explicitly
var expiredChocoCakes = getExpiredItems(chocoCakes);
var expiredVanillaCakes = getExpiredItems(vanillaCakes);
var y = { a: 'hello' };
var cart = {
    items: [],
    addItem: function (item) {
        this.items.push(item);
    },
    getItemById: function (itemId) {
        return this.items.find(function (item) { return item.id === itemId; });
    },
};
