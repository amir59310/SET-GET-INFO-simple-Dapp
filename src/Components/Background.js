

import "../Style/Style.css"
function background({ GetInfo, AddressValue, BalanceValue, SetBtn, setValueInput, GetValue, SetValueBtn, GetBtn, }) {
    return (
        <div className="bg-[#252525] bg-cover min-h-screen flex items-center  justify-center">

            <div className=" bg-[#1b1b1b] m-6 overflow-hidden  drop-shadow-[0px_50px_40px_rgba(0,6,0,0.5)] mt-16  px-3 pb-7 rounded-xl animate-fade-down-for-background
             md:bg-[#222222] md:overflow-hidden md:drop-shadow-[0px_35px_20px_rgba(0,0,0,0.3)] md:mt-0 md:p-6 md:rounded-xl md:animate-fade-down-for-background  ">

                <div className="pt-7 md:pt-0 mb-10 md:mb-0">
                    <h1 className="text-center text-xl font-bold font-mono text-[#929292] tracking-wide 
                    md:text-2xl ">SET and GET Dapp</h1>
                </div>

                <div className=" md:mt-9" >

                    <div className="mt-3 md:mt-5 md:mb-2">

                        <label className="text-[#5c5c5c] font-mono text-sm md:text-lg font-extrabold ml-2 md:ml-5  ">SetValue|
                            <span className=" text-xs md:text-sm ">Please input number</span>
                        </label>

                    </div >

                    <div className="flex items-center justify-center mt-1 gap-2 
                    md:gap-6">
                        <input value={SetBtn} onChange={(e) => setValueInput(e.target.value)} className="border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white  p-2 focus:bg-[#303030] custom-input w-44 
                        md:w-48 " type="number" />
                        <button onClick={SetValueBtn} className="bg-[#3f3f3f] px-4 py-2 font-bold rounded-xl text-[#1e1e1e] transition-all ease-in-out duration-300 hover:bg-[#5c5c5c] ">SET</button>
                    </div>

                </div>

                <div className=" flex items-center justify-center gap-2 md:gap-6 my-4" >

                    <button onClick={GetBtn} className="bg-[#3f3f3f] px-4 py-2 font-bold rounded-xl text-[#1e1e1e] transition-all ease-in-out duration-300 hover:bg-[#5c5c5c]" >GET</button>
                    <input value={GetValue} className="border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white p-2 focus:outline-none w-44 md:w-48 " readOnly />
                </div>
                <div className="mt-12 md:mt-9">
                    <h1 className="text-center text-lg md:text-2xl font-bold font-mono text-[#929292]  tracking-tighter" >GET Information Acocunt</h1>

                    <div className="md:mt-6">

                        <div className="flex items-center justify-center my-4" >
                            <button onClick={GetInfo} className="bg-[#3f3f3f] px-10 py-1 font-bold rounded-xl text-[#1e1e1e] mb-4 transition-all ease-in-out duration-300 hover:bg-[#5c5c5c]">Get Info</button>
                        </div>
                        <div className="ml-3 md:ml-0 mb-2 md:mb-2">
                            <label className="text-[#5c5c5c] text-sm md:text-base font-mono font-extrabold   " >Address and Balance </label>
                        </div>
                        <div className="flex flex-col items-center gap-4 " >

                            <input value={AddressValue} size={42} placeholder="Address" className=" text-center text-xs font-mono border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white p-2 focus:outline-none placeholder:text-center placeholder:text-[#1e1e1e] w-[15rem] 
                     md:w-[19.2rem]  " readOnly></input>
                            <div className="flex flex-row gap-2">
                                <p className="text-[#4b4b4b] text-xl ">ETH</p>
                                <input value={BalanceValue} placeholder="Balance" className="text-center font-mono border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white md:p-2 md:px-9  md:py-1 focus:outline-none placeholder:text-center placeholder:text-[#1e1e1e]
                                md:w-[16.4rem] w-[12.2rem]" readOnly ></input>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default background;