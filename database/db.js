const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const connectToDb = () =>{
  mongoose.connect(
    "mongodb+srv://user:pass@cluster0.uw8eky4.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("MongoDB Atlas Conectado!")
  }).catch((err) => console.log(err))
}

module.exports = connectToDb; 