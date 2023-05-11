import jwt from 'jsonwebtoken';
import { readFileSync } from 'node:fs';
import dateExp from '../util/dateExp.js';

const validateToken = (req, res, next) => {

  const token = req.cookies.token;

  if (token) {
    try {
      // Verifique se o token JWT é válido e decodifique o payload
      const publicKey = readFileSync('server.key');
      const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
      // Verifique se o token expirou
      const now = Date.now().valueOf() / 1000;
      if (decoded.exp < now) {
        return res.status(401).json({ message: 'Falha na autenticação: token expirado' });
      }

      req.user = {
        id: decoded.id,
        exp: dateExp(decoded.exp)
      }

      next();
    } catch (error) {

      return res.status(401).json({ message: 'Falha na autenticação: token inválido' });
    }
  } else {
    return res.status(401).json({ message: 'Falha na autenticação: cookie do token ausente' });
  }
}


export default validateToken
