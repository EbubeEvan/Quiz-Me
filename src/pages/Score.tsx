import { useApiStore } from "../store/questions";
import { Link } from "react-router-dom";

const Score = () => {
  const { score } = useApiStore();

  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat bg-right overflow-x-hidden md:overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <h1 className="text-center text-rose-900 text-5xl mt-7 md:mt-10 md:ml-[-3.5rem]">
        YOUR SCORE
      </h1>
      <div className="flex justify-center flex-shrink-0 mt-20">
        <div className="pt-10">
          <div className="bg-red-500 h-56 w-56 mb-16 rounded-full mt-[-2rem] ml-[2rem] md:mt-[-4rem] md:ml-0">
            <p className="relative top-[5.5rem] left-[6.2rem] text-slate-50 text-5xl">
              {score}
            </p>
          </div>
          <Link to="/">
            <button className="bg-green-500 h-16 w-72 flex justify-center pt-[1rem] md:relative md:right-[2rem] rounded-md text-slate-100 text-lg">
              New Quiz
            </button>
          </Link>
          <Link to="/answers">
            <button className="bg-orange-700 -500 h-16 w-72 flex justify-center pt-[1rem] md:relative md:right-[2rem] rounded-md mt-8 text-slate-100 text-lg">
              Answers
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Score;
