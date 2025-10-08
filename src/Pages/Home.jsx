import { Link } from "react-router";
import Banner from "../Components/Banner";
import Trusted from "../Components/Trusted";
import Card from "./Card";
import useApp from "../hook/useHook";

const Home = () => {
    const { app, loading, error } = useApp();
    const showCard = app.slice(0, 8);

    return (
        <>
            <Banner />
            <Trusted />
            <div className="p-15 space-y-2">
                <h1 className="text-4xl font-bold text-center">Trending Apps</h1>
                <p className="text-gray-600 text-center pb-4"> Explore All Trending Apps on the Market developed by us</p>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-auto max-w-7xl pb-4">
                    {
                        showCard.map(item => (
                            <Card key={item.id} item={item}></Card>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center">
                    <Link to='/apps' className="btn text-white px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" >Show All</Link>
                </div>


            </div>

        </>
    );
}


export default Home;