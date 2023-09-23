import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-cyan-600 h-[4rem]">
      <nav className="flex justify-between relative top-[1rem] px-2">
        <h1 className="text-orange-950 text-3xl font-serif cursor-pointer">
          QUIZ ME
        </h1>
        <div className="md:mt-[-0.3rem]">
          <Link to='/'>
            <button className=" bg-red-600 text-white py-1 px-2 md:py-2 md:px-4 rounded-md relative left-[-1rem] md:left-[-2rem]">
              Quit
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
