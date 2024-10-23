import { supabase } from "@/Lib/supabase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [session, setSession] = useState(null);
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState(null);
	useEffect(() => {
		const fetchSession = async () => {
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession();

			setSession(session);
			setLoading(false);
			console.log("session", session);
			if (session) {
				// fetch profile
				const { data } = await supabase
					.from("profiles")
					.select("*")
					.eq("id", session.user.id)
					.single();
				setProfile(data || null);
			}
		};

		fetchSession();

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);
	return (
		<AuthContext.Provider value={{ session, loading, profile }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
