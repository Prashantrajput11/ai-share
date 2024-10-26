import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

// Fetch posts by Id
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

// Create Post
export const useInsertPost = () => {
	const queryClient = useQueryClient();
	return useMutation({
		async mutationFn(data) {
			const { data: newPost, error } = await supabase
				.from("posts")
				.insert({
					image: data.image,
					description: data.description,
				})
				.single();

			if (error) throw new Error(error.message);

			return newPost;
		},

		onSuccess() {
			queryClient.invalidateQueries(["products"]);
		},
	});
};
