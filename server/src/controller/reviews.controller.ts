import { NextFunction, Request, Response } from "express";
import { IReviews } from "../interfaces/Review.interface";
import * as ReviewsService from "../services/reviews.service";
export const getAllReviews = async (
  req: Request,
  res: Response<any, any>,
  next: NextFunction
): Promise<Response<any, IReviews[]>> => {
  try {
    const reviews = await ReviewsService.getAllReviews();
    return res.send(reviews);
  } catch (error) {
    return res.send({ error });
  }
};
export const deleteReviewById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { _id } = req.body;
    if(!_id) return res.status(404).send({ message: "_id is missing" });
    await ReviewsService.deleteOneReview(_id);
    return res.send({ message: "success" });
  } catch (error) {
    return res.status(404).send({ message: "failed" });
  }
};

export const createOneReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  
    const { title, description }: IReviews = req.body;
    if (!title.length || !description.length)
      return res
        .status(404)
        .send({ message: "title or description can't be empty" });
        console.log({title, description })
    const addReview = await ReviewsService.createOneReview({
      title,
      description,
    });
    res.send(addReview);
  } catch (error: any) {
    return res.status(404).send({ message: error.message });
  }
};

export const deleteAllReviews =async (req: Request, res: Response): Promise<void> => {
 try {
  console.log(1)
  await ReviewsService.deleteAllReview()
  res.send({ message: "reviews are deleted"})
 } catch (error) {
  res.send(error)
 }
}