import jwt from "jsonwebtoken";
import { getErrorMessage } from "../utils/errorsUtils";
import { isTokenValid } from "../utils/tokenUtils";


export function authMiddleware(req, res, next) {
    const token = req.headers['x-authorization'];
 
    if (!token) {
        return next()
    };

    try {
        if(isTokenValid(token)) {
            return res.status(401).json('The token has been invalidated!')
        };

        const decodedToken = jwt.verify(token, process.env.AUTH_SECRET);
        
        req.user = decodedToken;
    } catch (err) {
        const error = getErrorMessage(err);

        res.status(401).json({message: error.message})
    }

    next();

};

export function isAuth(req, res, next) { 
    if(!req.user) {
        res.status(401).json({ message: 'Unauthorized'})
    };

    next();
};