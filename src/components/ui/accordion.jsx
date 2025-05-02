import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function AccordionItem({
  title,
  children,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className="border-b border-border">
      <button
        className="flex items-center justify-between py-4 cursor-pointer w-full text-left"
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        type="button"
      >
        <h3 className="text-base md:text-lg font-medium text-cardTitle">
          {title}
        </h3>
        <div className="text-primary">
          {isOpen ? (
            <ChevronDown className="rotate-180 transition-transform duration-300" />
          ) : (
            <ChevronDown className="transition-transform duration-300" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function Accordion({ items }) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={`accordion-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
          title={item.title}
          defaultOpen={index === 0}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
