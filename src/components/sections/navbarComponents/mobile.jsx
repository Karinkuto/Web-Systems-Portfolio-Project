export default function MobileNav({ isOpen, onClose }) {
	const NAVLINKS = [
		{ label: "Portfolio", href: "#Portfolio" },
		{ label: "About", href: "#About" },
		{ label: "Contact", href: "#Contact" },
	];

	return (
		<div
			className={`fixed inset-0 z-50 transition-all duration-300 ${
				isOpen ? "translate-x-0" : "translate-x-full"
			} bg-secondary/70 backdrop-blur-md`}
			style={{
				pointerEvents: isOpen ? "auto" : "none",
			}}
		>
			<div className="flex flex-col w-full h-full pt-24">
				<div className="flex flex-col w-full gap-8 px-6">
					{NAVLINKS.map((link) => (
						<a
							className="w-[351px] h-[56px] font-[Poppins] font-semibold text-[32px] leading-[44px] align-middle text-white"
							key={link.label}
							href={link.href}
							onClick={onClose}
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
