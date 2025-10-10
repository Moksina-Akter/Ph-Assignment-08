

import { useParams } from "react-router";
import useApp from "../hook/useHook";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import rating from "../assets/icon-ratings.png";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Charts from "./Charts";

const AppDetails = () => {
    const { id } = useParams();
    const { app, loading, error } = useApp();
    const [install, setInstalled] = useState();
    if (loading) {
        return <>
            <div className="flex justify-center items-center h-80">
                <div className="w-12 h-12 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
            </div>

        </>

    }

    if (error) {
        return (
            <p className="text-center text-red-500 font-bold py-10 text-3xl">
                Error: {error.message}
            </p>
        );
    }

    const findData = app?.find?.((item) => String(item.id) === String(id));

    if (!findData) {
        console.log("URL ID:", id);
        console.log("Data IDs:", app.map((a) => a.id));
        return ( <>
        <p className="text-center font-bold py-5  text-4xl">
                App is Not Found !
            </p>
            <p className="text-center pb-5"> The app you are for does not exist or has been removed.</p></>
            
        );
    }

    const {
        image,
        title,
        reviews,
        ratingAvg,
        downloads,
        companyName,
        description,
        size,
        ratings
    } = findData || {};

    const handleClick = () => {
        const existingList = JSON.parse(localStorage.getItem("installList"));
        let updatedList = [];
        if (existingList) {
            const isDupli = existingList.some(p => p.id === findData.id);
            if (isDupli) return  '';
            updatedList = [...existingList, findData];
        } else {
            updatedList.push(findData);
        }
        localStorage.setItem("installList", JSON.stringify(updatedList));
        setInstalled(true)
       
        toast.success(`Wow ${title} Installed Successfully!`);
    };

    

    return (
        <div className=" max-w-7xl mx-auto py-20">
            <div className=" md:flex justify-start gap-10 lg:flex-row space-y-3">
                <div className="h-64 w-64">
                    <img src={image} className="  rounded-lg shadow-2xl" alt={title} />
                </div>

                <div className="">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="py-2"> Deployed by : <span className="text-[#632EE3] font-bold">{companyName}</span> </p>
                    <hr className="text-gray-400 border-1 " />
                    <div className="flex justify-between gap-10 py-3 ">
                        <div className="flex flex-col justify-center gap-2">
                            <img className="w-10 h-10" src={download} alt="downloads" />
                            <p>Downloads</p>
                            <h1 className="font-extrabold text-2xl">{downloads}</h1>

                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <img className="w-10 h-10" src={rating} alt="ratings" />
                            <p>Average Ratings</p>
                            <h1 className="font-extrabold text-2xl">{ratingAvg}</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <img className="w-10 h-10" src={review} alt="reviews" />
                            <p>Total Review</p>
                            <h1 className="font-extrabold text-2xl">{reviews}</h1>
                        </div>
                    </div>
                    <button disabled={install} onClick={handleClick} className="btn bg-emerald-400 text-white "> {install ? "Installed" : `Install Now (${size})`}</button>
                </div>

            </div>

            <hr className="text-gray-400 border-1 " />

            <div className="py-10">
                <p className="font-bold text-xl">Ratings</p>
                <Charts  ratings={ratings}/>
            </div>

            <hr className="text-gray-400 border-1 " />


            <div className="py-3">
                <h1 className="font-bold text-xl">Description </h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;




