import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApiStoreState {
  questionList: any[];
  setQuestionList: (data: any) => void;
  score: number,
  setScore: (data: any) => void;
}

export const useApiStore = create<ApiStoreState>()(
  persist(
    (set) => ({
      questionList: [],
      setQuestionList: (data) => set({ questionList: data }),
      score: 0,
      setScore: (data) => set({ score: data })
    }),
    { name: "apiStore" }
  )
);
