import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApiStoreState {
  questionList: any[];
  setQuestionList: (data: any) => void;
  score: number;
  setScore: (data: any) => void;
  time: number | null;
  setTime: (data: any) => void;
  completed: boolean;
  setCompleted: (data: any) => void;
}

export const useApiStore = create<ApiStoreState>()(
  persist(
    (set) => ({
      questionList: [],
      setQuestionList: (data) => set({ questionList: data }),
      score: 0,
      setScore: (data) => set({ score: data }),
      time: null,
      setTime: (data) => set({ time: data }),
      completed: false,
      setCompleted: (data) => set({ completed: data })
    }),
    { name: "apiStore" }
  )
);
