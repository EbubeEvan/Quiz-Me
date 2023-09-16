import { ReactElement, createContext, useEffect, useState } from "react";
import axios from "axios";
import {AxiosResponse} from "axios"

export type CategoryType = {
  id: number;
  name: string;
};

const initState: CategoryType[] = [];

export type UseCategoryContextType = { trivia_categories: CategoryType[] };

const initContextState: UseCategoryContextType = { trivia_categories: [] };

export const CategoryContext = createContext<UseCategoryContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CategoryProvider = ({ children }: ChildrenType): ReactElement => {
  const [category, setCategory] = useState<CategoryType[]>(initState);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response: AxiosResponse<CategoryType[]> = await axios.get(
          "https://opentdb.com/api_category.php"
        );
        const responseData = response.data;
        setCategory(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return(
    <CategoryContext.Provider value={{trivia_categories: category}}>
        {children}
    </CategoryContext.Provider>
)
};
