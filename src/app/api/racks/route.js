import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Rack from "@/models/Rack";

const getRacks = async() => {
    try {
        await connect()
        const racks = await Rack.find()
        return racks
    } catch (error) {
        throw new Error(`An error occured: ${error.message}`)
    }
}

export const GET = async (request) => {
    await connect()
    try {
        const racks = await getRacks()
        return new NextResponse(JSON.stringify(racks), {status:200})
    } catch (error) {
        throw new Error(`An error occured: ${error.message}`)
    }
}

export const POST = async (request) => {
    const body = await request.json()

    const newRack = new Rack(body)

    try {
        await connect()
        await newRack.save()

        const racks = await getRacks()
        return new NextResponse(JSON.stringify(racks), { status: 201 })

    } catch (error) {
        return new NextResponse(`An error occurred: ${error.message}`)
    }
}