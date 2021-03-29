import mongoose from 'mongoose';

mongoose.Promise = Promise;

const uri = 'mongodb+srv://test:test@cluster0.rn7xg.mongodb.net/test?retryWrites=true&w=majority';
const connect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

export const db = mongoose.connection;
console.log();
async function dbConnect() {
  if (db.readyState === 1) {
    return;
  } else {
    connect;
    db.on('error', console.error.bind(console, 'conneCTION ERROR'));
  }
}

export default dbConnect;
