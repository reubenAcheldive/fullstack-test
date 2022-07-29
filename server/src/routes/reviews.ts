import { Router } from "express";
import * as reviewsController from "../controller/reviews.controller";
const reviewsRoute = Router();

reviewsRoute.get("/get-reviews", reviewsController.getAllReviews);
reviewsRoute.post("/create-review", reviewsController.createOneReview);
reviewsRoute.delete("/delete-review", reviewsController.deleteReviewById);
reviewsRoute.delete("/delete-all-reviews", reviewsController.deleteAllReviews);
export default reviewsRoute;
