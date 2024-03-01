const server = require("./server.js");
const { conn } = require("./db.js");


conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); 
  });
});