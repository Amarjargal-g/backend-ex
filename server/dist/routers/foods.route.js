"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = __importDefault(require("express"));
const add_foods_1 = require("../controllers/foods/add-foods");
const update_foods_1 = require("../controllers/foods/update.foods");
const delete_foods_1 = require("../controllers/foods/delete-foods");
const get_food_by_id_1 = require("../controllers/foods/get-food-by-id");
const get_foods_1 = require("../controllers/foods/get-foods");
exports.foodRouter = express_1.default.Router();
exports.foodRouter.get("/:id", get_food_by_id_1.getFoodById);
exports.foodRouter.get("/", get_foods_1.getFoods);
exports.foodRouter.post("/", add_foods_1.addFoods);
exports.foodRouter.put("/:id", update_foods_1.updateFoods);
exports.foodRouter.delete("/:id", delete_foods_1.deleteFoods);
