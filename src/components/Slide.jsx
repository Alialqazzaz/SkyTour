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
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const navigate = useNavigate()

    const handleBooking = (item) => {
        const flightData = {
            from: 'Helsinki',
            title: item.title,
            price: item.price,
            date: new Date().toLocaleDateString()
        }

        navigate('/booking', { state: { flight: flightData } })
    }

    return (
        <div className="slide">
            <h2>Popular cities from Helsinki</h2>
            <Slider {...settings}>
                {SlideData.map((item) => (
                    <div className="card">
                        <div className="card-top">
                            <img src={item.img} alt={item.title} />
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
