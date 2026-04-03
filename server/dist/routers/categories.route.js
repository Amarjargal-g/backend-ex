"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const get_categories_1 = require("../controllers/categories/get-categories");
const add_categories_1 = require("../controllers/categories/add-categories");
const update_categories_1 = require("../controllers/categories/update.categories");
const delete_categories_1 = require("../controllers/categories/delete-categories");
const get_categories_by_id_1 = require("../controllers/categories/get-categories-by-id");
const authMiddleware_1 = require("../controllers/auth/authMiddleware");
exports.categoryRouter = express_1.default.Router();
exports.categoryRouter.get("/", authMiddleware_1.authMiddleware, get_categories_1.getCategories);
exports.categoryRouter.post("/", add_categories_1.addCategories);
exports.categoryRouter.get("/:id", get_categories_by_id_1.getCategoriesById);
exports.categoryRouter.put("/:id", update_categories_1.updateCategories);
exports.categoryRouter.delete("/:id", delete_categories_1.deleteCategories);
