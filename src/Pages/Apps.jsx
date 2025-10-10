import useApp from "../hook/useHook";
import Card from "./Card";
import { useState, useEffect } from "react";
import errorImg from "../assets/App-Error.png";
import { Link } from "react-router";

const Apps = () => {
  const { app, loading, error } = useApp();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [searching, setSearching] = useState(false);

  // When app data loads, show all
  useEffect(() => {
    if (!loading && app.length > 0) {
      setFiltered(app);
    }
  }, [app, loading]);

  // Handle search with debounce
  useEffect(() => {
    if (loading) return;
    setSearching(true);
    const timer = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const result = term
        ? app.filter((item) => item.title.toLowerCase().includes(term))
        : app;
      setFiltered(result);
      setSearching(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [search, app, loading]);

  // Combined loader (page load + search)
  const showLoading = loading || searching;

  // Error handle
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-red-500">Error Loading Data</h1>
        <p className="text-gray-600">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-10 space-y-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Our All Applications</h1>
      <p className="text-gray-600 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search Header */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-bold text-xl">
          ({filtered.length || 0}) Apps Found
        </h1>
        <div className="border-2 border-gray-500 rounded px-3 py-1 flex items-center">
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            className="p-2 border-none focus:outline-none"
            placeholder="Search Apps"
          />
        </div>
      </div>

      {/* Loading Spinner */}
      {showLoading ? (
        <div className="flex justify-center items-center h-80">
          <div className="w-12 h-12 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
        </div>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filtered.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 p-10">
          <img src={errorImg} alt="error" className="w-52" />
          <h1 className="font-bold text-4xl text-center">
            OOPS!! APP NOT FOUND
          </h1>
          <p className="text-center text-gray-600">
            The app you requested is not found. Try another search.
          </p>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6"
          >
            Go Back!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Apps;






/*
import { Link } from "react-router";
import useApp from "../hook/useHook";
import Card from "./Card";
import { useState } from "react";
import errors from '../assets/App-Error.png'


const Apps = () => {
    const { app } = useApp();
    const [search, setSearch] = useState('');
    const term = search.trim().toLowerCase()
    const searchText = term ? app.filter(text => text.title.toLowerCase().includes(term)) : app

    return (
        <>
            {
                searchText.length > 0 ? (
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
                    </>) : (

                    <div className="flex flex-col justify-center items-center gap-3 p-10">
                        <img src={errors} alt="" />
                        <h1 className='font-bold text-4xl text-center'>OPPS!! APP NOT FOUND</h1>
                        <p>The App you are requesting is not found on our system.  please try another apps</p>
                        <Link to="/" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6">Go Back!</Link>
                    </div>
                )
            }

        </>
    );
};

export default Apps;

*/