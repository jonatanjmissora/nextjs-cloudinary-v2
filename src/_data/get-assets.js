"use server"
import cloudinary from "cloudinary"

export const getAssets = async () => {
    return await cloudinary.v2
        .search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
} 