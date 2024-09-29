import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

//Endpoints

router.post("/product", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
});

export default router;
