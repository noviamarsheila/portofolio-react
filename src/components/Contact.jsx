import React from "react";
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaDownload,
} from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";

const Contact = () => {
	return (
		<section
			className="py-16 px-6 bg-gradient-to-b from-white-100 to-pink-100 pt-30 pb-26"
			id="contact"
		>
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Bagian Kiri - Info Kontak */}
				<div>
					<h2 className="text-3xl font-bold text-pink-600 mb-4">
						Let's Connect with me! 😎🤝
					</h2>
					<p className="text-gray-600 mb-6">
						Jangan sungkan buat ngobrol atau kerja sama bareng aku! Gaspol 🚀
					</p>
					<div className="space-y-4">
						<div className="flex items-center gap-3 text-gray-700">
							<FaEnvelope className="text-pink-500" />
							<a
								href="mailto:noviasheila123@gmail.com?subject=Halo%20Novia!&body=Hai%20Novia,%0A%0ASaya%20tertarik%20dengan%20karya%20kamu.%20Boleh%20kita%20diskusi%20lebih%20lanjut?%0A%0ATerima%20kasih!"
								className="hover:text-pink-500 transition"
							>
								noviasheila123@gmail.com
							</a>
						</div>
						<div className="flex items-center gap-3 text-gray-700">
							<FaPhone className="text-pink-500" />
							<a
								href="https://wa.me/6282325625516"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-pink-500 transition"
							>
								+62 823-2562-5516
							</a>
						</div>
						<div className="flex items-center gap-3 text-gray-700">
							<FaMapMarkerAlt className="text-pink-500" />
							<div>
								<p>Rembang, Jawa Tengah</p>
								<p>Indonesia</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bagian Kanan - QR Code & Download CV */}
				<div className="flex flex-col items-center justify-center text-center">
					<QRCodeCanvas
						value="https://www.linkedin.com/in/noviamarsheila"
						size={150}
						className="mb-2 shadow-lg rounded-lg"
					/>
					<p className="text-gray-600 mb-6">
						Scan atau klik buat connect di{" "}
						<span>
							<a
								href="https://www.linkedin.com/in/noviamarsheila"
								className="text-pink-500 font-bold"
								target="_blank"
							>
								LinkedIn
							</a>
						</span>
						! ⬅️🔗
					</p>
					<a
						href="/cv-sheila.pdf"
						download
						className="bg-pink-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-pink-600"
					>
						<FaDownload /> Download CV
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
