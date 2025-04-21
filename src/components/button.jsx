export default function Button({ children, icon, ...props }) {
  const isDisabled = props.disabled;

  // Combine base, hover, active, and disabled styles using Tailwind modifiers
  const baseClasses = `
    flex items-center gap-[10px] justify-evenly w-fit h-fit p-[12px] rounded-[8px] border-primary border-[1px] text-[17px]/[24px] tracking-[0.03em] font-medium text-primary 
    bg-transparent 
    hover:bg-primary hover:text-white hover:shadow-button hover:transition-all
    active:bg-pressed active:border-pressed active:text-white active:shadow-none
    disabled:border-disabled disabled:text-disabledText disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-disabledText disabled:hover:shadow-none
    transition-colors duration-200 ease-in-out
    group-hover:bg-primary group-hover:text-white group-hover:shadow-button group-hover:transition-all
  `;

  const buttonClasses = `${baseClasses} ${icon ? "px-[25px] py-[8px]" : ""}`;
  const iconClasses = `w-[24px] h-[24px] color-primary ${isDisabled ? "color-disabledText" : ""}`;

  // Apply the combined classes and spread the rest of the props (including disabled)
  return (
    <button className={buttonClasses} {...props}>
      {children}
      {icon && <span className={iconClasses}>{icon}</span>}
    </button>
  );
}
