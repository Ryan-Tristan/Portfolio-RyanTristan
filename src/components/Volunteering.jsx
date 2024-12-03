import React, { useContext, useRef, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import { SocialExperience } from '../constants/social';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Volunteering = () => {
    const {DarkMode} = useContext(ThemeContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === SocialExperience.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? SocialExperience.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`border-b pb-4 ${DarkMode ? "border-white" : "border-neutral-900"}`}>
            <h2 className={`my-20 text-center text-4xl ${DarkMode ? "text-white" : "text-slate-800"}`}>
                Social Experience
            </h2>
            <div className="relative max-w-3xl mx-auto px-12">
                {/* Arrow buttons */}
                <button 
                    onClick={previousImage}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-black/50 text-white p-2 rounded-full ${DarkMode ? "bg-white/30" : "bg-black/30"}`}
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <FaArrowLeft/>
                </button>
                <button 
                    onClick={nextImage}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-black/50 text-white p-2 rounded-full ${DarkMode ? "bg-white/30" : "bg-black/30"}`}
                    style={{ transform: 'translateX(50%)' }}
                >
                    <FaArrowRight/>
                </button>

                {/* Image container */}
                <div 
                    ref={sliderRef}
                    className="overflow-hidden"
                >
                    <div 
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {SocialExperience.map((Experience, index) => (
                            <div 
                                key={index} 
                                className="w-full flex-shrink-0"
                            >
                                <span className={` m-3 text-center flex justify-center text-xl font-semibold ${DarkMode ? "text-white" : "text-black"}`}>
                                    {Experience.title}
                                </span>
                                <img 
                                    src={Experience.image} 
                                    alt="" 
                                    className="rounded object-cover w-full h-full select-none"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-4">
                    {SocialExperience.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-4 h-4 rounded-full ${
                                currentIndex === index 
                                    ? (DarkMode ? "bg-white" : "bg-black")
                                    : (DarkMode ? "bg-slate-400" : "bg-gray-400")
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Volunteering