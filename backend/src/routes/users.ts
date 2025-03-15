import express, { Request, Response } from "express";
import User from "../models/user.model";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      res.status(400).json({ message: "User Already Exists" });
    }
    user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});

export default router;
