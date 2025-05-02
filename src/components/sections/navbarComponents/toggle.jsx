export default function Toggle({
  isOpen,
  onClick,
  className = "",
  ariaLabel = "Toggle menu",
}) {
  return (
    <button
      type="button"
      className={`p-2 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className="flex flex-col justify-center items-center h-6 w-6 relative">
        <span
          className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-white rotate-45 translate-y-0"
              : "bg-primary -translate-y-2"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen ? "bg-white opacity-0" : "bg-primary opacity-100"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-white -rotate-45 translate-y-0"
              : "bg-primary translate-y-2"
          }`}
        />
      </div>
    </button>
  );
}
