// import React from "react";
// import yoga from "../../assets/yoga.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import zumba from "../../assets/zumba.jpg";
// import Nutrition from "../../assets/Nutrition.jpg";
// import meditation from "../../assets/meditation.jpg";
// import pilates from "../../assets/pilates.jpg";
// import "./home.css";

// const SecondContainer = () => {
// 	const carouselSettings1 = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 	};
// 	return (
// 		<section id="home_second_container">
// 			<h1 style={{ textAlign: "center" }}>-----Classes offered-----</h1>
// 			<p style={{ textAlign: "center" }}>Chase Your Better Self</p>
// 			<Slider {...carouselSettings1}>
// 				<div className="carousel-card">
// 					<img src={yoga} />
// 				</div>
// 				<div className="carousel-card">
// 					<img src={pilates} />
// 				</div>
// 				<div className="carousel-card">
// 					<img src={zumba} />
// 				</div>
// 				<div className="carousel-card">
// 					<img src={meditation} />
// 				</div>
// 				<div className="carousel-card">
// 					<img src={Nutrition} />
// 				</div>
// 			</Slider>
// 		</section>
// 	);
// };

// export default SecondContainer;

import React, { useEffect, useState } from "react";
import yoga from "../../assets/yoga.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import zumba from "../../assets/zumba.jpg";
import Nutrition from "../../assets/Nutrition.jpg";
import meditation from "../../assets/meditation.jpg";
import pilates from "../../assets/pilates.jpg";
import "./home.css";

const SecondContainer = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const secondContainer = document.getElementById("home_second_container");
		const rect = secondContainer.getBoundingClientRect();
		const isVisible = rect.top <= window.innerHeight - 100;

		setIsVisible(isVisible);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const carouselSettings1 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<section
			id="home_second_container"
			className={isVisible ? "visible" : ""}
		>
			<h1>Classes offered</h1>
			<Slider {...carouselSettings1}>
				<div className="carousel-card">
					<img src={yoga} />
					<div className="hide">
						<h3>Yoga</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
							quis pariatur distinctio vel nobis del.
						</p>
					</div>
				</div>
				<div className="carousel-card">
					<img src={pilates} />
					<div className="hide">
						<h3>Pilates</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
							quis pariatur distinctio vel nobis del.
						</p>
					</div>
				</div>
				<div className="carousel-card">
					<img src={zumba} />
					<div className="hide">
						<h3>Zumba</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
							quis pariatur distinctio vel nobis del
						</p>
					</div>
				</div>
				<div className="carousel-card">
					<img src={meditation} />
					<div className="hide">
						<h3>Meditation</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
							quis pariatur distinctio vel nobis del
						</p>
					</div>
				</div>
				<div className="carousel-card">
					<img src={Nutrition} />
					<div className="hide">
						<h3>Nutrition</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
							quis pariatur distinctio vel nobis del
						</p>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default SecondContainer;
