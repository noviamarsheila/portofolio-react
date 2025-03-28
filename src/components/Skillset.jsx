import {
	FaReact,
	FaCss3Alt,
	FaBootstrap,
	FaNodeJs,
	FaPhp,
	FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiLaravel } from "react-icons/si";

const skills = [
	{ name: "ReactJS", icon: <FaReact className="text-blue-500" /> },
	{ name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
	{ name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
	{ name: "ExpressJS", icon: <SiExpress className="text-gray-700" /> },
	{ name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
	{ name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
];

const SkillSet = () => {
	return (
		<section className="py-12 bg-gradient-to-b from-white-100 to-pink-100">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-pink-600">
					Skill Set & Tech Stack
				</h2>
				<p className="text-gray-600 mt-2">
					Teknologi yang saya gunakan dalam pengembangan web nih sobat!!!.
				</p>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-6 md:px-0 -z-50">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="p-6 flex flex-col items-center bg-transparent rounded-lg shadow-md transition transform hover:scale-105"
						>
							<div className="text-5xl">{skill.icon}</div>
							<h3 className="mt-3 text-lg font-semibold text-gray-800">
								{skill.name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillSet;
