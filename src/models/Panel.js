import mongoose from "mongoose";

const { Schema } = mongoose;

const panelSchema = new Schema (
    {
        corebootVersion: {
            type: String,
            required: true,
        },
        panelType: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        imageVersion: {
            type: String,
            required: true,
        },
        soc1IP: {
            type: String,
            required: true,
        },
        gigabitIP: {
            type: String,
            required: true
        },
        serialInterface: {
            type: String,
            unique: true,
            required: true,
        },
    },
    { timestamps: true }
    
)

export default mongoose.models.Panel || mongoose.model("Panel", panelSchema);