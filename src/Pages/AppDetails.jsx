
import { useParams } from "react-router";
import useApp from "../hook/useHook";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import rating from "../assets/icon-ratings.png";

const AppDetails = () => {
    const { id } = useParams();
    const { app, loading, error } = useApp();

    if (loading) {
        return <p className="text-center font-bold py-10 text-3xl">Loading...</p>;
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
        return (
            <p className="text-center font-bold py-10 text-4xl">
                App Not Found 😢
            </p>
        );
    }

    const {
        image,
        title,
        reviews,
        ratingAvg,
        downloads,
        companyName,
        size,
    } = findData || {};

    return (
        <div className=" max-w-7xl mx-auto py-20">
            <div className=" md:flex justify-start gap-10 lg:flex-row space-y-3">
                <div className="h-64 w-64">
                    <img src={image} className="  rounded-lg shadow-2xl" alt={title} />
                </div>

                <div className="">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="py-2"> Deployed by : <span className="text-[#632EE3] font-bold">{companyName}</span> </p>
                    <hr className="text-gray-400 border-1 "/>
                    <div className="flex justify-between gap-10 py-3 ">
                        <div className="flex flex-col justify-center gap-2">
                            <img className="w-10 h-10" src={download} alt="downloads" />
                            <p>Downloads</p>
                            <h1 className="font-extrabold text-3xl">{downloads}</h1>

                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <img className="w-10 h-10" src={rating} alt="ratings" />
                            <p>Average Ratings</p>
                            <h1 className="font-extrabold text-3xl">{ratingAvg}</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <img className="w-10 h-10" src={review} alt="reviews" />
                            <p>Total Review</p>
                            <h1 className="font-extrabold text-3xl">{reviews}</h1>
                        </div>
                    </div>
                    <button className="btn bg-emerald-400 text-white ">Install Now ({size})</button>
                </div>


            </div>

        </div>
    );
};

export default AppDetails;

/*
import { useParams } from "react-router";
import useApp from "../hook/useHook";
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'

const AppDetails = () => {

    //     const { id } = useParams();
    //     const {app,loading,error} = useApp()
    //     const data = app.find((item) => String(item.id) === String(id));
    //     console.log(data);
    //     if (loading) {
    //         return <p>Loading........</p>
    //     }

    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // }

    // if (!data) {
    //   return <p>No app found for ID: {id}</p>;
    // }

    // const {title, image, size, description, reviews, ratingAvg, downloads } = data;

    const { id } = useParams();
    const { app } = useApp() || [];
    const findData = app.find((data) => data.id === Number(id));
    const {
        image,
        title,
        reviews,
        ratingAvg,
        // companyName,
        downloads,
        // ratings,
        description,
        size,
    } = findData || {};

     console.log(findData);

    if (!findData) {
        return <p className="text-center font-bold py-10 text-4xl">App Not Found</p>
    }


    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // }

    // if (!data) {
    //   return <p>No app found for ID: {id}</p>;
    // }

    // const {title, image, size, description, reviews, ratingAvg, downloads } = data;



    //   const installedApps = JSON.parse(localStorage.getItem("installList")) || [];
    // const [install, setInstall] = useState(
    //   installedApps.some((a) => a.id === Number(id))
    // );
    //   const handleClick = () => {

    //    setInstall(true)
    //    updateInstallList(findData)
    //    toast("Installed")

    //   };

    //     const { id } = useParams();
    //     const {app,loading,error} = useApp()
    //     const data = app.find((item) => String(item.id) === String(id));
    //     console.log(data);
    //     if (loading) {
    //         return <p>Loading........</p>
    //     }

    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // }

    // if (!data) {
    //   return <p>No app found for ID: {id}</p>;
    // }

    // const {title, image, size, description, reviews, ratingAvg, downloads } = data;

    return (
        <>
            <div className="hero bg-base-200 max-w-7xl mx-auto ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                            {description}
                        </p>
                    </div>
                    <hr />
                    <div className="">
                        <div className='flex flex-col justify-center items-center gap-2 '>
                            <img src={download} alt="" />
                            <p className='text-white'>Downloads</p>
                            <h1 className='font-extrabold text-white text-5xl'>{downloads}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 '>
                            <img src={rating} alt="" />
                            <p className='text-white'>Average Ratings</p>
                            <h1 className='font-extrabold text-white text-5xl'>{ratingAvg}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 '>
                            <img src={review} alt="" />
                            <p className='text-white'>Total Review</p>
                            <h1 className='font-extrabold text-white text-5xl'>{reviews}</h1>
                        </div>

                    </div>
                    <button className="btn btn-primary">Install Now ({size})</button>
                </div>
            </div>
        </>
    );
};

export default AppDetails;

*/