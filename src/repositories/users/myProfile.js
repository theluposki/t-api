import db from "../../db/db.js";

const myprofile = async (userId) => {
  let conn;

  try {
    conn = await db.getConnection();

    const profile = await conn.query(
      `SELECT
        id,
        nickname,
        bio,
        picture,
        links,
        created_at,
        updated_at
        FROM user_profiles WHERE user_id=?;`,
      [userId]
    );

    if (!profile[0]) return { error: "Não foi possivel encontrar seu perfil!" };

    console.log(profile[0]["user_id"])

    return profile[0]
  } catch (error) {
    if (error) return { error: "Não foi possivel buscar perfil!" };
  } finally {
    if (conn) conn.release();
  }

}

export default myprofile;
