import React from "react";
import About from "@/sections/footerComponents/about";
import Contact from "@/sections/footerComponents/contact";

export default function Footer() {
	return (
		<footer className="bg-white h-fit rounded-tr-[64px] md:rounded-tr-[120px] flex flex-col">
			{/* Top 1000px - About Section */}
			<div className="h-fit py-[130px] px-6 md:px-[72px] lg:px-[143px] flex items-center">
				<div className="max-w-7xl mx-auto w-full">
					<About />
				</div>
			</div>

			{/* Bottom 1000px - Contact Form */}
			<div className="h-fit">
				<Contact />
			</div>
		</footer>
	);
}
