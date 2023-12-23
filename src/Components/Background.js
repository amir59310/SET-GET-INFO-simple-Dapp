function background({ GetInfo, AddressValue, BalanceValue, SetValue, setValueInput, GetValue, SetValueBtn, GetBtn }) {
    return (
        <div className="bg-[#252525] bg-cover min-h-screen flex items-center  justify-center">

            <div className=" bg-[#1e1e1e] max-w-sm overflow-hidden  drop-shadow-[0px_35px_20px_rgba(0,0,0,0.3)] p-6 rounded-xl ">
                <div className="mt-1">
                    <h1 className="text-center text-2xl font-bold font-mono text-[#929292] tracking-wide ">SET and GET Dapp</h1>
                </div>
                <div className=" mt-9" >
                    <div className="mt-5 mb-2">
                        <label className="text-[#5c5c5c] font-mono font-extrabold ml-1  ">SetValue | <span className="text-sm">Please input number</span></label>
                    </div >
                    <div className="flex items-center justify-center mt-1 gap-6">
                        <input value={SetValue} onChange={(e) => setValueInput(e.target.value)} className="border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white p-2 focus:bg-[#303030] " type="number" />
                        <button onClick={SetValueBtn} className="bg-[#3f3f3f] px-4 py-2 font-bold rounded-xl text-[#1e1e1e] hover:bg-[#5c5c5c]">SET</button>
                    </div>
                </div>

                <div className=" flex items-center justify-center gap-6 my-4" >

                    <button onClick={GetBtn} className="bg-[#3f3f3f] px-4 py-2 font-bold rounded-xl text-[#1e1e1e] hover:bg-[#5c5c5c]" >GET</button>
                    <input value={GetValue} className="border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white p-2 focus:outline-none " readOnly />
                </div>
                <div className="mt-9">
                    <h1 className="text-center text-2xl font-bold font-mono text-[#929292]  tracking-tighter" >GET Information Acocunt</h1>

                    <div className="mt-6">

                        <div className="flex items-center justify-center my-4" >
                            <button onClick={GetInfo} className="bg-[#3f3f3f] px-10 py-1 font-bold rounded-xl text-[#1e1e1e] mb-4 hover:bg-[#5c5c5c]">Get Info</button>
                        </div>
                        <div className="mb-2">
                            <label className="text-[#5c5c5c] font-mono font-extrabold   " >Address and Balance </label>
                        </div>
                        <div className="flex flex-col items-center gap-4 " >

                            <input value={AddressValue} size={42} placeholder="Address" className=" text-center text-xs font-mono border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white p-2 focus:outline-none placeholder:text-center placeholder:text-[#1e1e1e] " readOnly></input>
                            <div className="flex flex-row gap-3">
                                <p className="text-[#4b4b4b] text-xl ">ETH</p>
                                <input value={BalanceValue} placeholder="Balance" className="text-center font-mono border-0 focus:ring-0 rounded-lg bg-[#3f3f3f] dark:text-white p-2 px-9  py-1 focus:outline-none placeholder:text-center placeholder:text-[#1e1e1e]" readOnly ></input>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default background;