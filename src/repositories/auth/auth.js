import db from "../../db/db.js";
import bcrypt from "bcryptjs";
import { readFileSync } from "node:fs";
import jwt from "jsonwebtoken";

const privateKey = readFileSync("./server.key");

const auth = async (body) => {
  const { email, password } = body;

  if (email === undefined || email === "") {
    return { error: "E-mail é obrigatório." };
  }
  if (password === undefined || password === "") {
    return { error: "Senha é obrigatória." };
  }

  let conn;
  try {
    conn = await db.getConnection();

    const userExists = await conn.query(
      `SELECT id, email, password FROM users WHERE email=?;`,
      [email]
    );

    if (!userExists[0]) return { error: "Usuário não existe!" };

    if (!bcrypt.compareSync(password, userExists[0].password)) {
      return { error: "Senha inválida!" };
    }

    const userId = userExists[0].id;

    const token = jwt.sign(
      {
        id: userId,
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1h
      },
      privateKey,
      { algorithm: "RS256" }
    );

    return { message: "Autenticado com sucesso!", token };
  } catch (error) {
    if (error) return { error: "Erro ao registrar" };
  } finally {
    if (conn) conn.release();
  }
};

export default auth;
