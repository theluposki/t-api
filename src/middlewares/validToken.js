import jwt from 'jsonwebtoken';
import { readFileSync } from 'node:fs';
import dateExp from '../util/dateExp.js';

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // O token JWT é geralmente enviado no formato "Bearer <token>"
    const token = authHeader.split(' ')[1];
    try {
      // Verifique se o token JWT é válido e decodifique o payload
      const publicKey = readFileSync('server.key');
      const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
      // Verifique se o token expirou
      const now = Date.now().valueOf() / 1000;
      if (decoded.exp < now) {
        return res.status(401).json({ message: 'Falha na autenticação: token expirado' });
      }
      // Adicione o payload decodificado ao objeto de solicitação
      req.user = {
        id: decoded.id,
        exp: dateExp(decoded.exp)
      };
      // Chame a próxima função de middleware
      next();
    } catch (error) {
      // Se o token JWT for inválido, retorne um erro de autenticação
      return res.status(401).json({ message: 'Falha na autenticação: token inválido' });
    }
  } else {
    // Se o cabeçalho Authorization não estiver presente, retorne um erro de autenticação
    return res.status(401).json({ message: 'Falha na autenticação: cabeçalho Authorization ausente' });
  }
}

export default validateToken
