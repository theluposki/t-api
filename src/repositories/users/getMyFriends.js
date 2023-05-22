import db from "../../db/db.js";

const getMyFriends = async (userId) => {
  let conn;

  try {
    conn = await db.getConnection();

    const friends = await conn.query(
      `
      SELECT f.id, up.nickname, up.picture
      FROM user_profiles up JOIN friends f ON up.user_id = f.user2_id
      WHERE
      f.user1_id = ?
      OR f.user2_id = ?;
      `,
      [userId, userId]
    );

    console.log(friends)

    return friends
  } catch (error) {
    if (error) return { error: "Não foi possivel buscar amigos." };
  } finally {
    if (conn) conn.release();
  }
}

export default getMyFriends
