import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

//Endpoints

router.post("/product", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Asenkron işleminiz burada olmalı
    res.status(200).json({});
  } catch (error) {
    next(error); // Hata durumunda Express'in hata yönetimine yönlendirin
  }
});

export default router;
