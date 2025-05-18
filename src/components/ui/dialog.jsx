import React from "react";
import { X } from "lucide-react";

export default function Dialog({ children, isOpen, onClose }) {
	if (!isOpen) return null;

	// Handle keyboard event for accessibility
	const handleBackdropKeyDown = (e) => {
		if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
			onClose();
		}
	};
	const handleButtonKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			onClose();
		}
	};

	return (
		<button
			type="button"
			className="fixed inset-0 flex px-[24px] justify-center items-start bg-black/30 backdrop-blur-sm z-50 overflow-y-auto"
			onClick={onClose}
			onKeyDown={handleBackdropKeyDown}
			aria-label="Close dialog"
			tabIndex={0}
			style={{ border: "none", padding: 0, margin: 0 }}
		>
			<div
				className="flex flex-col rounded-[24px] p-[24px] ring-border ring-[1px] bg-white gap-[24px] max-w-[1156px] w-full max-h-[90vh] mt-8 mx-4 overflow-y-auto transition-all ease-in-out relative"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				tabIndex={-1}
			>
				<button
					onClick={onClose}
					onKeyDown={handleButtonKeyDown}
					className="absolute top-4 right-4 md:top-[24px] md:right-[24px] p-2 text-xl rounded-full z-10 hover:bg-accent"
					aria-label="Close dialog"
					type="button"
				>
					<X className="w-6 h-6" />
				</button>
				{children}
			</div>
		</button>
	);
}

Dialog.Image = function DialogImage({
	src,
	alt = "",
	children,
	className = "",
}) {
	return (
		<div className={`w-full flex justify-center items-center ${className}`}>
			<div className="w-full h-full">
				{src ? (
					<img
						src={src}
						alt={alt}
						className="w-full max-h-[586px] h-full object-cover rounded-[8px]"
					/>
				) : (
					children
				)}
			</div>
		</div>
	);
};

Dialog.Header = function DialogHeader({ children, className = "" }) {
	return (
		<div className={`flex flex-col gap-[8px] ${className}`}>{children}</div>
	);
};

Dialog.Title = function DialogTitle({ children }) {
	return (
		<div className="w-fit h-fit max-w-[220px] md:max-w-none text-[32px]/[44px] tracking-[0.03em] text-cardTitle font-bold">
			{children}
		</div>
	);
};

Dialog.Subtitle = function DialogSubtitle({ place, dev, year }) {
	return (
		<div className="w-fit h-fit flex items-center gap-[12px] tracking-[0.03em] py-[8px] md:text-[18px/24px] text-[13px]/[16px]">
			{place && (
				<span className="text-cardSubtitleMain uppercase md:font-medium font-semibold">
					{place}
				</span>
			)}
			<span className="w-[8px] h-[8px] rounded-full bg-cardSubtitleDot" />
			{dev && (
				<span className="text-cardSubtitleRest md:font-normal font-semibold">
					{dev}
				</span>
			)}
			<span className="w-[8px] h-[8px] rounded-full bg-cardSubtitleDot" />
			{year && (
				<span className="text-cardSubtitleRest md:font-normal font-semibold">
					{year}
				</span>
			)}
		</div>
	);
};

Dialog.Body = function DialogBody({ children, className = "" }) {
	// Expecting children: [content, tags, separator, footer] in order
	const content = children[0];
	const meta = children.slice(1);

	return (
		<div
			className={`w-full min-w-[310px] h-fit flex flex-col lg:flex-row lg:gap-[72px] gap-[24px] ${className}`}
		>
			<div className="flex-1 lg:basis-8/12">{content}</div>
			<div className="flex-1 lg:basis-4/12 flex flex-col items-start min-w-[310px] mt-2">
				{meta}
			</div>
		</div>
	);
};

Dialog.Footer = function DialogFooter({ children }) {
	return (
		<div className="w-full md:max-h-[153px] h-[72px] flex justify-center md:pt-[16px] md:gap-[24px] gap-[12px]">
			{children}
		</div>
	);
};

Dialog.Content = function DialogContent({ children }) {
	return (
		<div className="w-full h-fit flex flex-col text-start text-cardContentText md:text-[16px/24px] text-[15px/16px] font-normal gap-[24px]">
			{children}
		</div>
	);
};

Dialog.Tags = function DialogTags({ children }) {
	return (
		<div className="flex flex-wrap items-center gap-[10px]">{children}</div>
	);
};

Dialog.Separator = function DialogSeparator() {
	return <div className="w-full h-px bg-border my-4" />;
};
