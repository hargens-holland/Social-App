import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import useBusinessProfileStore from "../store/businessProfileStore";

const useGetUserProfileByUsername = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	const { userProfile, setUserProfile } = useUserProfileStore();
	const { businessProfile, setBusinessProfile } = useBusinessProfileStore();

	useEffect(() => {
		const getProfile = async () => {
			setIsLoading(true);
			try {
				// First try to find a user profile
				const userQuery = query(
					collection(firestore, "users"),
					where("username", "==", username)
				);
				const userSnapshot = await getDocs(userQuery);

				if (!userSnapshot.empty) {
					let userDoc;
					userSnapshot.forEach((doc) => {
						userDoc = { ...doc.data(), id: doc.id };
					});
					setUserProfile(userDoc);
					setBusinessProfile(null);
					return;
				}

				// If no user found, try to find a business profile
				const businessQuery = query(
					collection(firestore, "businesses"),
					where("username", "==", username)
				);
				const businessSnapshot = await getDocs(businessQuery);

				if (!businessSnapshot.empty) {
					let businessDoc;
					businessSnapshot.forEach((doc) => {
						businessDoc = { ...doc.data(), id: doc.id };
					});
					setBusinessProfile(businessDoc);
					setUserProfile(null);
				} else {
					// No profile found at all
					setUserProfile(null);
					setBusinessProfile(null);
				}

			} catch (error) {
				showToast("Error", error.message, "error");
				setUserProfile(null);
				setBusinessProfile(null);
			} finally {
				setIsLoading(false);
			}
		};

		getProfile();
	}, [setUserProfile, setBusinessProfile, username, showToast]);

	return {
		isLoading,
		userProfile,
		businessProfile,
		profileType: userProfile ? 'user' : businessProfile ? 'business' : null
	};
};

export default useGetUserProfileByUsername;