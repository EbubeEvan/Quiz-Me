import React from "react";

const QuizPage = () => {
  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden overflow-y-scroll"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="flex justify-center relative left-[-2.2rem] pb-10 md:pb-0 pt-10 flex-shrink-0 px-3 flex-1 ">
        <div>
          <div className="bg-red-500 w-[21rem] md:w-[42rem] h-[8rem] md:h-[10rem] mt-8 relative left-[5.2rem] md:left-[3.5rem] rounded-md"></div>
          <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-7 md:gap-x-0 py-5 px-5 md:px-0 ml-[0.5rem]">
            <button className="bg-red-500 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md"></button>
            <button className="bg-red-500 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md"></button>
            <button className="bg-red-500 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md"></button>
            <button className="bg-red-500 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md"></button>
            
          </div>
          <div className="flex justify-between relative top-[2rem] md:top-[4rem]">
            <button className="bg-green-500 ext-white py-1 px-2 md:py-2 md:px-4 rounded-md relative left-[5.5rem] md:left-[1rem] top-[-0.5rem]">
              Previous
            </button>
            <button className="bg-green-500 ext-white py-1 px-2 md:py-2 md:px-4 rounded-md relative left-[-1rem] md:left-[2.5rem] top-[-0.5rem]">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizPage;
