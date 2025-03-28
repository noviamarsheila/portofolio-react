import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram, FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className=" bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Section */}
				<div className="text-center md:text-left">
					<p className="text-lg font-semibold max-w-md">
						"Jangan ragu buat hubungi aku! Laptop udah siap, kopi udah seduh,
						tenaga masih full (kayaknya). 🌷😆"
					</p>
					<p className="mt-8">
						© {new Date().getFullYear()} Novia Marsheila Louisyana. All Rights
						Reserved.
					</p>
				</div>

				{/* Right Section - Split into 3 columns */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
					{/* Social Media */}
					<div>
						<h3 className="font-semibold text-pink-400">Follow Me</h3>
						<div className="flex gap-3 justify-center md:justify-start mt-2">
							<a
								href="https://wa.me/6282325625516"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp className="text-2xl hover:text-pink-500" />
							</a>
							<a
								href="https://instagram.com/nvvamrsl"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram className="text-2xl hover:text-pink-500" />
							</a>
							<a
								href="https://t.me/Nvvamrsl"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTelegram className="text-2xl hover:text-pink-500" />
							</a>
							<a
								href="https://www.tiktok.com/@hitlysky"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTiktok className="text-2xl hover:text-pink-500" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-pink-400">Quick Links</h3>
						<ul className="mt-2 space-y-1">
							<li>
								<a href="#about" className="hover:text-pink-400">
									About
								</a>
							</li>
							<li>
								<a href="#projects" className="hover:text-pink-400">
									Projects
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-pink-400">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold text-pink-400">Services</h3>
						<ul className="mt-2 space-y-1">
							<li>Web Development</li>
							<li>UI/UX Design</li>
							<li>Tech Consultation</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
