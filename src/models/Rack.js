import mongoose from "mongoose";

const { Schema } = mongoose;

const rackSchema = new Schema(
    {
        deviceIP: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.models.Rack || mongoose.model("Rack", rackSchema);