import { Server } from "socket.io";
import { randomUUID } from "node:crypto"

export const IO = (server) => {
  const io = new Server(server, {
    transports: ["websocket"],
    cors: {
      origin: "https://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  const socketNicknameMap = {};

  io.on('connection', (socket) => {
    // When a user connects, store the nickname and socket ID
    console.log("connected: ", socket.id)

    socket.on('setNickname', (nickname) => {
      if (socketNicknameMap[nickname]) {
        delete socketNicknameMap[nickname];
        socketNicknameMap[nickname] = socket.id;
      } else {
        socketNicknameMap[nickname] = socket.id;
      }

      socket.emit("salutation", `Seja Bem-vindo ${nickname}`);

      io.emit("clients-conected", Object.keys(socketNicknameMap).length + 1);
    });

    // Send a message to a socket based on the nickname
    socket.on('sendMessageToNickname', ({ nickname, message }) => {
      const socketId = socketNicknameMap[nickname];

      if (socketId) {
        io.to(socketId).emit('messageReceived', {
          id: randomUUID(),
          from: 'user',
          to: nickname,
          message,
          createdAt: Date.now(),
        });
      } else {
        console.log("não foi encontrado esse socket")
        console.log(socketId)
      }
    });

    // Handle a user's disconnection
    socket.on('disconnect', () => {
      // Remove the nickname and socket ID from the mapping
      Object.entries(socketNicknameMap).forEach(([nickname, socketId]) => {
        if (socketId === socket.id) {
          delete socketNicknameMap[nickname];
        }
      });
    });
  });




};
