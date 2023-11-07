import axios from "axios";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryList from "../data/categoryList.json";
import { useApiStore } from "../store/questions";

interface state {
  category: null | number;
  difficulty: null | string;
  type: null | string;
  number: null | number;
  timer: boolean;
  minutes: null | number;
}

const SelectCategories = () => {
  const navigate = useNavigate();

  const [params, setParams] = useState<state>({
    category: null,
    difficulty: null,
    type: null,
    number: null,
    timer: false,
    minutes: null,
  });

  const [loading, setloading] = useState(false);

  console.log(params);

  // category options
  const categoryOption: ReactElement[] = categoryList.trivia_categories.map(
    (item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    }
  );

  const fetchQuestions = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${params.number}&category=${params.category}&difficulty=${params.difficulty}&type=${params.type}`
      );
      const responseData = response.data.results;
      console.log(responseData);
      
      // Update Zustand store with the fetched data
      useApiStore.getState().setQuestionList(responseData);
      if (params.minutes) useApiStore.getState().setTime(params.minutes);
    } catch (error) {
      console.log(error);
    }
    navigate("/quizpage");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const fetching =
    "  bg-gray-700 text-white py-4 px-10 rounded-md h-fit mt-[-1rem]";
  const notFetching =
    " bg-red-600 text-white py-4 px-10 rounded-md h-fit mt-[-1rem]";

  return (
    <main
      className="w-screen h-screen bg-cover bg-no-repeat bg-right pt-[5rem] md:pt-[2rem] pb-5 overflow-y-auto flex flex-col justify-center align-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <h1 className="text-7xl md:text-8xl text-center text-red-950 font-serif mt-[-8rem] md:mt-[-5rem]">SELECT</h1>
      {/* Categories */}
      <div className="pt-10 px-8 max-w-[50rem] w-full mx-auto md:relative md:mt-[5rem]">
        <div className="grid md:grid-cols-2 gap-4 md:gap-y-7 gap-x-[4rem] mx-auto my-8 md:mt-[-1rem] max-w-max">
          <select
            name="category"
            className="md:mx-auto bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer"
            onChange={handleChange}
            required
          >
            <option value="">Category</option>
            {categoryOption}
          </select>
          <select
            name="difficulty"
            id="difficulty"
            className="md:mx-auto bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer"
            onChange={handleChange}
            required
          >
            <option value="">Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            name="type"
            id="Type"
            className="md:mx-auto bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer"
            onChange={handleChange}
            required
          >
            <option value="">Quiz Type</option>
            <option value="multiple">Multiple Choice</option>
          </select>
          <select
            name="number"
            id="number"
            className="md:mx-auto bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer"
            onChange={handleChange}
            required
          >
            <option value="">Number</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
         {/* <label className="flex justify-center ml-[-1rem] text-red-950 text-xl">
            Timer
          </label>
           <select
            name="timer"
            id="timer"
            className="md:mx-auto bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="false">Off</option>
            <option value="true">On</option>
          </select>
          <label className="flex justify-center ml-[-1rem] text-red-950 text-xl">
            Minutes
          </label>
          <select
            name="minutes"
            id="minutes"
            className="md:mx-auto bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="0">2</option>
            <option value="15">5</option>
            <option value="10">10</option>
          </select> */}
        </div>
        {/* Buttons */}
        <div className="pt-12 max-w-[30rem] w-full mx-auto flex justify-center">
          <button
            className={loading ? fetching : notFetching}
            onClick={fetchQuestions}
            disabled={
              !params.category &&
              !params.difficulty &&
              !params.minutes &&
              !params.number
            }
          >
            Start
          </button>
        </div>
      </div>
    </main>
  );
};

export default SelectCategories;
