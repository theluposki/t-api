import db from "../../db/db.js";
import { randomUUID } from "node:crypto"

const sendFriendRequest = async (userId, body) => {

  const { to } = body

  const id = randomUUID()

  let conn;

  try {
    conn = await db.getConnection();

    const FriendUser = await conn.query(
      `select * from user_profiles where nickname=?;`,
      [to]
    );

    const requestFriend = await conn.query(
      `
      INSERT INTO friend_requests (id, sender_id, recipient_id)
      VALUES (?,?,?);
      `, [id, userId, FriendUser[0].user_id])

    console.log(requestFriend)

    if (requestFriend.affectedRows === 1) return { message: "Pedido enviado com sucesso!" }
  } catch (error) {
    if (error) return { error: "Não foi possivel solicitar." };
  } finally {
    if (conn) conn.release();
  }
}

export default sendFriendRequest
