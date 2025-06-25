export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details ?: any;

    constructor(message:string,statusCode:number,isOperational = true ,details ?: any){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this);
    }
}

export class NotFoundError extends AppError {
    constructor(message = "Resource not found"){
        super(message,404);
    }
}

export class ValidationError extends AppError {
    constructor(message = "Invalid request",details ?: any){
        super(message,400,details);
    }
}

export class AuthError extends AppError {
    constructor(message = "Unauthorized",details ?: any){
        super(message,401,details);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "Forbidden access",details ?: any){
        super(message,403,details);
    }
}

export class DatabaseError extends AppError {
    constructor(message = "Database error",details ?: any){
        super(message,500,details);
    }
}

export class RateLimitError extends AppError {
    constructor(message = "Too many requests , please try again later",details ?: any){
        super(message,429,details);
    }
}