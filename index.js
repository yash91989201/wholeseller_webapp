import express from "express";
const app = express();
app.listen(3000, (err) => {
  console.log(`${err ? `${err}` : `Server is started at port 3000`}`);
});
