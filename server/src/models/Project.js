import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  tech: [String],
  coverUrl: String,
  liveUrl: String,
  repoUrl: String,
  role: String,
  metrics: [{ label: String, value: String }],
  images: [String],
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Project", ProjectSchema);
