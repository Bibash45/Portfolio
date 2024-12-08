import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Testimonial() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: false,
    centerMode: true,
    centerPadding: "10px",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial ">
    <div
      className="bg-[#E0F3FB] max-h-[450px] py-12 lg:px-12 md:px-5 px-3 rounded-lg hidden md:block "
      style={{
        backgroundImage:
          "linear-gradient(-62deg, #EEF7FB 0 50%, #EEF7FB 0% 100%)",
        width: "100%",
      }}
    >
      <div className="lg:container mx-auto   px-0 sm:max-h-[350px]">
        <div className="text-center">
          <h2 className="font-extrabold text-5xl mb-6 text-[#48AEDD]">
            What our customers Are Saying
          </h2>
          <p
            className={`max-w-2xl font-[200] font-recoletaBold mx-auto mb-12 lg:mb-24 `}
          >
            My clients and students are always pleased with my detailed
            explanations. Read what my clients are saying about how I helped
            them make a difference in their lives.
          </p>
        </div>
        <Slider {...settings} className="cursor-all-scroll">

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className=" bg-white swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px]  swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 10%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/daisy.jpg"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Daisy Dominic</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    YouTube Student
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    man I'm not gay but I love you for what you did. thank
                    you. nobody.. seriously nobody teaches this way explaining
                    every class of tailwind and everything you write. people
                    just say that go and download my code from github. but man
                    you are the best. the amazing guide. thanks guru. thanks a
                    ton.❤️❤️❤️❤️❤️
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*copy and paste  it as many times as you  like
   Render  the componanet within parant page.tsx
   */}

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 rounded-2xl p-4 lg:p-6 min-h-[250px]swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/john.jpg"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">John David</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Udemy Student
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    This was an amazing course, thank you so much for your
                    time! I've never been much of a JS person, it's always so
                    confusing to me. You helped explain things in a way that
                    made sense, and helped me remember. So thank you
                    again.⭐️⭐️⭐️⭐️⭐️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 100%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/adijirat.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Adityaraj</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Udemy Student
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    I loved the course. I always wanted to make my own
                    portfolio and a website, but failed where to start. Truly,
                    this course has a great ROI. Additionally, the instructor
                    is very kind and considerate towards his learner’s. I
                    faced quite a lot of obstructions and I always had prompt
                    responses from Ehineex. All in all, would definitely
                    recommend people to start their website portfolio journey
                    from here 💙💙💙💙💙
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(5deg, #48AFDE 0 10%, white 0% 100%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/amaka.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Amaka Success</div>
                  <div
                    className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Youtube Student
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    This is great do-along lecture course that doesn't stall
                    too long at underlying stuff, some prior knowledge comes
                    handy. One should look up newer and maintained packages on
                    some occasions, but in-all great course.❤️❤️❤️❤️❤️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
            <div
              className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active"
              style={{
                backgroundImage:
                  "linear-gradient(4deg, #48AFDE 0 10%, white 0% 100%)",
              }}
            >
              <div className=" flex">
                <div className="min-w-[100px]">
                  <Image
                  height={25}
                  width={25}
                    className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                    src="/papo.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                  <div className="font-medium text-base">Alpheus Papo</div>
                  <div
                    className={`font-[500] ${hind.className} font-medium text-[#48AEDD]`}
                  >
                    Udemy Student
                  </div>
                  <p
                    className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                  >
                    hello thanks for giving me this opportunity to tell about
                    my experience, the course is very good and the layout is
                    very exceptional so i like it. thanks very much keep on
                    bringing more similar courses. ⭐️⭐️⭐️⭐️⭐️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>

  );
}