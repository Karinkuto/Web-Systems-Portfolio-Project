export default function Badge({ children }) {
  
  const badgeClasses = "bg-accent text-primary px-[12px] py-[4px] w-fit h-fit rounded-[8px] text-[12px]/[16px] tracking-[0.03em] font-medium";
  
return (
    <div className={badgeClasses}>
      {children}
    </div>
  );
}