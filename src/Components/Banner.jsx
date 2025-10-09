import googlePlay from '../assets/google-play.png'
import app from '../assets/App-Store.png'
import bannerImg from '../assets/hero.png'

const Banner = () => {
    return (
        <>
            <div className=" max-w-7xl mx-auto space-y-5">
                <h1 className='text-6xl pt-4 text-center font-bold'> We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                <p className='text-xl text-center text-gray-600'>At <span className='text-[#1e0b48] font-bold'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
                <div className=" flex justify-center items-center">
                    <div className=" p-4">
                        <a href="https://play.google.com/store/games?hl=en">
                        <div className="flex items-center px-5 py-2 border border-gray-400 rounded-lg">
                            <img className='w-10 h-10' src={googlePlay} alt="" />
                            <span className='font-semibold'>Google Play</span>
                        </div>
                        </a>
                    </div>
                    <div className="px-4 py-2">
                        <a href="https://www.apple.com/app-store/">
                       
                        <div className="flex items-center px-5 py-2 border border-gray-400 rounded-lg">
                            <img className='w-10 h-10' src={app} alt="" />
                            <span className='font-semibold'>App Store</span>
                        </div>
                       </a>
                    </div>

                </div>
                <div className="flex justify-center items-center pt-4">
                    <img src={bannerImg} alt="" />
                </div>
            </div>

        </>
    );
};

export default Banner;