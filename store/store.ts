// store/useAuthStore.ts
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface AuthState {
    token: string | null;
    task: Task[];
    completedTask: Task[];  
    setToken: (token: string) => void;
    clearToken: () => void;
    setTask: (tasks: Task[]) => void;
    setCompletedTask: (tasks: Task[]) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: null,
    task: [],
    completedTask: [],
    setToken: (token) => set({ token }),
    clearToken: () => {
        Cookies.remove('authToken');
        set({ token: null });
    },
    setTask: (tasks) => set({ task: tasks }),
    setCompletedTask: (tasks) => set({ completedTask: tasks }),  
}));

export default useAuthStore;
