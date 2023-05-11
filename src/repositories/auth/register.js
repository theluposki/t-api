import db from "../../db/db.js";
import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";

const register = async (body) => {
  const id = randomUUID();
  const { name, email, password } = body;

  if (name === undefined || name === "") {
    return { error: "Nome é obrigatório." };
  }
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
      `SELECT name, email FROM users WHERE email=?;`,
      [email]
    );

    if (userExists[0]) return { error: "Usuário ja existe!" };
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const row = await conn.query(
      `
	    INSERT INTO users
      (id, name, email, password)
      VALUES
      (?,?,?,?);
	    `,
      [id, name, email, hashPassword]
    );
    if (row.affectedRows === 1) return { message: "Registrado com sucesso!" };
  } catch (error) {
    console.log(error);
    if (error) return { error: "Erro ao registrar!" };
  } finally {
    if (conn) conn.release();
  }
};

export default register;
