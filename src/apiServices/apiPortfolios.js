import supabase, { supabaseUrl } from "./supabase";

// export async function getPortfolios() {
//   const { data, error } = await supabase.from("portfolios").select("*");
//   if (error) {
//     console.log(error);
//     throw new Error("Portfolios failed to load");
//   }

//   return data;
// }
/// filtering and reading
export async function getPortfolios() {
  // Start with a query selecting all columns

  let query = supabase.from("portfolios").select("*");

  // Apply filter only if filterByCategory is defined
  // if (filterByCategory) {
  //   query = query.eq("category", filterByCategory);
  // }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Portfolios failed to load");
  }

  return data;
}

export async function deletePortfolio(id) {
  const { data, error } = await supabase
    .from("portfolios")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("portfolio failed to delete");
  }

  return data;
}

export async function createEditPortfolio(newPortfolio, id) {
  const hasPhotoPath = newPortfolio.photo?.startsWith?.(supabaseUrl);
  const photoName = `${Math.random()}-${newPortfolio.photo.name}`.replaceAll(
    "/",
    "",
  );

  const photoPath = hasPhotoPath
    ? newPortfolio.photo
    : `${supabaseUrl}/storage/v1/object/public/portfoliosImages/${photoName}`;

  //1. creare/edit
  let query = supabase.from("portfolios");
  if (!id) {
    query = query.insert([{ ...newPortfolio, photo: photoPath }]);
  } else {
    query = query.update({ ...newPortfolio, photo: photoPath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.log(error);
    throw new Error("portfolio failed to create");
  }
  // 2. upload image
  // Upload image only if it's a new photo
  if (!hasPhotoPath) {
    const { error: storageError } = await supabase.storage
      .from("portfoliosImages")
      .upload(photoName, newPortfolio.photo);

    if (storageError) {
      await supabase.from("portfolios").delete().eq("id", data.id);
      console.log(storageError);
      throw new Error(
        "portfolio failed to create because there was an error while uploading the photo",
      );
    }
  }
  return data;
}
