import supabase from "./supabase";
// import { supabaseUrl } from "./supabase";

export async function createSubscribers(newSubscriber) {
  //   console.log(supabaseUrl);
  //   console.log(newContact);

  const { data, error } = await supabase
    .from("subscribers")
    .insert([{ ...newSubscriber }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("subscriber failed to create");
  }

  return data;
}
