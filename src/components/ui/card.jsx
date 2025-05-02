export default function Card({ children, image, reverse = false, onClick }) {
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className={`group flex flex-col hover:cursor-pointer ${flexDirection} rounded-[24px] md:p-[24px] p-[16px] ring-border ring-[1px] bg-white gap-[24px] md:max-w-[1156px] sm:max-w-[554px] md:h-fit sm:h-fit hover:ring-cardBorderHover hover:shadow-card hover:ring-[2px] transition-all ease-in-out`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(e);
        }
      }}
    >
      {image && (
        <div className="flex-1 basis-1/2 flex justify-center items-center md:h-full">
          <div className="w-full h-full">
            {typeof image === "string" ? (
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-[8px]"
              />
            ) : (
              image
            )}
          </div>
        </div>
      )}
      <div className="flex flex-col md:gap-[24px] gap-[12px] h-full w-full flex-1 basis-1/2 md:p-[24px]">
        {children}
      </div>
    </div>
  );
}

Card.Title = function CardTitle({ children }) {
  return (
    <div className="w-fit h-fit max-w-[220px] md:max-w-none text-[32px]/[44px] tracking-[0.03em] text-cardTitle font-bold">
      {children}
    </div>
  );
};

Card.Subtitle = function CardSubtitle({ place, dev, year }) {
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

Card.Header = function CardHeader({ children }) {
  return <div className="flex flex-col gap-[12px]">{children}</div>;
};

Card.Body = function CardBody({ children }) {
  return (
    <div className="w-fit h-fit flex flex-col md:gap-[24px] gap-[12px]">
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children }) {
  return (
    <div className="w-full md:max-h-[153px] h-[72px] justify-center md:pt-[16px] flex flex-col md:gap-[24px] gap-[12px]">
      {children}
    </div>
  );
};

Card.Content = function CardContent({ children }) {
  return (
    <div className="w-fit h-fit flex flex-col text-cardContentText md:text-[16px/24px] text-[15px/16px] font-normal gap-[24px]">
      {children}
    </div>
  );
};

Card.Tags = function CardTags({ children }) {
  return (
    <div className="flex flex-wrap items-center gap-[10px]">{children}</div>
  );
};
