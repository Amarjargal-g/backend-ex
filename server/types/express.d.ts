declare global {
  namespace Express {
    interface Request {
      user?: {
        role: "USER" | "ADMIN" | "MODERATOR";
        userId: string;
        email: string;
      };
    }
  }
}

export {};
