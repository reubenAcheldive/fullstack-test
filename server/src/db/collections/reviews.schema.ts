import { Schema, Model, model } from "mongoose";
import { IReviews } from "../../interfaces/Review.interface";

export const reviewSchema = new Schema<IReviews>({
  title: String,
  description: String,
});
export const ReviewSchema = model<IReviews>("ReviewManger", reviewSchema);
