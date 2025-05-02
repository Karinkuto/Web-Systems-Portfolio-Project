export default function DesktopNav() {
	const NAVLINKS = [
		{ label: "Portfolio", href: "#Portfolio" },
		{ label: "About", href: "#About" },
		{ label: "Contact", href: "#Contact" },
	];

	return (
		<div className="flex items-center gap-[10px]">
			{NAVLINKS.map((link) => (
				<a
					className="w-[86px] h-[40px] py-[10px] px-[12px] font-[Poppins] font-medium text-[15px] leading-[20px] text-center align-middle"
					key={link.label}
					href={link.href}
				>
					{link.label}
				</a>
			))}
		</div>
	);
}
