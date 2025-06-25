import { AppError } from "./index.js";
import { Request, Response, NextFunction } from "express";


export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        console.log(`Error ${req.method} ${req.url} - ${err.message}`);

        return res.status(err.statusCode).json({
            status: "Error",
            message: err.message,
            ... (err.details && { details: err.details }),
        });
    }
    console.log("Unhandled error", err);

    return res.status(500).json({
        error: "Internal Server Error , Please try again",
    });
}