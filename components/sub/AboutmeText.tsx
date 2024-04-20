import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
}

const AcademyCard = ({ title, description }: Props) => {
  // Import images directly here if needed

  return (
    <div className="relative flex items-center gap-6 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 overflow-hidden opacity-0 invisible">
        {/* Import image directly here */}
        <Image
          src="/path/to/your/image.jpg" // Provide the path to your image
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-[0] opacity-50 animate-slide"
        />
      </div>
      <div className="w-full relative z-10">
        <div className="w-full h-full p-12 bg-opacity-75 rounded-lg">
          <h1 className="mt-4 text-5xl font-serif text-white w-auto h-auto">
            {title}
          </h1>
          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
