import React from "react";
import Button from "@/ui/button";

export default function Contact() {
  return (
    <div className="relative h-[1000px] bg-primary rounded-tl-[120px] overflow-hidden p-4">
      {/* Background SVG */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        <img
          src="/contact-bg-shapes.svg"
          alt="Background"
          className="w-[90%] h-[88%] object-contain pointer-events-none select-none"
          draggable="false"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pt-[120px] px-6 md:px-0 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact me
        </h2>

        <p className="text-lg text-center mb-12">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding, I'd love to help
          with it!
        </p>

        <form className="flex flex-col gap-5 max-w-[450px] mx-auto">
          <input
            type="text"
            placeholder="Lorem ipsum"
            className="w-full py-4 px-6 rounded-[8px] bg-white text-cardTitle focus:outline-none"
          />

          <input
            type="email"
            placeholder="loremipsum@gmail.com"
            className="w-full py-4 px-6 rounded-[8px] bg-white text-cardTitle focus:outline-none"
          />

          <textarea
            placeholder="Write your message here..."
            rows="6"
            className="w-full py-4 px-6 rounded-[8px] bg-white text-cardTitle resize-none focus:outline-none"
          />

          <div className="flex justify-center mt-4">
            <Button variant="white">Get in touch</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
