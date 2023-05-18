import db from "../../db/db.js";

const findUserByEmail = async (email) => {
  let conn;

  try {
    conn = await db.getConnection();

    const user = await conn.query(
      `SELECT id, name, email FROM users WHERE email=?;`,
      [email]
    );

    return user[0];
  } catch (error) {
    if (error) return { error: "Não foi possivel buscar esse usuário." };
  } finally {
    if (conn) conn.release();
  }
};

export default findUserByEmail;
