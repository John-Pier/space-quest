import * as express from "express";
import * as mocks from "../mocks";

const authRouter = express.Router();

authRouter.get("login", (req, res) => {
    res.status(200).json(mocks.auth.login);
});

export {authRouter};
