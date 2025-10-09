import { Link } from 'react-router';
import download from '../assets/icon-downloads.png'
import ratings from '../assets/icon-ratings.png'

const Card = ({ item }) => {
    const { title, image, ratingAvg, downloads, id } = item;
    return (
       <>
        <Link to={`/app/${id}`}>
            <div className="card bg-base-100 h-full hover:scale-105 transition ease-in-out shadow-sm p-4">
                <figure>
                <img className='w-full h-48 object-cover rounded'
                        src={image}
                        alt="forest" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between">
                        <div className=" flex justify-between bg-gray-200 rounded gap-2 px-3 py-2">
                            <img className='w-5 h-5' src={download} alt="" />
                            <span className='text-green-600 font-bold'>{downloads}</span>
                        </div>
                        <div className=" flex justify-between bg-amber-100 rounded gap-2 px-3 py-2">
                            <img className='w-5 h-5' src={ratings} alt="" />
                            <span className='text-[#FF8811]  font-bold'>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>

    );
};

export default Card;