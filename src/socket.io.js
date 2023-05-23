import { Server } from "socket.io";

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
        console.log(nickname)
      } else {
        socketNicknameMap[nickname] = socket.id;
        console.log(nickname)
      }

      socket.emit("salutation", `Seja Bem-vindo ${nickname}`);

      io.emit("clients-conected", Object.keys(socketNicknameMap).length + 1);
    });

    // Send a message to a socket based on the nickname
    socket.on('sendMessageToNickname', (data) => {
      const socketId = socketNicknameMap[data.to];

      if (socketId) {
        io.to(socketId).emit('messageReceived', data);
      } else {
        console.log("não foi encontrado esse socket")
        console.log(socketNicknameMap, process.pid)
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
