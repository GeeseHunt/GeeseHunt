import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseId: String,
  subject: { type: String, index: true },
  catalogNumber: { type: String, index: true },
  title: { type: String, index: true },
  popularity: { type: Number, default: 0, index: true },
});

// Deletes old version of model, otherwise app will crash in development mode
// https://github.com/kriasoft/react-starter-kit/issues/1418
if (__DEV__) delete mongoose.connection.models.Course;

export default mongoose.model('Course', courseSchema);
