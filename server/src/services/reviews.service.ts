import { ReviewSchema } from "../db/collections/reviews.schema";
import { IReviews } from "../interfaces/Review.interface";

export const getAllReviews = async (): Promise<IReviews[]> => {
  return await ReviewSchema.find({});
};
export const deleteOneReview = async (_id: string): Promise<void> => {
  await ReviewSchema.findByIdAndDelete({ _id });
};
export const createOneReview = async ({
  description,
  title,
}: IReviews): Promise<IReviews> => {
  return await ReviewSchema.create({ description, title });
};
export const createAllReview = async ({
  description,
  title,
}: IReviews): Promise<void> => {
  await ReviewSchema.deleteMany({});
};
