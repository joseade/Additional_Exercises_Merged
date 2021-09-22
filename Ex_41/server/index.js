const app = require("express")();
const http = require("http").Server(app);
// const io = require("socket.io")(http);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const port = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
let i = 0;
io.on("connection", (socket) => {
  console.log("a user connected");

  setInterval(() => {
    const d = Math.floor(Math.random() * 26) - 15;
    console.log(d);
    io.emit("hello", { x: i, y: d });
    i++;
  }, 3000);

  //   setInterval(() => {
  //     const c = Math.random();
  //     socket.emit("hello", { x: 0, y: c });
  //   }, 1000);

  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
    console.log("HOLA");
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
