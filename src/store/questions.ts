import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApiStoreState {
  questionList: any[];
  setQuestionList: (data: any) => void;
}

export const useApiStore = create<ApiStoreState>()(
  persist(
    (set) => ({
      questionList: [],
      setQuestionList: (data) => set({ questionList: data }),
    }),
    { name: "apiStore" }
  )
);
