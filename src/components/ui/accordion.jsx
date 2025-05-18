import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="border-b border-border overflow-hidden">
      <button
        className="flex items-center justify-between py-4 cursor-pointer w-full text-left"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        type="button"
      >
        <h3 className="text-base md:text-lg font-medium text-cardTitle">
          {title}
        </h3>
        <ChevronDown 
          className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={`accordion-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
