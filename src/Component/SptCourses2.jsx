import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SptCourses2 = () => {
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
    <div className='container'>
      <div className='flex flex-col items-center gap-5 mt-10 '>
        <h1 className='md:text-4xl text-xl text-red-600 text-center font-bold text-center w-3/5 md:w-2/5'>
        নতুন কারিকুলাম অনুযায়ী আমাদের সেবা
        </h1>
        <div className='flex items-center'>
          <div className='h-[3px] w-16 bg-red-800'></div>
          <div className='h-[5px] w-16 bg-red-800'></div>
          <div className='h-[3px] w-16 bg-red-800'></div>
        </div>
      </div>
      <div className="lg:mx-20 md:mx-10 mx-2 mt-10 mb-10">
        <Slider {...settings}>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/spokenenglish.png" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2 uppercase">Spoken English program.</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/banglproject.png" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">ব্যাকরণ ও সাহিত্য চর্চার মাধ্যমে বাংলা PROJECT.</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/Math.jpeg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">প্রয়োজন বুঝে গণিত শিখন।</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/scienceproject.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">বাস্তবভিত্তিক বিজ্ঞান PROJECT.</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/bgs.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">জীবনের ক্ষেত্রে বাংলাদেশ ও বিশ্বপরিচয়।</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/islam.png" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">অনুশীলনের মাধ্যমে ধর্মীয় শিক্ষা।</h2>
          </div>
          <div className="px-2">
            <img className="h-[300px] md:w-full  rounded-md" src="public/Image/digitaltechnology.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">বিশ্বের কর্মক্ষেত্রে নিজেকে যোগ্যতার আসনে বসাতে ডিজিটাল প্রযুক্তি শিক্ষা।</h2>
          </div>
        </Slider>
      </div>

    </div>
  );
};

export default SptCourses2;