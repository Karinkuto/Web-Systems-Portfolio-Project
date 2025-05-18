import React from "react";

export default function LanguageCard({ icon, name }) {
  return (
    <div className="w-full sm:w-[122px] h-[72px] sm:h-[120px] bg-[#F7F7F9] rounded-[8px] flex sm:flex-col items-center justify-start sm:justify-center p-4 sm:p-3 gap-3 sm:gap-0">
      <div className="flex items-center sm:mb-4">
        <img src={icon} alt={name} className="w-8 h-8 sm:w-[50px] sm:h-[50px]" />
      </div>
      <p className="text-cardSubtitleMain font-medium text-sm sm:text-base">{name}</p>
    </div>
  );
}
