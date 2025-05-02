export default function Button({
	children,
	icon,
	variant = "default",
	...props
}) {
	const isDisabled = props.disabled;

	// Base classes shared by all variants
	const baseClasses = `
    flex items-center gap-[10px] justify-evenly w-fit h-fit py-[12px] px-[22px] rounded-[8px] text-[17px]/[24px] tracking-[0.03em] font-medium
    transition-colors duration-200 ease-in-out
    disabled:cursor-not-allowed
  `;

	// Variant-specific classes
	const variantClasses = {
		default: `
      border-primary border-[1px] text-primary bg-transparent
      hover:bg-primary hover:text-white hover:shadow-button hover:transition-all
      active:bg-pressed active:border-pressed active:text-white active:shadow-none
      disabled:border-disabled disabled:text-disabledText disabled:hover:bg-transparent disabled:hover:text-disabledText disabled:hover:shadow-none
      group-hover:bg-primary group-hover:text-white group-hover:shadow-button group-hover:transition-all
    `,
		white: `
      text-primary bg-white
      hover:bg-white hover:text-primary hover:shadow-white hover:transition-all
      active:bg-white active:text-primary active:shadow-none
      disabled:text-disabledText disabled:hover:bg-white disabled:hover:text-disabledText disabled:hover:shadow-none
      group-hover:bg-white group-hover:text-primary group-hover:shadow-white group-hover:transition-all
    `,
	};

	const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.default}`;
	const iconClasses = `w-[24px] h-[24px] color-primary ${isDisabled ? "color-disabledText" : ""}`;

	return (
		<button className={buttonClasses} {...props}>
			{children}
			{icon && <span className={iconClasses}>{icon}</span>}
		</button>
	);
}
