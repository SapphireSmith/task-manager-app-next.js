// store/useAuthStore.ts
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: null,
    setToken: (token) => set({ token }),
    clearToken: () => {
        Cookies.remove('authToken');
        set({ token: null });
    },
}));

export default useAuthStore;
