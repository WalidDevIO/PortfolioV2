import { createClientServer } from "@/lib/supabase";

export const getMetadata = async () => {
  const supabase = createClientServer();

  const { data, error } = await supabase.from("configuration").select("title, description").single();

  if (error) {
    throw error;
  }

  return {
    title: data.title,
    description: data.description,
  };
};
