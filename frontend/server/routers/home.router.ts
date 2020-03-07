import * as express from "express";
import * as mocks from "../mocks";

const homeRouter = express.Router();

homeRouter.get("/data", (req, res) => {
    res.status(200).json(mocks.home);
});

export {homeRouter};