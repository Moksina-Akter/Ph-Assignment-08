
/*
import useApp from "../hook/useHook";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";


const Installation = () => {
    const {app,loading} = useApp();
    
  if (loading) {
    return <div className="text-center py-10 text-xl font-bold">Loading...</div>;
  }

//     const {
//         image,
//         title,
//         ratingAvg,
//         downloads,
//         size,
//     } = app
// console.log(app);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="p-15 space-y-2">
                <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
                <p className="text-gray-600 pb-4 text-center">  Explore All Trending Apps on the Market developed by us</p>
                <div className="flex justify-between max-w-7xl mx-auto">
                    <h1 className="font-bold text-xl">() Apps Found</h1>
                    <div className="border-2 border-gray-500 rounded px-3 py-1 flex items-center">
                        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                        <input type="search" name="" id="" className="p-2 border-none focus:outline-none" placeholder="search Apps" />
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex justify-between items-center p-4 bg-base-100 shadow-sm">
                    <div className="flex gap-3">
                        <figure>
                            <img className="w-14 h-14 rounded"
                                src={image}
                                alt="Movie" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{title}</h2>
                            <div className="flex justify-between">
                                <div className=" flex justify-between bg-gray-200 rounded gap-2 px-3 py-2">
                                    <img className='w-5 h-5' src={download} alt="" />
                                    <span className='text-green-600 font-bold'>{downloads}</span>
                                </div>
                                <div className=" flex justify-between bg-amber-100 rounded gap-2 px-3 py-2">
                                    <img className='w-5 h-5' src={rating} alt="" />
                                    <span className='text-[#FF8811]  font-bold'> {ratingAvg} </span>
                                </div>
                                <span>{size}</span>
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <button className="btn bg-emerald-400 text-white ">Uninstall</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Installation;

*/


// import useApp from "../hook/useHook";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { useEffect, useState } from "react";
import errorImg from '../assets/error-404.png';

const Installation = () => {
  // const { app } = useApp();
  const [installList, setInstallList] = useState([]);
  const [sort, setSort] = useState('none');

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installList"));
    if (savedList) setInstallList(savedList);
  }, []);


  const sortedItem = (() => {
    if (sort === 'size-asc') {
      return [...installList].sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads))
    } else if (sort === 'size-desc') {
      return [...installList].sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads))
    } else {
      return installList;
    }
  })()

  if (!installList.length) return <>

  <div className='bg-[#F5F5F5] py-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={errorImg} alt="" />
                <h1 className='font-bold text-4xl text-center'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link to='/' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4">Go Back!</Link>
            </div>
        </div>
  </>


  const handleRemove = (id) => {
    const savedList = JSON.parse(localStorage.getItem("installList"))
    let updatedList = savedList.filter(p => p.id !== id);
    setInstallList(updatedList);

    localStorage.setItem("installList", JSON.stringify(updatedList));
  }



  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-80">
  //       <div className="w-12 h-12 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-4 space-y-2">
        <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-gray-600 pb-4 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex items-center justify-between ">
          <h1 className="font-bold text-xl">({installList.length}) Apps Found</h1>
          <label className='form-control w-full max-w-xs'>
            <select
              className='select select-bordered'
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value='none'>Sort by size</option>
              <option value='size-asc'>Low-High</option>
              <option value='size-desc'>High-Low</option>
            </select>
          </label>
        </div>
      </div>

      {/* App List */}
      <div className="space-y-4 mb-6 ">
        {sortedItem.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 bg-base-100 shadow-sm rounded-lg"
          >
            <div className="md:flex items-center gap-3">
              <figure>
                <img
                  className="w-16 h-16 object-cover rounded"
                  src={item.image}
                  alt={item.title}
                />
              </figure>
              <div>
                <h2 className="card-title">{item.title}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center bg-gray-200 rounded gap-2 px-3 py-1">
                    <img className="w-5 h-5" src={download} alt="" />
                    <span className="text-green-600 font-bold">
                      {item.downloads}
                    </span>
                  </div>
                  <div className="flex items-center bg-amber-100 rounded gap-2 px-3 py-1">
                    <img className="w-5 h-5" src={rating} alt="" />
                    <span className="text-[#FF8811] font-bold">
                      {item.ratingAvg}
                    </span>
                  </div>
                  <span>{item.size}</span>
                </div>
              </div>
            </div>

            <button onClick={()=>handleRemove(item.id)} className="btn bg-emerald-400 text-white">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
