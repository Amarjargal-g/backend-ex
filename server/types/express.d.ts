export interface AuthUser {
  role: "USER" | "ADMIN" | "MODERATOR";
  userId: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}
