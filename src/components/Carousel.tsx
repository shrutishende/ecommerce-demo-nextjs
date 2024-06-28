import React from "react";


export default function Carousel() {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/images/car-1.webp"
                            className="d-block w-100"
                            alt="..."
                            height="500px"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/car-2.webp"
                            className="d-block w-100"
                            height="!500px"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/car-3.webp"
                            className="d-block w-100"
                            height="!500px"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/car-4.webp"
                            className="d-block w-100"
                            height="!500px"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/car-5.webp"
                            className="d-block w-100"
                            height="!500px"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
