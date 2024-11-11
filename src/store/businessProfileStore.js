import { create } from "zustand";

const useBusinessProfileStore = create((set) => ({
    businessProfile: null,
    setBusinessProfile: (businessProfile) => set({ businessProfile }),
    updateStockMetrics: (metrics) =>
        set((state) => ({
            businessProfile: {
                ...state.businessProfile,
                financialMetrics: {
                    ...state.businessProfile.financialMetrics,
                    ...metrics
                }
            },
        })),
    addUpdate: (update) =>
        set((state) => ({
            businessProfile: {
                ...state.businessProfile,
                updates: [update, ...state.businessProfile.updates]
            },
        })),
}));

export default useBusinessProfileStore;