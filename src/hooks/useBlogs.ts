import { useQuery } from "@tanstack/react-query";
import type { Blog } from "../types/blog";
import supabase from "@/supabaseClient";

export const useBlogs = () => {
  const { data, isPending, error, isFetching } = useQuery<Blog[], Error>({
    queryKey: ["blogsData"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("date", { ascending: false })
      // const response = await fetch(
      //   'http://localhost:3001/blogs'
      // );

      // if (!response.ok) {
      //   throw new Error(`Server error: ${response.status}`)
      // }
      // return await response.json();
      if (error) throw new Error(error.message);
      return data as Blog[];
    },
  });

  return { data, isPending, error, isFetching }
}
export const useBlog = (id: string) => {
  const { data, isPending, error, isFetching } = useQuery<Blog, Error>({
    queryKey: ["blog", id],
    queryFn: async () => {


      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw new Error(error.message);
      if (!data) throw new Error("Blog not found")

      return data as Blog;

      //   const rep = await fetch(
      //     `http://localhost:3001/blogs/${id}`
      //   );
      //   if (!rep.ok) {
      //     console.log(rep.status)
      //     throw new Error(`Server error: ${rep.status}`)
      //   }
      //   return await rep.json();



    }
  });
  return { data, isPending, error, isFetching }
}


