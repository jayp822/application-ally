/** @format */
import Iframe from "react-iframe";
import React from "react";
import Footer from "./footer";
import Brief from "./brief";
import Goal from "./goal";

function Home() {
	const DUMMY_BRIEFS = [
		{
			id: 1,
			img: "data:image/jpeg;base64,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",
			postion: "left",
			info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium, minima quos labore perferendis error, explicabo et illum fugiat eligendi fuga saepe molestiae dolorem. Dicta minus adipisci assumenda nam suscipit! ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium, minima quos labore perferendis error, explicabo et illum fugiat eligendi fuga saepe molestiae dolorem."
		},
		{
			id: 2,
			img: "data:image/jpeg;base64,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",
			position: "right",
			info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui animi fugit perspiciatis illum quisquam? Possimus quidem, libero exercitationem suscipit praesentium dolorum natus, sunt, nobis eos a reprehenderit neque ab. Adipisci labore ipsa quae earum quibusdam facere, quisquam dolorum nisi nesciunt quo iure aspernatur aliquam. Eius sed autem nostrum commodi"
		},
		{
			id: 3,
			img: "data:image/jpeg;base64,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",
			position: "left",
			info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eaque explicabo vel perspiciatis a ipsum omnis quia velit nostrum? Esse, fugiat, corporis earum atque adipisci obcaecati eaque, pariatur cumque sint doloremque optio dicta accusamus ducimus laboriosam modi? Quasi quos aspernatur in nihil impedit, repudiandae ratione nemo praesentium nesciunt incidunt eligendi."
		}
	];
	const DUMMY_GOALS = [
		{
			id: 1,
			goalNo: 1,
			goalInfo:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate blanditiis voluptatem, repudiandae placeat illo officia corporis suscipit in, expedita, delectus alias molestias iste! Veritatis, repellat."
		},
		{
			id: 2,
			goalNo: 2,
			goalInfo:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate blanditiis voluptatem, repudiandae placeat illo officia corporis suscipit in, expedita, delectus alias molestias iste! Veritatis, repellat."
		}
	];
	return (
		<div className="flex flex-col items-center w-[100%]">
			<h1 className="text-white mt-20 text-3xl font-semibold">About</h1>
			{DUMMY_BRIEFS.map(brief => (
				<Brief
					key={brief.id}
					info={brief.info}
					image={brief.img}
					position={brief.position}
				/>
			))}
			<h1 className="text-white mt-20 mb-3 text-3xl font-semibold">
				How it Works
			</h1>

			<Iframe
				url="https://www.youtube.com/embed/9rW6cROYBzY?si=d5uO7U0Nh_MEJFsr"
				width=""
				id=""
				className="mb-20 mx-[8rem] aspect-video w-[75%]"
				display="block"
				position=""
				allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
			/>

			<div>
				<h1 className=" mb-10 text-white text-3xl font-semibold">Goals</h1>
			</div>

			<div className="flex flex-wrap justify-center gap-5 w-[100%]">
				<Goal
					goalTitle={"Goal 1"}
					goalContent={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad."
					}
				/>
				<Goal
					goalTitle={"Goal 2"}
					goalContent={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad."
					}
				/>
				<Goal
					goalTitle={"Goal 3"}
					goalContent={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad."
					}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
