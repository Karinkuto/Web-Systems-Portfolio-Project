import DesktopNav from "./navbarComponents/desktop";
import MobileNav from "./navbarComponents/mobile";
import Toggle from "./navbarComponents/toggle";
import useMobileDetection from "../../hooks/useMobileDetection.js";
import useBodyScrollLock from "../../hooks/useBodyScrollLock.js";
import { useState } from "react";

export default function Navbar() {
	const isMobile = useMobileDetection();
	const [isOpen, setIsOpen] = useState(false);

	useBodyScrollLock(isOpen);

	return (
		<div className="sticky top-0 left-0 z-50 w-full bg-white py-[16px] px-6 md:px-[72px] lg:px-[143px] flex items-center justify-between">
			<a className="text-primary font-bold" href="#My-Logo">
				My Logo
			</a>
			{isMobile && (
				<div className="flex items-center gap-4 relative z-[60]">
					<Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
				</div>
			)}
			{isMobile && (
				<MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
			)}
			{!isMobile && <DesktopNav />}
		</div>
	);
}
