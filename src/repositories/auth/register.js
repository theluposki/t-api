import db from "../../db/db.js";
import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import addProfile from "../users/addProfile.js";
import findUserByEmail from "../users/findUserByEmail.js";

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
    if (row.affectedRows === 1) {
      const user = await findUserByEmail(email)

      console.log(user)
      console.log(user.name)

      const nName = user.name.split(' ')[0]
      const nCod = user.id.substring(0,12)

      if(user) {
        const profile = await addProfile(user.id, {
          nickname: `${nName}-${nCod}`,
          bio: "",
          picture: `${process.env.BASE_URL}/uploads/150x150.svg`,
          links: '[]'
        })

        console.log(profile)
        if(profile.error) return { error: profile.error }
        return { message: "Registrado com sucesso!" }
      }

    }
  } catch (error) {
    console.log(error);
    if (error) return { error: "Erro ao registrar!" };
  } finally {
    if (conn) conn.release();
  }
};

export default register;
