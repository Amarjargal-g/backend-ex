"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foods_route_1 = require("./routers/foods.route");
const categories_route_1 = require("./routers/categories.route");
const orders_route_1 = require("./routers/orders.route");
const user_route_1 = require("./routers/user.route");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:4200",
    credentials: true,
}));
app.use("/foods", foods_route_1.foodRouter);
app.use("/categories", categories_route_1.categoryRouter);
app.use("/users", user_route_1.userRouter);
app.use("/orders", orders_route_1.ordersRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
