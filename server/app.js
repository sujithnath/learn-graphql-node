const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sujith:sujith@cluster0-tziwc.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: "true" },
);
mongoose.connection.on("error", error => {
  console.log(error);
});
mongoose.connection.once("open", () => {
  console.log("mongoose conected");
});

const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("listening to 4000");
});
