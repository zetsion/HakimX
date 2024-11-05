import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getTestimonials() {
  const { data, error } = await supabase.from("testimonials").select("*");
  if (error) {
    console.log(error);
    throw new Error("testimonials failed to load");
  }

  return data;
}

export async function deleteTestimonial(id) {
  const { data, error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("testimonial failed to delete");
  }
  return data;
}

export async function createEditTestimonial(newTestimonial, id) {
  const hasPhotoPath = newTestimonial.photo?.startsWith?.(supabaseUrl);

  const photoName = `${Math.random()}-${newTestimonial.photo.name}`.replaceAll(
    "/",
    "",
  );

  const photoPath = hasPhotoPath
    ? newTestimonial.photo
    : `${supabaseUrl}/storage/v1/object/public/testimonialsImages/${photoName}`;

  let query = supabase.from("testimonials");
  if (!id) {
    query = query.insert([{ ...newTestimonial, photo: photoPath }]);
  } else {
    query = query.update({ ...newTestimonial, photo: photoPath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  // Execute the main query and log any error
  if (error) {
    console.error("Error creating/updating testimonial:", error);
    throw new Error("Testimonial failed to create or update");
  }
  // 2. upload image
  const { error: storageError } = await supabase.storage
    .from("testimonialsImages")
    .upload(photoName, newTestimonial.photo);
  //   // 3. delete if there was an error uploading corresponding image
  if (storageError) {
    await supabase.from("testimonials").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "testimonial failed to create because there was error while uploading the photo",
    );
  }

  return data;
}
