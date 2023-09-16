import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryProvider";
import { UseCategoryContextType } from "../contexts/CategoryProvider";

const useCategories = (): UseCategoryContextType => useContext(CategoryContext)

export default useCategories