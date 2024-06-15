import mongoose from "mongoose";
const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
  },
});
export default mongoose.model("character", characterSchema);
