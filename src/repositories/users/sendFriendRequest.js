import db from "../../db/db.js";

const sendFriendRequest = async (userId, body) => {

  const { to } = body

  let conn;

  try {
    conn = await db.getConnection();

    const myUser = await conn.query(
      `select * from user_profiles where user_id=?;`,
      [userId]
    );

    const FriendUser = await conn.query(
      `select * from user_profiles where nickname=?;`,
      [to]
    );

    console.log(FriendUser)

    const data = {
      from: myUser[0].user_id,
	    status: "pending",
      to: FriendUser[0].user_id
    }

    console.log(myUser)
    return data;
  } catch (error) {
    if (error) return { error: "Não foi possivel buscar esse usuário." };
  } finally {
    if (conn) conn.release();
  }


  return { id: userId, body}
}

export default sendFriendRequest
