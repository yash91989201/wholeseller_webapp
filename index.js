import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, (err) => {
  console.log(`${err ? `${err}` : `Server is started at port 3000`}`);
});
