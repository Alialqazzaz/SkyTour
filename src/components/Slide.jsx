import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SlideData } from '../data/Data'

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', fontSize: '14px' }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', fontSize: '18px' }}
            onClick={onClick}
        />
    )
}

function Slide() {
    const settings   = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };


    const navigate = useNavigate()

    const handleBooking = (item) => {
        const flightData = {
            from: 'Helsinki',
            title: item.title,
            price: item.price,
            date: new Date().toLocaleDateString(),
            flightType: item.flightType,
        }

        navigate('/booking', { state: { flight: flightData } })
    }

    return (
        <div className="slide">
            <h2>Popular cities from Helsinki</h2>
            <Slider {...settings} className="limited-dots">
                {SlideData.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-top">
                        <img src={item.img} alt={`Image of ${item.title}`} />
                            <h1>{item.title}</h1>
                        </div>
                        <div className="card-bottom">
                            <h3>{item.price} £</h3>
                            <button
                                className="view-button"
                                onClick={() => handleBooking(item)}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Slide
