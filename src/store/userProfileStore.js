import { create } from "zustand";

const useUserProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    // Updated to track stocks instead of posts
    addToWatchlist: (stock) =>
        set((state) => ({
            userProfile: {
                ...state.userProfile,
                watchlist: [{
                    stockId: stock.id,
                    potentialInvestment: stock.investmentAmount,
                    dateAdded: new Date(),
                }, ...state.userProfile.watchlist]
            },
        })),
    removeFromWatchlist: (stockId) =>
        set((state) => ({
            userProfile: {
                ...state.userProfile,
                watchlist: state.userProfile.watchlist.filter((stock) => stock.stockId !== stockId),
            },
        })),
}));

export default useUserProfileStore;