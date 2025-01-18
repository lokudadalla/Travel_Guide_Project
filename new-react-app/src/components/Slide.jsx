import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg"


const Slide = () => {
return (
    <div id="Reservations">
        {/* Carousel Section */}
        <div className="w-full h-screen">
            <Carousel controls={true} indicators={false} interval={4000} pause="hover">
                <Carousel.Item>
                    <img
                        className="d-block w-full h-screen object-cover"
                        src={img5}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ top: "12%", transform: "translateY(-50%)", bottom: "unset" }}>
                        <h1 className="d-block w-full text-black 5xl font-bold">Adventure Awaits</h1>
                        <h4>Discover the thrill of the Anuradhapura.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full h-screen object-cover"
                        src={img6}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "unset", left: "70%" }}>
                        <h1 className="d-block w-full text-white 5xl font-bold">Cultural Behaviour</h1>
                        <h4 style={{color: "#FFFDD0"}}>ALL relegion live in this diamond.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-full h-screen object-cover"
                        src={img7}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{top: "82%",transform: "translateY(-50%)", bottom: "unset", position: "absolute", textAlign: "center",left: "50%"}}>
                        <h1 className="d-block w-full text-black font-bold" style={{margin: "0", lineHeight: "1.2"}}> Surfing Waves </h1>
                        <h4 style={{marginTop: "10px"}}> Discover the thrill of the Beach. </h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
);
};

export default Slide;
