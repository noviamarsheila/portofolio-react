import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const projects = [
	{
		title: "Gym Website",
		images: ["project1-1.png", "project1-2.png"], // Gambar slider
		desc: [
			"🔥 Gym Website – Landing page kece buat pecinta fitness! 💪🏋️‍♂️ Tampilannya keren, responsif, dan siap bikin semangat nge-gym makin naik! 🚀🔥",
		],
		tech: ["HTML", "CSS", "JavaScript"],
	},
	{
		title: "Sanggar Studio Website",
		images: ["project2-1.png", "project2-2.png", "project2-3.png"], // Bisa lebih dari satu
		desc: [
			"🎨 Sanggar Studio Website – Website keren buat sanggar seni! 🎭🎨 Tampilannya keren, responsif, dan siap bikin semangat berkarya makin tinggi! 🚀🔥",
		],
		tech: ["HTML", "Bootrap5", "JavaScript", "SASS"],
	},
	{
		title: "Coronaf Landing Page",
		images: ["project3-1.png", "project3-2.png"],
		desc: [
			"🦠 Coronaf Landing Page – Landing page kece buat informasi seputar COVID-19! 🦠🔥 Tampilannya keren, responsif, dan siap bikin semangat masyarakat makin waspada! 🚀🔥",
		],
		tech: ["HTML", "Bootrap5", "JavaScript", "SASS"],
	},
	{
		title: "Simple Todolist Website",
		images: ["project4-1.png"],
		desc: [
			"📝 Simple Todolist Website – Website kece buat catat kegiatan harian! 📝🔥 Tampilannya keren [maybe😅], responsif, dan siap bikin semangat produktifitas makin tinggi! 🚀🔥",
		],
		tech: ["ReactJS"],
	},
	{
		title: "Apotek Website - Project Skripsi",
		images: ["project5-1.png", "project5-2.png", "project5-3.png"],
		desc: [
			"🏥 Apotek Website – Website kece buat informasi seputar obat-obatan! 🏥💊 Tampilannya keren, responsif, dan siap bikin semangat masyarakat makin sehat! 🚀🔥",
		],
		tech: [
			"Laravel 11",
			"TailwindCSS",
			"MySQL",
			"API Raja Ongkir",
			"API Midtrans Payment",
		],
	},
	{
		title: "Songkok Marwah - Content Management System",
		images: [
			"project6-1.png",
			"project6-2.png",
			"project6-3.png",
			"project6-4.png",
			"project6-5.png",
		],
		desc: [
			"Sebuah project CMS yang dibuat untuk memudahkan pengelolaan data produk dan transaksi di toko Songkok Marwah. Ini project yang aku kerjakan untuk PKL yaww teman temannn😁😁😁",
		],
		tech: ["Laravel 8", "Bootstrap 5", "MySQL"],
	},
];

const Project = () => {
	return (
		<section
			className="py-16 px-6 bg-gradient-to-b from-pink-100 to-white-100"
			id="projects"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-pink-600">
					My Projects 📌
				</h2>
				<p className="text-gray-600 my-5 max-w-2xl mx-auto text-center">
					Beberapa karya keren😎😎😎[widihhh, pede amatt] yang pernah aku bikin.
					Masih terus belajar dan ngulik, tapi yang penting tetap gaspol! 💻⚡
					hahaha
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-lg overflow-hidden"
						>
							{/* Swiper Slider */}
							<Swiper
								navigation
								modules={[Navigation]}
								className="w-full h-64 md:h-100"
							>
								{project.images.map((img, idx) => (
									<SwiperSlide key={idx}>
										<img
											src={`/images/${img}`}
											alt={`${project.title} ${idx}`}
											className="w-full h-auto "
										/>
									</SwiperSlide>
								))}
							</Swiper>

							<div className="p-4">
								<h3 className="text-xl font-semibold text-gray-700">
									{project.title}
								</h3>
								<p className="my-2 text-gray-600">{project.desc}</p>
								<div className="mt-4 flex gap-2 flex-wrap">
									{project.tech.map((tech, idx) => (
										<span
											key={idx}
											className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-md"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Project;
