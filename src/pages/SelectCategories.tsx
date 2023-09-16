

const SelectCategories = () => {
  return (
    <main className="w-screen h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden pt-10 overflow-y-scroll" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}
    >
        <h1 className=" md:pt-[1rem] text-6xl md:text-9xl text-center text-red-950 font-serif md:relative md:left-[-1rem]">
        Quiz Me
      </h1>
      {/* Categories */}
        <div className="pt-10 px-8 md:w-[50rem] md:relative md:left-[20rem]">
            <div className="grid md:grid-cols-2 gap-4 md:gap-y-7 gap-x-3 relative left-[7rem] md:left-0">
                <select name="categores" id="categories" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Category">Category</option>
                </select>
                <select name="Difficulty" id="Difficulty" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Difficuly">Difficuly</option>
                    <option value="Difficuly">Easy</option>
                    <option value="Difficuly">Medium</option>
                    <option value="Difficuly">Hard</option>
                </select>
                <select name="type" id="Type" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Type">Quiz Type</option>
                    <option value="Type">Multiple Choice</option>
                    <option value="Type">True / false</option>
                </select>
                <select name="Number" id="Number" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Number">Question Type</option>
                    <option value="Number">10</option>
                    <option value="Number">15</option>
                    <option value="Number">20</option>
                </select>
                <select name="Timer" id="Timer" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Timer">Timer</option>
                    <option value="Timer">Off</option>
                    <option value="Timer">On</option>
                </select>
                <select name="Minutes" id="Minutes" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Minutes">Minutes</option>
                    <option value="Minutes">0</option>
                    <option value="Minutes">5</option>
                    <option value="Minutes">10</option>
                </select>
            </div>
            {/* Buttons */}
            <div className="relative top-[8rem] md:top-[-8rem] md:left-[-5rem] flex justify-center items-center md:h-[100vh] ">
        <div className="flex flex-col gap-6 md:flex-row md:gap-[10rem] mt-[-3rem] relative top-[-2rem] md:top-0">
          <button className=" bg-red-600 text-white py-4 px-10 rounded-md h-fit md:relative md:left-[-3rem]">
            Begin
          </button>
          <button className=" bg-red-600 text-white py-4 px-8 rounded-md h-fit md:relative right-[-5rem] md:right=[-2.5rem]">
            Resume
          </button>
        </div>
      </div>
        </div>
    </main>
  )
}

export default SelectCategories