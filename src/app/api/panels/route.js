import { NextResponse } from "next/server"
import Panel from "@/models/Panel"
import  connect from "@/utils/db"

export const GET = async (request) => {

    try {
        await connect()

        const panels = await Panel.find()
        return new NextResponse(JSON.stringify(panels), {status: 200})
        
    } catch (error) {
        return new NextResponse("Database Error!", {status: 500})
    }

}