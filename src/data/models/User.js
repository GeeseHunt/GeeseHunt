import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  displayName: String,
  avatarUrl: String,
  created: { type: Date, default: Date.now },
  oauth: {
    type: [
      {
        id: String,
        provider: String,
      },
    ],
    index: true,
  },
});

// Deletes old version of model, otherwise app will crash in development mode
// https://github.com/kriasoft/react-starter-kit/issues/1418
if (__DEV__) delete mongoose.connection.models.User;

export default mongoose.model('User', userSchema);
