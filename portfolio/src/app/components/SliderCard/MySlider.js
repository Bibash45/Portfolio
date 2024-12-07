import React from "react";
import { DataArray } from "@/app/data";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MySlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        centerMode: true,
        centerPadding: "500px",
        dots: true,
        responsive: [
        {
        breakpoint: 1700,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "400px",
        },
        },
        {
        breakpoint: 1550,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "350px",
        },
        },
        {
        breakpoint: 1450,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "300px",
        },
        },
        {
        breakpoint: 1400,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "250px",
        },
        },
        {
        breakpoint: 1250,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "200px",
        },
        },
        {
        breakpoint: 1150,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "170px",
        },
        },
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "230px",
        },
        },
        {
        breakpoint: 980,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "200px",
        },
        },
        {
        breakpoint: 920,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "170px",
        },
        },
        {
        breakpoint: 860,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "130px",
        },
        },
        {
        breakpoint: 780,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "100px",
        },
        },
        {
        breakpoint: 765,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "170px",
        },
        },
        {
        breakpoint: 640,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
        centerPadding: "0",
        },
        },
        ],
        };
  return (
    <Slider {...settings}>
      {DataArray.map((item, index) => {
        return (
          <div key={index} className="my-slider">
            <SliderCard item={item} index={index}  />
          </div>
        );
      })}
    </Slider>
  );
};

export default MySlider;
