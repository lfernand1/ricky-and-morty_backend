const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando-se ao banco de dados...");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Conectado!"))
    .catch((err) => console.log(`Erro ao tentar se conectar com o MongoDB: ${err}`));
};

module.exports = connectDatabase;