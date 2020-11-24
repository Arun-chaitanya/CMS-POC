import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderDemo(props) {
    var settings = {
        dots: true
    };
    const compProps = props.block.componentProps;
    console.log(compProps);
    return (       
    <div className="slider-container">
         <Slider {...settings}>
            {compProps.map(comp => 
                <div>
                    <img src={comp.img} />
                </div>
            )}
         </Slider>
    </div>
    )
}

export default SliderDemo;
