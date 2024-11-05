import supabase, { supabaseUrl } from "./supabase";

// Fetch cabins
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

// createCabin is used as createEditCabin
export async function createEditCabin(newCabin, id) {
  // Use destructuring to separate the cabin data
  const { image, ...cabinData } = newCabin; // image is handled separately
  console.log(newCabin);

  // Check if the image is a URL or a File object
  const hasImagePath = image?.startsWith?.("http"); // Check if image starts with a URL
  const imageName =
    typeof image === "object" && image?.name
      ? `${Math.random()}-${image.name}`.replaceAll("/", "")
      : null; // Use random name if the image is a file

  const imagePath = hasImagePath
    ? image // If it's already a URL, just use it
    : imageName
    ? `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}` // Generate URL path for uploaded images
    : null;

  // Create or Edit Cabin
  let query = supabase.from("cabins");

  if (!id) {
    // a/ Create a new cabin
    query = query.insert([{ ...cabinData, image: imagePath }]);
  } else {
    // b/ Edit an existing cabin
    query = query.update({ ...cabinData, image: imagePath }).eq("id", id);
  }

  const { data, error: queryError } = await query.single(); // Use `.single()` to get a single cabin
  if (queryError) {
    throw new Error(queryError.message || "Cabin not created/edited");
  }

  // 2. Upload image (if there is a new image file)
  if (hasImagePath) return data;
  if (imageName) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, image); // Upload image

    if (storageError) {
      // If the image upload fails, delete the newly created cabin
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error(
        "Cabin image could not be uploaded, and the cabin was not created"
      );
    }
  }

  return data; // Return the cabin data
}

// Delete a cabin
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error(error.message || "Cabin could not be deleted");
  }
  return data;
}
