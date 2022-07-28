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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAllReview = exports.createOneReview = exports.deleteOneReview = exports.getAllReviews = void 0;
const reviews_schema_1 = require("../db/collections/reviews.schema");
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield reviews_schema_1.ReviewSchema.find({});
});
exports.getAllReviews = getAllReviews;
const deleteOneReview = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    yield reviews_schema_1.ReviewSchema.findByIdAndDelete({ _id });
});
exports.deleteOneReview = deleteOneReview;
const createOneReview = ({ description, title, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield reviews_schema_1.ReviewSchema.create({ description, title });
});
exports.createOneReview = createOneReview;
const createAllReview = ({ description, title, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield reviews_schema_1.ReviewSchema.deleteMany({});
});
exports.createAllReview = createAllReview;
