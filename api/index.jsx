import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "../Lib/supabase";

// Fetch All Posts
export const usePosts = () => {
	return useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const { data, error } = await supabase.from("posts").select("*");

			if (error) {
				throw new Error(error.message);
			}
			console.log("data", data);

			return data;
		},
	});
};
export const usePostById = (userId) => {
	return useQuery({
		queryKey: ["userPosts", userId],
		queryFn: async () => {
			const { data, error } = await supabase
				.from("posts")
				.select("*")
				.eq("user_id", userId); // Filter by user ID

			if (error) {
				throw new Error(error.message);
			}

			return data;
		},
	});
};

export const useInsertPost = () => {
	return useMutation({
		async mutationFn(data) {
			console.log("dtaaaa->", data);
			const { data: newPost, error } = await supabase
				.from("posts")
				.insert({
					image: data.image,
					description: data.description,
				})
				.single();

			return newPost;
		},
	});
};
