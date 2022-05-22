import React from "react"
import ArrowLeft from "../../../images/svg/arrowLeft.svg"
import ArrowRight from "../../../images/svg/arrowRight.svg"
import Slider from "react-slick"
import "./styles.scss"

const NextArrow = ({ onClick, arrowLeftClass }) => {
  return (
    <div
      className={`sliderArrow w-10 h-10 bg-white border flex items-center justify-center cursor-pointer rounded-full hover:bg-1976D2 ${arrowLeftClass}`}
      onClick={onClick}
    >
      <span>
        <ArrowRight className="arrowSvg" />
      </span>
    </div>
  )
}

const PrevArrow = ({ onClick, arrowRightClass }) => {
  return (
    <div
      onClick={onClick}
      className={`sliderArrow w-10 h-10 bg-white border flex items-center justify-center cursor-pointer rounded-full hover:bg-1976D2 ${arrowRightClass}`}
    >
      <span>
        <ArrowLeft className="arrowSvg" />
      </span>
    </div>
  )
}

export const CustomSlider = ({
  children,
  isBtn,
  slidesToShow = 1,
  centerMode = false,
  arrowLeftClass,
  arrowRightClass,
}) => {
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow arrowLeftClass={arrowLeftClass} />,
    prevArrow: <PrevArrow arrowRightClass={arrowRightClass} />,
    arrows: isBtn,
    centerMode: centerMode,
    // centerPadding: centerMode && '20%',
  }
  return (
    <div>
      <Slider className="relative" {...settings}>
        {children}
      </Slider>
    </div>
  )
}
