import React from "react";

const Hero = () => {
	return (
		<section className="h-screen flex flex-col-reverse md:flex-row items-center md:px-40 justify-center bg-gradient-to-b from-pink-100 to-white">
			{/* Bagian Kiri: Teks */}
			<div className="md:w-1/2 text-center md:text-left">
				<h1 className="md:text-5xl text-4xl font-bold text-pink-600 mt-20 md:mt-0">
					Hey, aku Sheila!!! 👋
				</h1>
				<p className="mt-4 text-lg text-gray-700 max-w-lg md:px-0 px-6">
					Web developer yang doyan ngulik desain & kode. Bikin web keren &
					fungsional? Gaskeun bareng aku aja! 🚀🔥
				</p>
				<a
					href="#projects"
					className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md"
				>
					See My Projects
				</a>
			</div>

			{/* Bagian Kanan: Foto */}
			<div className="md:w-1/2 flex justify-center mt-20 md:mt-0">
				<img
					src="/images/sela.png"
					alt="Sheila"
					className="w-64 h-64 md:w-90 md:h-90 rounded-full object-cover shadow-lg border-4 border-pink-300"
				/>
			</div>
		</section>
	);
};

export default Hero;
