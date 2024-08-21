import jwt from "jsonwebtoken";

const generateToken = (
    user: any,
    auth_secret: string,
    refresh_secret: string,
    min_expired: number,
    min_refresh: number,
) => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username,
            status: user.status,
        },
        auth_secret,
        {
            algorithm: "HS256",
            expiresIn: 60 * Number(min_expired),
        },
    );

    const refreshToken = jwt.sign(
        {
            id: user.id,
        },
        refresh_secret,
        {
            algorithm: "HS256",
            expiresIn: 60 * Number(min_refresh),
        },
    );

    return {
        token,
        refresh_token: refreshToken,
    };
};

export { generateToken };
