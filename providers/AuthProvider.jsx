import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../Lib/supabase";
import { useRouter, useSegments } from "expo-router";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [session, setSession] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const segments = useSegments();

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const { data, error } = await supabase.auth.getSession();
				if (error) throw error;
				setSession(data.session);
			} catch (error) {
				console.error("Error fetching session:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchSession();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (_event, session) => {
				setSession(session);
				setIsLoading(false);
			}
		);

		return () => {
			if (authListener && authListener.subscription) {
				authListener.subscription.unsubscribe();
			}
		};
	}, []);

	useEffect(() => {
		if (isLoading) return;

		const inAuthGroup = segments[0] === "(auth)";

		if (!session && !inAuthGroup) {
			router.replace("/sign-in");
		} else if (session && inAuthGroup) {
			router.replace("/home");
		}
	}, [session, isLoading, segments]);

	const value = {
		session,
		isLoading,
		signOut: () => supabase.auth.signOut(),
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
