// api.ts

import type { postBlogInterface } from "../types/blog";
import supabase from "@/supabaseClient";

export const postBlog = async (Blog: postBlogInterface) => {
console.log("POSTING:", Blog);

  const {data,error} = await supabase
  .from("blogs")
  .insert([Blog])
  .select()
  .single();

  if(error){
    console.error("Supabase Error: ",error.message);
    throw new Error(error.message);
  }

  //Following is the code for the fetch the post method for active server
  // const res = await   fetch("http://localhost:3001/blogs", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(Blog),
  // });
  // if (!res.ok){
  //   throw new Error("Failed to Create blog")
  // }

  // return res.json();

  return data;
};
