
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProgressState {
  completedLessons: number[];
  setCompletedLessons: (lessons: number[]) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedLessons: [],
      setCompletedLessons: (lessons) => set({ completedLessons: lessons }),
    }),
    {
      name: 'progress-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
