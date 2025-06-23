const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

const asyncHandlerTryCatch = (fn) => 
    async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            res.status(error.status || 500).json({
                success: false,
                message: "Internal server error"
            })
            next(error);
        }
    
}
export default asyncHandler;
