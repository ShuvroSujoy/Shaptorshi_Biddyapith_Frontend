import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import StudentComment from "../Cards/StudentComment";
const StudentsCommentS = () => {
    return (
        <div className='space-y-5'>
            <h2 className='text-zinc-950 text-2xl font-semibold'>কোর্সটি নিয়ে শিক্ষার্থীদের মতামত</h2>
            <div className=''>
                <Swiper navigation={true} modules={[Navigation]} className="md:w-[600px]">
                    <SwiperSlide>
                        <StudentComment
                            Comment="সপ্তর্ষীতে ক্লাস করে সব বিষয়ের মূল্যায়ন উৎসবে ভালো করেছি, বিশেষ করে গণিত, বাংলা, ইংরেজি বিষয়ে অনলাইন ব্যাচের শিক্ষকবৃন্দের পড়ানো এত ভালো যে লাইভ ক্লাসের পর দ্বিতীয়বার আর পড়তে হয় না।"
                            Image="public/Image/Sreya.png"
                            Name="শ্রেয়া"
                            Address="শিক্ষার্থী, খুলনা কলেচজিয়েট স্কুল, খুলনা"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudentComment
                            Comment="সপ্তর্ষীতে ক্লাস করে সব বিষয়ের মূল্যায়ন উৎসবে ভালো করেছি, বিশেষ করে গণিত, বাংলা, ইংরেজি বিষয়ে অনলাইন ব্যাচের শিক্ষকবৃন্দের পড়ানো এত ভালো যে লাইভ ক্লাসের পর দ্বিতীয়বার আর পড়তে হয় না।"
                            Image="public/Image/Bgcard1.jpg"
                            Name="অরিত্র"
                            Address="শিক্ষার্থী, খুলনা জিলা স্কুল, খুলনা"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StudentComment
                            Comment="সপ্তর্ষীতে ক্লাস করে সব বিষয়ের মূল্যায়ন উৎসবে ভালো করেছি, বিশেষ করে গণিত, বাংলা, ইংরেজি বিষয়ে অনলাইন ব্যাচের শিক্ষকবৃন্দের পড়ানো এত ভালো যে লাইভ ক্লাসের পর দ্বিতীয়বার আর পড়তে হয় না।"
                            Image="public/Image/adnan.png"
                            Name="আদনান"
                            Address="শিক্ষার্থী,  সরকারি মডেল মাধ্যমিক বিদ্যালয়, খুলনা"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default StudentsCommentS;