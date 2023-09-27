import{Request, Response, NextFunction} from 'express'
export function LoginValidator(req:Request, res:Response, next:NextFunction) {
    console.log;(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            error: 'Missing email or password'
        });
    }
    next();
}

