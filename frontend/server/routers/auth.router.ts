import * as express from "express";
import * as mocks from "../mocks";

const authRouter = express.Router();
const errorAuthorization = "Error Authorization";

authRouter.post("/authenticate", (req, res) => {
    if (mocks.DecodedResponseData.login === req.body.login) {
        res.status(200).json(mocks.authStore.login);
    } else {
        res.status(403).json(errorAuthorization);
    }
});

authRouter.post("/registration", (req, res) => {
    res.status(200).json(mocks.authStore.registration);
});

authRouter.post("/logout", (req, res) => {
    res.status(200).json({});
});

export {authRouter};
