import * as express from "express";
import * as mocks from "../mocks";

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
    res.status(200).json(mocks.auth.login);
});

authRouter.post("/registration", (req, res) => {
    const model = mocks.auth.registration;
    model.username = req.body.username;
    res.status(200).json(mocks.auth.registration);
});

export {authRouter};
