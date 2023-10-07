import db from "../config/dbConfig";

export async function validateUser(req, res, next) {

    const validateTokenFormat = req.headers.authorization.slice(0, 7);
    if (validateTokenFormat != "Bearer ") {
        return res.sendStatus(422);
    }
    const token = req.headers.authorization.slice(7);
    const userId = await db.collection("sessions").findOne({ token });
    if (!userId) {
        return res.sendStatus(401);
    }
    res.locals.userId = userId;
    next();
}