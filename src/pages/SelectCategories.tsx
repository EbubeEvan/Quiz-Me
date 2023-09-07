

const SelectCategories = () => {
  return (
    <main className="w-screen h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}
    >
        <h1 className=" pt-4 text-6xl md:text-9xl text-center text-red-950 font-serif">
        Quiz Me
      </h1>
      {/* Categories */}
        <div className="py-10 px-8 md:w-[50rem] md:relative md:left-[20rem]">
            <div className="grid grid-cols-2 gap-y-7 gap-x-3">
                <select name="categores" id="categories" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Category">Category</option>
                </select>
                <select name="Difficulty" id="Difficulty" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Difficuly">Difficuly</option>
                </select>
                <select name="type" id="Type" className="bg-orange-700 -500 text-white w-[13rem] rounded-md py-2 px-2 md:w-[15rem] cursor-pointer">
                    <option value="Type">Type</option>
                </select>
                <select name="Number" id="Number" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Number">Number</option>
                </select>
                <select name="Timer" id="Timer" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Timer">Timer</option>
                </select>
                <select name="Minutes" id="Minutes" className="bg-orange-700 -500 text-white w-[13rem] py-2 px-2 rounded-md md:w-[15rem] cursor-pointer">
                    <option value="Minutes">Minutes</option>
                </select>
            </div>
            {/* Buttons */}
            <div className="relative top-[8rem] md:top-[-8rem] md:left-[-5rem] flex justify-center items-center md:h-[100vh] ">
        <div className="flex flex-col gap-6 md:flex-row md:gap-[10rem]">
          <button className=" bg-red-600 text-white py-4 px-10 rounded-md h-fit md:relative md:left-[-1rem]">
            Begin
          </button>
          <button className=" bg-red-600 text-white py-4 px-8 rounded-md h-fit md:relative right-[-2rem]">
            Resume
          </button>
        </div>
      </div>
        </div>
    </main>
  )
}

export default SelectCategories