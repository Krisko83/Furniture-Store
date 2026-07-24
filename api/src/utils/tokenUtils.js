import jwt from "jsonwebtoken";
const invalidTokens = [];

export function generateToken(user) {
    const payLoad = { userId: user.id, email: user.email};
    const authToken = jwt.sign(payLoad, process.env.AUTH_SECRET, {expiresIn: '1h'});

    return authToken;
}

 export function addInvalidToken(token) {
    return invalidTokens.push(token);
};

export function isTokenValid(token) {
    return invalidTokens.includes(token);
};