import * as express from "express";
import * as i18n from "../mocks/i18n";

const localizationRouter = express.Router();

localizationRouter.get("/en.json", (req, res) => {
    res.status(200).json(i18n.en);
});

localizationRouter.get("/ru.json", (req, res) => {
    res.status(200).json(i18n.ru);
});

export {localizationRouter};