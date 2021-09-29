"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// "ts-node-dev --respawn src/index.ts";
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/gallery/:galleryID/", (req, res) => {
    const { galleryID } = req.params;
    const { count, page } = req.query;
    console.log(galleryID, count, page);
    res.send("AAA");
});
app.listen(port, () => {
    console.log("YU");
});
