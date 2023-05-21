import db from "../../db/db.js";

const getFriendsRequests = async (userId) => {
  let conn;

  try {
    conn = await db.getConnection();

    const requestFriends = await conn.query(
      `SELECT fr.id, up.nickname, up.picture, fr.status
       FROM user_profiles up JOIN friend_requests fr ON up.user_id = fr.sender_id
       WHERE fr.recipient_id = ? AND fr.status = 'pending';`,
      [userId]
    );

    return requestFriends
  } catch (error) {
    if (error) return { error: "Não foi possivel solicitar." };
  } finally {
    if (conn) conn.release();
  }
}

export default getFriendsRequests
