import { NextResponse } from "next/server";
import Panel from "@/models/Panel"
import connect from "@/utils/db"

// export const GET = async (request) => {

//     try {
//         await connect()

//         const panels = await Panel.find()
//         return new NextResponse(JSON.stringify(panels), {status: 200})
        
//     } catch (error) {
//         return new NextResponse("Database Error!", {status: 500})
//     }

// }

// export const POST = async (request) => {
//     try {
//         await connect()

//         const body = await request.json()

//         const newPanel = new Panel(body)
//         await newPanel.save()

//         const panels = await Panel.find()

//         // JSON verilerini doğrudan yanıt olarak gönderin
//         return panels
//     } catch (error) {
//         return { error: error.message }
//     }
// }

const getPanels = async () => {
    try {
        await connect()
        const panels = await Panel.find()
        return panels
        
    } catch (error) {
        throw new Error(`An error occured: ${error.message}`)
    }
}

export const GET = async (request) => {
    await connect()
    try {
        
        const panels = await getPanels()
        console.log("PANELS : ",panels)
        return new NextResponse(JSON.stringify(panels), {status: 200})
        // return panels
        
    } catch (error) {
        return new NextResponse(`An error occurred: ${error.message}`)
    }
}

export const POST = async (request) => {
    const body = await request.json()

    const newPanel = new Panel(body)
    console.log("NEW PANEL:", newPanel)

    try {
        await connect()

        await newPanel.save()

        const panels = await getPanels()
        console.log("NEW PANEL:", newPanel)
        return new NextResponse(JSON.stringify(panels), { status: 201 })
        // return new NextResponse("Post has been created", {status:200})
    
    } catch (error) {
        return new NextResponse(`An error occurred: ${error.message}`)
   }
}