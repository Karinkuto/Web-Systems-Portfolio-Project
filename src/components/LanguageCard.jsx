import React from "react";

export default function LanguageCard({ icon, name }) {
	return (
		<div className="w-[122px] h-[120px] bg-[#F7F7F9] rounded-[8px] flex flex-col justify-center p-3">
			<div className="flex items-center mb-4">
				<img src={icon} alt={name} className="w-[50px] h-[50px]" />
			</div>
			<p className="text-cardSubtitleMain font-medium text-base">{name}</p>
		</div>
	);
}
