"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminMiddleware = void 0;
const authAdminMiddleware = (req, res, next) => {
    const user = req.user;
    if (user?.role === "ADMIN") {
        next();
    }
    else {
        res.status(401).json({ message: "Admin role required" });
        return;
    }
};
exports.authAdminMiddleware = authAdminMiddleware;
