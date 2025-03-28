import React from "react";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const services = [
	{
		icon: <FaLaptopCode className="text-pink-500 text-3xl" />,
		title: "Pembuatan Website Profesional",
		description:
			"Mau website keren buat portofolio, bisnis, atau landing page? Yang responsive, modern, dan cepat? Aku siap bikinin! 🔥",
	},
	{
		icon: <FaCode className="text-pink-500 text-3xl" />,
		title: "Joki Coding & Bantuan Tugas",
		description:
			"Stuck sama tugas pemrograman? Tenang, aku bisa bantu dari HTML, CSS, JavaScript, React, Laravel, dan masih banyak lagi!!!  [Selagi mampu aku tampung guyss hahahaha] 🤣",
	},
	{
		icon: <FaGraduationCap className="text-pink-500 text-3xl" />,
		title: "Joki Khusus Teknik Informatika",
		description:
			"Buat anak TI yang butuh bantuan extra, aku siap jadi penyelamat! Kalau aku bisa, pasti aku bantuin!!!🚀 [kalau aku mampu yakk 🙏😭]",
	},
];

const Services = () => {
	return (
		<section className="py-16 px-6 bg-gradient-to-b from-pink-100 to-white-100 ">
			<div className="mx-auto grid md:grid-cols-2 items-center gap-10">
				{/* Bagian Kiri - Gambar Kece */}
				<div className="flex justify-center">
					<div>
						<img
							src="/images/image-services.png"
							alt="Jasa IT"
							className="w-full max-w-md"
						/>
						<p className="text-gray-500 text-sm mt-2 text-center opacity-50">
							Illustration by{" "}
							<a
								href="https://www.freepik.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								Freepik
							</a>
						</p>
					</div>
				</div>

				{/* Bagian Kanan - Layanan */}
				<div className="max-w-xl md:ms-8">
					<h2 className="text-3xl font-bold text-pink-600 mb-6">
						🚀 Butuh Jasa IT? Aku Siap Gaspol!
					</h2>
					<ul className="space-y-6 text-gray-700">
						{services.map((service, index) => (
							<li key={index} className="flex items-center gap-6 ">
								<div>{service.icon}</div>
								<div>
									<h3 className="font-semibold text-lg">{service.title}</h3>
									<p className="text-base">{service.description}</p>
								</div>
							</li>
						))}
					</ul>
					<div className="mt-6">
						<a
							href="https://wa.me/6282325625516"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-pink-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-pink-600 w-fit"
						>
							💬 Konsultasi Sekarang
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
