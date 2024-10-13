import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wotxycjiezewpcrbllna.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvdHh5Y2ppZXpld3BjcmJsbG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MzI4NzcsImV4cCI6MjA0NDMwODg3N30.ZkAlT297gnlg8bXySXx2PMptXgBBvf3a71J4SDgn6ZM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
