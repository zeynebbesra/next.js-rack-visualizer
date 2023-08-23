import { NextResponse } from "next/server"
import Panel from "@/models/Panel"
import  connect from "@/utils/db"

export const GET = async (request, {params}) => {

    const {id} = params

    try {
        await connect()

        const panel = await Panel.findById(id)
        return new NextResponse(JSON.stringify(panel), {status: 200})
        
    } catch (error) {
        return new NextResponse("Database Error!", {status: 500})
    }

}