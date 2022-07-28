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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOneReview = exports.deleteReviewById = exports.getAllReviews = void 0;
const ReviewsService = __importStar(require("../services/reviews.service"));
const getAllReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield ReviewsService.getAllReviews();
        return res.send(reviews);
    }
    catch (error) {
        return res.send({ error });
    }
});
exports.getAllReviews = getAllReviews;
const deleteReviewById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.body;
        if (!_id)
            return res.status(404).send({ message: "_id is missing" });
        yield ReviewsService.deleteOneReview(_id);
        return res.send({ message: "success" });
    }
    catch (error) {
        return res.status(404).send({ message: "failed" });
    }
});
exports.deleteReviewById = deleteReviewById;
const createOneReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        if (!title.length || !description.length)
            return res
                .status(404)
                .send({ message: "title or description can't be empty" });
        console.log({ title, description });
        const addReview = yield ReviewsService.createOneReview({
            title,
            description,
        });
        res.send(addReview);
    }
    catch (error) {
        return res.status(404).send({ message: error.message });
    }
});
exports.createOneReview = createOneReview;
