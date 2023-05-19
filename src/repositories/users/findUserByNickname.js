import db from "../../db/db.js";

const findUserByNickname = async (nickname) => {
  let conn;

  try {
    conn = await db.getConnection();
    const users = await conn.query(
      `select id, nickname, bio, picture, links from user_profiles where nickname like ?`,
      [`${nickname}%`]
    );
    return users;
  } catch (error) {
    if (error) return { error: "Não foi possivel buscar esse usuário." };
  } finally {
    if (conn) conn.release();
  }
};

export default findUserByNickname;
