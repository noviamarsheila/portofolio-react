import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [bgColor, setBgColor] = useState("bg-transparent");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setBgColor("bg-white"); // Background putih setelah scroll
			} else {
				setBgColor("bg-transparent "); // Transparan di posisi atas
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed shadow-md w-full top-0 left-0 transition-all duration-300 ${bgColor} md:px-0 px-6 z-50`}
		>
			<div className="max-w-7xl mx-auto md:px-6">
				<div className="flex justify-between items-center py-4 md:py-6">
					{/* Logo */}
					<h1 className="text-2xl font-bold text-pink-600">
						Sheila's Portfolio
					</h1>

					{/* Desktop Menu */}
					<ul className="hidden md:flex space-x-16 text-gray-700">
						<li>
							<a href="#" className="hover:text-pink-600">
								Home
							</a>
						</li>
						<li>
							<a href="#about" className="hover:text-pink-600">
								About
							</a>
						</li>
						<li>
							<a href="#projects" className="hover:text-pink-600">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:text-pink-600">
								Contact
							</a>
						</li>
					</ul>

					{/* Hamburger Menu */}
					<button
						className="md:hidden text-gray-700"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Menu with Smooth Transition */}
				<div
					className={`fixed top-17 right-2 bg-white shadow-lg w-54 p-4 rounded-lg transition-all duration-300 ease-in-out 
            ${
							isOpen
								? "opacity-100 scale-100"
								: "opacity-0 scale-95 pointer-events-none"
						}`}
				>
					<ul className="space-y-4 text-gray-700">
						<li>
							<a href="#" className="block hover:text-pink-600">
								Home
							</a>
						</li>
						<li>
							<a href="#about" className="block hover:text-pink-600">
								About
							</a>
						</li>
						<li>
							<a href="#projects" className="block hover:text-pink-600">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" className="block hover:text-pink-600">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
