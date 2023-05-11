import { randomUUID } from "node:crypto";
import db from "../../db/db.js";

const addProfile = async (userId, body) => {
  const id = randomUUID();

  const { nickname, bio, picture, links } = body

  if (nickname === undefined || nickname === "") {
    return { error: "Nome de usuário é obrigatório." };
  }

  let conn;

  try {
    conn = await db.getConnection();

    const userExists = await conn.query(
      `SELECT nickname FROM user_profiles WHERE nickname=?;`,
      [nickname]
    );
    console.log(userExists)
    if (userExists[0]) return { error: "Já existe um usuário com esse nome de usuário!" };
    const row = await conn.query(
      `
	    INSERT INTO user_profiles
      (id, user_id, nickname, bio, picture, links)
      VALUES
      (?,?,?,?,?,?);
	    `,
      [id, userId, nickname, bio, picture, links]
    );

    console.log(row)
    if (row.affectedRows === 1) return { message: "Perfil adicionado com sucesso!" };
  } catch (error) {
    if (error) return { error: "Não foi possivel adicionar perfil!" };
  } finally {
    if (conn) conn.release();
  }

}

export default addProfile;
