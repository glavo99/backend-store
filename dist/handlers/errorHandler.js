"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler = function (err, req, res) {
    res.status(404).json({ message: err.message });
};
exports.default = errorHandler;
