import { connectToDB } from "@Utils/database"
import Prompt from "@models/prompt"

export const GET = async(req, res) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to Fetch Prompts", {status: 500})
    }
}