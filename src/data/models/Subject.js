import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  subject: String,
  description: String,
  unit: String,
  group: String,
  popularity: { type: Number, default: 0, index: true },
});

// Deletes old version of model, otherwise app will crash in development mode
// https://github.com/kriasoft/react-starter-kit/issues/1418
if (__DEV__) delete mongoose.connection.models.Subject;

export default mongoose.model('Subject', subjectSchema);
