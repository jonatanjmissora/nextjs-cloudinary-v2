"use server"
import cloudinary from "cloudinary"

export const getAssets = async () => {
    try {
        const res = await cloudinary.v2
            .search
            .expression('resource_type:image')
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute();
        if(!res){
            console.error("error en getAssets - !res: ")
            return {success: false, response: [], message: "Problemas con la API de Cloudinary"}
        }
        // return res.resources || []
        return {success: true, response: res.resources || [], message: "Assets obtenidos correctamente"}
    } catch (error) {
        console.error("error en getAssets - catch: ", error)
        return {success: false, response: [], message: error.message}
    }
} 