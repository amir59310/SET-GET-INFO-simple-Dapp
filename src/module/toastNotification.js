import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

//Toast notification
// Toast For Onclick  Set

export const ClickSet = () =>
    toast.info("Please wait For Confirmation...", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Set Rsult Success
export const ResultTrueSet = () =>
    toast.success("Confirmation success !", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Set Rsult Failed
export const ResultFalseSet = () =>
    toast.error("Confirmation Failed", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Get Rsult Success
export const ResultTrueGet = () =>
    toast.success("Get value success !", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Get Rsult Failed
export const ResultFalseGet = () =>
    toast.error("Get value Failed", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Update Success
export const UpdateTrueGetInfo = () =>
    toast.info(" Update success 😉", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Update Failed
export const UpdateFalseGetInfo = () =>
    toast.error("Update Failed 😢", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
// Toast For Set Number In Input
export const PleaseSetNumber = () =>
    toast.error("Please Set Number", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

// export const WalletConnected = () =>
//     toast.success("Wallet Connected", {
//         position: "top-left",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//     });

export const WalletNotConnected = () =>
    toast.error("Wallet Not Connected", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });