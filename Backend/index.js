const server = require("./server");

const PORT = 3001;


server.listen(PORT, async() => {
  console.log(`Server raised in port: ${PORT}`);
});