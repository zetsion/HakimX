import supabase from "./supabase";
// import { supabaseUrl } from "./supabase";

export async function createContacts(newContact) {
  //   console.log(supabaseUrl);
  //   console.log(newContact);
  const { data, error } = await supabase
    .from("contacts")
    .insert([{ ...newContact }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("contacts failed to create");
  }

  return { data };
}
