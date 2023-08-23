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
        relay1State: {
            type: Boolean,
            default: false
        },
        relay2State: {
            type: Boolean,
            default: false
        },
        hwtReady: {
            type: Boolean,
            default: false
        },
        serialInterface: {
            type: String,
            unique: true,
            required: true,
        },
        rack: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rack',
            required: true
        }
        
    },
    { timestamps: true }
    
)

export default mongoose.models.Panel || mongoose.model("Panel", panelSchema);