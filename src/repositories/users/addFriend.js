import db from "../../db/db.js";
import { randomUUID } from "node:crypto"

const addFriend = async (userId, body) => {

  const { nickname, requestId } = body

  const id = randomUUID()
  const id2 = randomUUID()


  let conn;

  try {
    conn = await db.getConnection();

    const FriendUser = await conn.query(
      `select * from user_profiles where nickname=?;`,
      [nickname]
    );

    const updateRequestFriends = await conn.query(
      `
        UPDATE friend_requests
        SET status = 'approved'
        WHERE id = ?;
      `, [requestId]
      )

      const addedFriend = await conn.query(
        `
        INSERT INTO friends (id, user1_id, user2_id)
        VALUES (?, ?, ?);
        `, [id, userId, FriendUser[0].user_id]
      )

      const addedFriend2 = await conn.query(
        `
        INSERT INTO friends (id, user1_id, user2_id)
        VALUES (?, ?, ?);
        `, [id2, FriendUser[0].user_id, userId]
      )

      if (updateRequestFriends.affectedRows === 1 && addedFriend.affectedRows === 1 && addedFriend2.affectedRows === 1) {
        return { message: "Amigo adicionado." }
      }
  } catch (error) {
    if (error) return { error: "Não foi possivel adicionar." };
  } finally {
    if (conn) conn.release();
  }
}

export default addFriend
