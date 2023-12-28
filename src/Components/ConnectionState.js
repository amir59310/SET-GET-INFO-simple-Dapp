import "../Style/Style.css"
import { useState, useEffect } from "react";

const ConnectionState = ({ showWalletState }) => {

    //Use state for checking wallet Connection and change color svg
    const [Svgcolor, setSvgColor] = useState("#c50909")


    useEffect(() => {
        // coundition for changing color
        if (showWalletState === "CONNECTED") {
            setSvgColor("#557f5d");
        } else {
            setSvgColor("#c50909");
        }

    }, [showWalletState]);

    return (
        <div className="bg-[#252525] bg-cover flex items-center justify-center ">
            <div className="absolute drop-shadow-xl animate-fade-down-connection-state ">

                <span className="bg-[#3f3f3f]  text-[#b9b9b9]  px-2 pb-1 pt-9 rounded-b-xl flex items-center "><svg width="15" height="15" className="mt-1 mr-1 blur-sm animate-pulse ">
                    <circle cx="5" cy="5" r="5" fill={Svgcolor}> </circle>
                </svg>{showWalletState}</span>
                {/* #c50909 */}
            </div>
        </div>

    );
}

export default ConnectionState;