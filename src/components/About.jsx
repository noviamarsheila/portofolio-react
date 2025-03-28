import React from "react";
import SkillSet from "./Skillset";

function About() {
	const education = [
		{
			year: "2021 - 2025",
			school: "Universitas Muria Kudus - Teknik Informatika",
			desc: "Mulai serius nyemplung ke dunia teknologi! Belajar software development, web dev, dan backend. Sekarang jadi cinta mati sama React.js, Tailwind CSS, Express.js, dan Laravel. 😎🚀 [hahaha, becanda gaiss, mana ada cinta mati😭🙏]",
		},
		{
			year: "2018 - 2021",
			school: "SMK Avicenna - Farmasi ",
			desc: "Awalnya fokus di bidang farmasi, tapi lama-lama kok hati mulai goyah ke dunia teknologi? 🫠✨ Akhirnya lebih sering ngulik coding daripada hafalin rumus obat! 🤣💻, eitss tapi aku kenal coding baru setelah dinyatakan lulus hahahah!!!",
		},
		{
			year: "2015 - 2018",
			school: "SMP N 1 Pamotan",
			desc: "Dulu anaknya sporty banget, hobi olahraga! 🏀 Tapi ya gitu, tiap pulang sekolah langsung gas main komputer, meski awalnya cuma buat ngegame kodok zuma sama cake itu lhoo!!!😭😭😭🙏. Dari sini mulai kepo banget sama teknologi~ 😆💻",
		},
	];

	return (
		<section
			className="bg-gradient-to-b from-white-100 to-pink-100 "
			id="about"
		>
			<div className="max-w-2xl mx-auto py-8 md:px-0 px-6 ">
				<h2 className="text-3xl font-bold text-center text-pink-600 mb-10 ">
					Riwayat Pendidikan 🎓
				</h2>
				<div className="relative border-l-4 border-pink-300 pl-8 -z-10">
					{education.map((edu, index) => (
						<div key={index} className="mb-8 relative">
							{/* Bulatan Penanda - Diposisikan di Tengah Garis */}
							<div className="absolute -left-11.5 top-5 w-6 h-6 bg-pink-500 border-4 border-white rounded-full"></div>
							{/* Isi Konten */}
							<div className="bg-white p-4 rounded-lg shadow-md">
								<h3 className="text-xl font-semibold text-pink-700">
									{edu.school}
								</h3>
								<span className="text-sm text-gray-900 font-bold">
									{edu.year}
								</span>
								<p className="text-gray-700 mt-2">{edu.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<SkillSet />
		</section>
	);
}

export default About;
