class ApiError extends Error {
    constructor(statusCode, message = "SOMETHING WENT WRONG", errors=[], stack = ""){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(stack){
            this.stack = stack;
        } else{
            // take from Node.js we communicate in which case we show error for which context
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };