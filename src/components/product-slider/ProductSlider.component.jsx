import React, { Component } from "react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
import './ProductSlider.styles.css';

export default class ProductSlider extends Component {

    scrollRight = () => {
        document.getElementById(`slider${this.props.id}`).scrollLeft += 400;
        document.getElementById(`slider${this.props.id}`).style.scrollBehavior = 'smooth';
    }

    scrollLeft = () => {
        document.getElementById(`slider${this.props.id}`).scrollLeft -= 400;
        document.getElementById(`slider${this.props.id}`).style.scrollBehavior = 'smooth';
    }

    render() {
        return(
            <main>
                <div 
                className='slider-container'
                id={`slider-container${this.props.id}`} >
                    <i className="fas fa-chevron-right fa-3x" id='slide-right' onClick={this.scrollRight}></i>
                    <section className='container' id={`slider${this.props.id}`}>
                        {this.props.children}
                    </section>
                    <i className="fas fa-chevron-left fa-3x" id='slide-right' onClick={this.scrollLeft}></i>
                </div>
            </main>

        )
    }


    // render() {
    //     const settings = {
    //         dots: false,
    //         infinite: true,
    //         infinite: false,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         autoplay: true,
    //         centerMode: true,
    //         rtl: true
    //     };
    //     return (
    //         <div>
    //             <Slider {...settings}>
    //                 {this.props.children}
    //             </Slider>
    //         </div>
    //     );
    // }
}