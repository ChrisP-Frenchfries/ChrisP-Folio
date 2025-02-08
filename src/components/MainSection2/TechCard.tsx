import { FC } from "react";

interface TechCardProps {
    image: string;
    alt: string;
    title: string;
    description: string;
}

export const TechCard: FC<TechCardProps> = ({
    image,
    alt,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="mt-2 text-lg font-semibold m-4">{title}</h3>
            <div className="relative group">
                <img
                    src={image}
                    alt={alt}
                    className="w-28 h-28 rounded-full object-cover ring-1 ring-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </div>
            </div>
        </div>
    );
};