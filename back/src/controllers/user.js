import { User } from "../models/index.js";
import argon2 from "argon2";

const userController = {
  async connect(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    const passwordCheck = await argon2.verify(user.password, password);

    if (passwordCheck) {
      res.status(200).json(user);
    }
  },
  async create(req, res) {
    const ash = await argon2.hash("hashedPassword789");
  },
  async modify(req, res) {},
  async delete(req, res) {},
};

export default userController;
