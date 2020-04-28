import mongoose from 'mongoose';

export default function(databaseUrl, options) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      ...options,
    });

    const db = mongoose.connection;

    db.on('error', err => {
      console.error('Database connection error:', err);
      reject(err);
    });

    db.once('open', () => {
      // eslint-disable-next-line no-console
      console.log('Connected to database.');
      resolve(db);
    });
  });
}
