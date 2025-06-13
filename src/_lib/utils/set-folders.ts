import { CloudinaryAsset, Folder } from "../types";

export function setFoldersFromAssets(initialAssets: CloudinaryAsset[]): Folder[] {
    const folderMap: Record<string, Folder> = {};
    const folderIds = new Map<string, number>();
    let nextId = 1;
  
    // First pass: create folder structure with proper IDs
    initialAssets.forEach((asset) => {
      const pathParts = asset.asset_folder.split('/');
      let currentPath = '';
      
      for (const part of pathParts) {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        
        if (!folderMap[currentPath]) {
          // Get parent folder ID
          const parentId = pathParts.length > 1 
            ? folderIds.get(pathParts.slice(0, -1).join('/'))
            : null;
  
          // Get folder name (last part of path)
          const folderName = part;
          
          // Create folder entry
          folderMap[currentPath] = {
            name: folderName,
            id: nextId.toString(),
            parentId: parentId?.toString() || null,
            files: []
          };
          
          // Store folder ID for future reference
          folderIds.set(currentPath, nextId);
          
          // Increment ID for next folder
          nextId++;
        }
      }
    });
  
    // Second pass: add files to folders
    initialAssets.forEach(asset => {
      const path = asset.asset_folder;
      const folder = folderMap[path];
      if (folder) {
        folder.files.push({
          id: asset.public_id,
          name: asset.display_name,
          type: asset.resource_type,
          size: asset.bytes,
          lastModified: asset.uploaded_at,
          format: asset.format,
          secureUrl: asset.secure_url,
          width: asset.width,
          height: asset.height,
        });
      }
    });
  
    // Clean up folder names by removing parent paths from subfolder names
    const cleanedFolders: Record<string, Folder> = {};
    Object.entries(folderMap).forEach(([folderPath, folder]) => {
      const pathParts = folderPath.split('/');
      if (pathParts.length > 1) {
        const folderName = pathParts[pathParts.length - 1];
        cleanedFolders[folderName] = folder;
      } else {
        cleanedFolders[folderPath] = folder;
      }
    });
  
    // Convert to array and return
    const sortedFolderArray = Object.values(cleanedFolders).sort((a, b) => a.name.localeCompare(b.name))

    //Agrego la carpeta "Todos", con todas las imagenes y videos
    const allFolders = {
        id: "0",
        name: "All",
        parentId: null,
        files: sortedFolderArray
            .map((folder) => folder.files).flat()
            .sort((a, b) => b.lastModified.localeCompare(a.lastModified))
      }
    return [allFolders, ...sortedFolderArray]
  }