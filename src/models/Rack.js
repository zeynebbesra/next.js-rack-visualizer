import mongoose from "mongoose";

const { Schema } = mongoose;

const rackSchema = new Schema(
    {
        deviceIP: {
            type: String,
            unique: true,
            required: true,
        },
        dhcp: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

export default mongoose.models.Rack || mongoose.model("Rack", rackSchema);