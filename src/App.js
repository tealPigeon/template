import './App.css';
import Carousel, { CarouselItem } from "./components/Carousel";

import Category from './components/Category';

function App() {

	let categories = [
		{
			id: 0,
			color: "teal",
			type: "Category | Marketing",
			img: 'https://images.unsplash.com/photo-1675124516926-a0864dea0abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Solutions for people like you like people',
			autor: 'Adam Sandler',
			text: 'How can we help your technology and services business develop a revenue engine based',
		},
		{
			id: 1,
			color: "teal",

			type: "Category",
			img: 'https://images.unsplash.com/photo-1675124516926-a0864dea0abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Solutions for people like you like people',
			autor: 'Adam Sandler',
			text: 'How can we help your technology and services business develop a revenue engine based',
		},
		{
			id: 2,
			color: "blue",

			type: "Category | Development",
			img: 'https://images.unsplash.com/photo-1675124516926-a0864dea0abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Solutions for people like you like people',
			autor: 'Adam Sandler',
			text: 'How can we help your technology and services business develop a revenue engine based',
		},
		{
			id: 3,
			color: "blue",

			type: "Category | Marketing",
			img: 'https://images.unsplash.com/photo-1675124516926-a0864dea0abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Solutions for people like you like people',
			autor: 'Adam Sandler',
			text: 'How can we help your technology and services business develop a revenue engine based',
		},
		{
			id: 4,
			color: "teal",

			type: "Category | Marketing",
			img: 'https://images.unsplash.com/photo-1675124516926-a0864dea0abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Solutions for people like you like people',
			autor: 'Adam Sandler',
			text: 'How can we help your technology and services business develop a revenue engine based',
		},
		{
			id: 5,
			color: "blue",

			type: "Category",
			img: 'https://images.unsplash.com/photo-1675124516926-a0864dea0abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			title: 'Solutions for people like you like people',
			autor: 'Adam Sandler',
			text: 'How can we help your technology and services business develop a revenue engine based',
		}
	];

	return (
		<div className="App">

			<div className="preview">
				<div className='preview__block'></div>
				<h2 className="preview__title"> Solutions for people like you </h2>
			</div>

			<div className='container'>

				<div className="categories">
					{
						categories.map((category) => <Category key={category.id}
							type={category.type}
							img={category.img}
							title={category.title}
							autor={category.autor}
							text={category.text}
							color={category.color} />)
					}
				</div>

			</div>

			<div className="wrapper__bottom_categories">

				<div className="container ">

						<div className="categories">
						<Carousel>
							{
								categories.map((category) => <CarouselItem key={category.id}
									type={category.type}
									img={category.img}
									title={category.title}
									autor={category.autor}
									text={category.text}
									color={category.color} />)
							}					
							</Carousel>
						</div>
				</div>
			</div>
		</div>
	);
}

export default App;
