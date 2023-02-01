import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Category from "./Category";

export const CarouselItem = (props) => {
	return (
		<div className="carousel-item">
			<div className="carousel-item__wrapper">
				<Category key={props.id}
					type={props.type}
					img={props.img}
					title={props.title}
					autor={props.autor}
					text={props.text}
					color={props.color} />
			</div>
		</div>
	);
};

const Carousel = ({ children }) => {
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	let width;

	if (windowSize >= 1200) width = 390
	else if (windowSize >= 992) width = 485
	else if (windowSize >= 768) width = 375
	else if (windowSize >= 576) width = 288
	else width = windowSize

	const [translateX, setTranslateX] = useState(width);

	useEffect(() => {
		const handleWindowResize = () => {

			console.log(translateX)

			setWindowSize(window.innerWidth);
			if (windowSize >= 1200) setTranslateX(390)
			else if (windowSize >= 992) setTranslateX(485)
			else if (windowSize >= 768) setTranslateX(375)
			else if (windowSize >= 576) setTranslateX(288)
			else setTranslateX(windowSize)

		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});


	const [activeIndex, setActiveIndex] = useState(0);

	const updateIndex = (newIndex) => {

		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children) - 1) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1)
	});


	return (
		<div {...handlers} className="carousel" >
			<div className="inner" style={{ transform: `translateX(-${activeIndex * translateX}px)` }}>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child);
				})}
			</div>


			<div className='wrapper__slider__button'>

				<button className='slider__button' onClick={() => {
					updateIndex(activeIndex - 1);
				}}>
					<svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.31478L2.55461 13L13 24.6852L11.6207 26L0 13L11.6207 0L13 1.31478Z" fill="#00B6DD" />
					</svg>
				</button>

				<button className='slider__button' onClick={() => {
					updateIndex(activeIndex + 1);
				}}>
					<svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.6852L10.4454 13L0 1.31478L1.37932 0L13 13L1.37932 26L0 24.6852Z" fill="#00B6DD" />
					</svg>
				</button>

			</div>

		</div>
	);
};

export default Carousel;
