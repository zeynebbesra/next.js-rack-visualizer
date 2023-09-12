import { NextResponse } from "next/server"
import Rack from "@/models/Rack"
import  connect from "@/utils/db"

export const GET = async (request, {params}) => {
    const {id} = params

    try {
        await connect()
        const rack = await Rack.findById(id)
        return new NextResponse(JSON.stringify(rack), {status: 200})
        
    } catch (error) {
        return new NextResponse("Database Error!", {status: 500})
    }
}

export const DELETE = async (request, {params}) => {
    const {id} = params

    try {
        await connect()

        await Rack.findByIdAndDelete(id)
        return new NextResponse("Rack has been deleted", {status: 204})
        
    } catch (error) {
        return new NextResponse("Database Error!", {status: 500})
    }
}