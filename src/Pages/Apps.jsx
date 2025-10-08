import { Link } from "react-router";
import useApp from "../hook/useHook";
import Card from "./Card";
import { useState } from "react";


const Apps = () => {
    const { app } = useApp();
    const [search, setSearch] = useState('');
    const term = search.trim().toLowerCase()
    const searchText = term ? app.filter(text =>  text.title.toLowerCase().includes(term)) : app

    return (
        <>
            <div className="p-15 space-y-2">
                <h1 className="text-4xl font-bold text-center">Our All Applications</h1>
                <p className="text-gray-600 pb-4 text-center"> Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className="flex justify-between max-w-7xl mx-auto">
                    <h1 className="font-bold text-xl">({searchText.length}) Apps Found</h1>
                    <div className="border-2 border-gray-500 rounded px-3 py-1 flex items-center">
                        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" name="" id="" className="p-2 border-none focus:outline-none" placeholder="search Apps" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-auto max-w-7xl pb-4">
                    {
                        searchText.map(item => (
                            <Card key={item.id} item={item}></Card>
                        ))
                    }
                </div>


            </div>
        </>
    );
};

export default Apps;