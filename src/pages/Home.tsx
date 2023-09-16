import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-screen h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}
    >
      <h1 className=" pt-4 text-8xl md:text-9xl text-center text-red-950 font-serif">
        Quiz Me
      </h1>
      <div className=" h-[100vh] flex justify-center items-center md:h-[100vh] ">
        <div className="flex flex-col gap-6 md:flex-row md:gap-[10rem]">
          <Link to={'selectcategories'}>
            <button className=" bg-red-600 text-white py-4 px-10 rounded-md h-fit">
              Begin
            </button>
          </Link>
          <button className=" bg-red-600 text-white py-4 px-8 rounded-md h-fit">
            Resume
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;