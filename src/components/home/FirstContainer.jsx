import React from "react";
//import "./Home.css";
//import fitness_photo from "../../assets/fitness.jpg";
import yoga from "../../assets/yoga.jpg";
//import background from "../../assets/image_design.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import "./home.css";

const FirstContainer = () => {
	return (
		<section class="home_first_container">
			<video
				autoPlay
				loop
				playsInline
				poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
				preload="metadata"
				className="style-prefix-16i193b e1o2qubs0"
			>
				<source
					src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className="content">
				<h1>Pushing Boundaries, Breaking Limits.</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
					molestiae atque voluptatem impedit exercitationem nisi cupiditate
				</p>
				<button>
					<a href="#home_second_container">Why Us?</a>
				</button>
			</div>
		</section>
	);
};

export default FirstContainer;
