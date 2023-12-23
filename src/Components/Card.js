function Card() {
  return (
    <div className="bg-teal-900 bg-opacity-72 min-h-screen flex items-center justify-center">
      <div className="bg-slate-800 max-w-sm rounded overflow-hidden shadow-lgblock max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl font-bold  mb-8 text-center text-gray-100 shadow-stone-800 tracking-[.13em]  ">
          Calculator
        </h1>
        <div className="flex flex-col  items-center mx-auto ">
          <input
            placeholder="getNumber 1"
            className="bg-slate-700 bg-opacity-40  placeholder:text-color-slate-900 mb-5 placeholder:text-center placeholder:hover:text-transparent placeholder:focus:text-transparent  text-gray-200 text-center rounded "
          ></input>
          <input
            placeholder="getNumber 2"
            className="bg-slate-700 bg-opacity-40 mb-5 placeholder:text-color-slate-900 placeholder:text-center placeholder:hover:text-transparent placeholder:focus:text-transparent text-center text-gray-200 rounded "
          ></input>
        </div>
        <div className="flex flex-row items-center mx-auto my-5 justify-center space-x-1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
            Get 1
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
            Get 2
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
            Zarb
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
            Plus
          </button>
        </div>
        <div className="flex flex-col items-center mx-auto ">
          <label
            for="countries"
            className="block mb-2  font-medium text-gray-900 my-6 font-serif text-lg tracking-widest dark:text-white"
          >
            Result Calculation
          </label>

          <input
            value=""
            readOnly
            className=" bg-slate-700 bg-opacity-40 value:text-color-slate-900 placeholder:text-center placeholder:hover:text-transparent text-center text-gray-200 rounded "
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Card;
