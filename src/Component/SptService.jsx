import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SptService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tablet and larger devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='container '>
      <div className='flex flex-col items-center gap-5 mt-10'>
        <h1 className='md:text-4xl text-xl text-red-600 text-center font-bold'>
        এক নজরে সপ্তর্ষী
        </h1>
        <div className='flex items-center'>
          <div className='h-[3px] w-16 bg-red-800'></div>
          <div className='h-[5px] w-16 bg-red-800'></div>
          <div className='h-[3px] w-16 bg-red-800'></div>
        </div>
      </div>
      <div className="lg:mx-20 md:mx-10 mx-2 mt-10">
        <Slider {...settings}>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/SptFamily.JPG" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">সপ্তর্ষী পরিবার</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/SptPize2023.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">বার্ষিক পুরস্কার বিতরণ অনুষ্ঠান-2023</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/SptCulture1.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">সাংস্কৃতিক অনুষ্ঠানের একাংশ</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/SptAudiances.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">অভিভাবক সমাবেশ</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/SptSports.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">ক্রীড়াঙ্গনে সপ্তর্ষী</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/presentation1.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2 uppercase">Students Presentation</h2>
          </div>
        </Slider>
      </div>

    </div>
  );
};

export default SptService;