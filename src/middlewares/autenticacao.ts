import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}

export function autenticacao(req: Request, res: Response, next: NextFunction) {
    const tokenUsuario = req.headers.authorization;

    if (!tokenUsuario) {
        return res.status(401).end();
    }

    const [, token] = tokenUsuario.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.CHAVE_JWT
        ) as PayLoad;

        req.usuario_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }
}