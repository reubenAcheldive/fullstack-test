"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSchema = exports.reviewSchema = void 0;
const mongoose_1 = require("mongoose");
exports.reviewSchema = new mongoose_1.Schema({
    title: String,
    description: String,
});
exports.ReviewSchema = (0, mongoose_1.model)("ReviewManger", exports.reviewSchema);
