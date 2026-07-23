import jwt from "jsonwebtoken";

export function generateToken(user) {
    const payLoad = { userId: user.id, email: user.email};
    const authToken = jwt.sign(payLoad, process.env.AUTH_SECRET, {expiresIn: '1h'});

    return authToken;
}

 