import { motion } from "framer-motion";
import { certifications } from "@/constants";

function Certifications() {
	return (
		<section className="w-full flex flex-col items-center mt-14 mb-32 px-4">
			<motion.h2
				className="sectionHeadText text-center text-white"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Certifications
			</motion.h2>

			<div className="mt-10 flex flex-wrap gap-8 justify-center">
				{certifications.map((cert, idx) => (
					<motion.div
						key={idx}
						className="neon-card p-6 w-80 rounded-xl border-2 transition-transform hover:scale-105"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: idx * 0.1 }}
					>
						<h3 className="text-xl font-bold text-purple-400 mb-2">
							{cert.title}
						</h3>
						<p className="text-gray-200">{cert.issuer}</p>
						<span className="text-sm text-gray-400 mt-2 block">
							{cert.year}
						</span>
					</motion.div>
				))}
			</div>

			<style jsx>{`
				.neon-card {
					background: linear-gradient(135deg, #1a1a2e, #0f0c29);
					border-image: linear-gradient(
						135deg,
						#a855f7,
						#9333ea,
						#a855f7
					);
					border-image-slice: 1;
					box-shadow:
						0 0 8px #a855f7,
						0 0 16px #9333ea,
						0 0 24px #a855f7;
				}

				.neon-card:hover {
					box-shadow:
						0 0 16px #a855f7,
						0 0 32px #9333ea,
						0 0 48px #a855f7;
				}
			`}</style>
		</section>
	);
}

export default Certifications;
